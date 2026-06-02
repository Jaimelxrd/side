import { Request, Response } from "express"
import { prisma } from "@enso/database"
import { analyzeQuestion } from "../services/ai-service"

// Submeter pergunta
export const submitQuestion = async (req: Request, res: Response) => {
  try {
    const { eventParticipantId, content } = req.body

    const eventParticipant = await prisma.eventParticipant.findUnique({
      where: { id: eventParticipantId },
      include: { event: true },
    })

    if (!eventParticipant) {
      res.status(404).json({ error: "Participante não encontrado" })
      return
    }

    const now = new Date()
    const { startTime, endTime, publicationStatus, topic } = eventParticipant.event

    if (publicationStatus !== "PUBLISHED") {
      res.status(400).json({ error: "Evento não está disponível" })
      return
    }

    if (now < startTime || now > endTime) {
      res.status(400).json({ error: "Evento não está ao vivo agora" })
      return
    }

    // IA analisa a pergunta
    const aiResult = await analyzeQuestion(content, topic ?? "evento geral")

    const question = await prisma.question.create({
      data: {
        content,
        eventParticipantId,
        status: aiResult.approved ? "AI_APPROVED" : "AI_REJECTED",
        aiScore: aiResult.score,
        aiReason: aiResult.reason,
      },
    })

    if (!aiResult.approved) {
      res.status(422).json({
        error: "Pergunta não aprovada pela moderação",
        reason: aiResult.reason,
        question,
      })
      return
    }

    res.status(201).json({ ...question, aiResult })
  } catch (error) {
    console.error("Erro ao submeter pergunta:", error)
    res.status(500).json({ error: "Erro ao submeter pergunta" })
  }
}

// Listar perguntas de um evento
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params

    const questions = await prisma.question.findMany({
      where: {
        eventParticipant: { eventId },
        status: { in: ["AI_APPROVED", "APPROVED"] },
      },
      include: {
        eventParticipant: {
          include: { participant: true },
        },
        votes: true,
      },
      orderBy: { createdAt: "asc" },
    })

    const questionsWithVotes = questions
      .map((q) => ({ ...q, voteCount: q.votes.length }))
      .sort((a, b) => b.voteCount - a.voteCount)

    res.json(questionsWithVotes)
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar perguntas" })
  }
}

// Votar numa pergunta
export const voteQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { participantId } = req.body

    const question = await prisma.question.findUnique({
      where: { id },
      include: { eventParticipant: true },
    })

    if (!question) {
      res.status(404).json({ error: "Pergunta não encontrada" })
      return
    }

    const eventParticipant = await prisma.eventParticipant.findUnique({
      where: {
        eventId_participantId: {
          eventId: question.eventParticipant.eventId,
          participantId,
        },
      },
    })

    if (!eventParticipant) {
      res.status(403).json({ error: "Participante não pertence a este evento" })
      return
    }

    const vote = await prisma.vote.create({
      data: {
        questionId: id,
        participantId,
      },
    })

    res.status(201).json(vote)
  } catch (error: any) {
    if (error?.code === "P2002") {
      res.status(400).json({ error: "Já votaste nesta pergunta" })
      return
    }
    res.status(500).json({ error: "Erro ao votar" })
  }
}

// Moderador — aprovar/rejeitar/marcar como respondida
export const updateQuestionStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const question = await prisma.question.update({
      where: { id },
      data: { status },
    })

    res.json(question)
  } catch (error) {
    res.status(500).json({ error: "Erro ao actualizar pergunta" })
  }
}
import { Request, Response } from "express"
import { prisma } from "@enso/database"
import { scheduleReminders, scheduleFollowUp } from "../scheduler/scheduler"
import { sendConfirmationEmail } from "../services/email-service"

// Inscrever participante
export const registerParticipant = async (req: Request, res: Response) => {
  try {
    const { eventId, name, phone, email, origin, responses } = req.body

    // Verifica se o evento existe e está publicado
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    })

    if (!event) {
      res.status(404).json({ error: "Evento não encontrado" })
      return
    }

    if (event.publicationStatus !== "PUBLISHED") {
      res.status(400).json({ error: "Evento não está disponível para inscrições" })
      return
    }

    // Cria ou encontra o participante pelo telefone
    let participant = await prisma.participant.findUnique({
      where: { phone },
    })

    if (!participant) {
      participant = await prisma.participant.create({
        data: { name, phone, email },
      })
    }

    // Verifica se já está inscrito
    const existing = await prisma.eventParticipant.findUnique({
      where: {
        eventId_participantId: {
          eventId,
          participantId: participant.id,
        },
      },
    })

    if (existing) {
      res.status(400).json({ error: "Participante já inscrito neste evento" })
      return
    }

    // Cria a inscrição
    const eventParticipant = await prisma.eventParticipant.create({
      data: {
        eventId,
        participantId: participant.id,
        origin: origin || "MANUAL",
        responses: responses
          ? {
              create: responses.map((r: { fieldId: string; value: string }) => ({
                fieldId: r.fieldId,
                value: r.value,
              })),
            }
          : undefined,
      },
      include: {
        participant: true,
        responses: true,
      },
    })

    // Agenda lembretes e follow-up
    await scheduleReminders(
      eventId,
      participant.id,
      participant.phone,
      participant.name,
      event.name,
      event.startTime
    )

    await scheduleFollowUp(
      eventId,
      participant.id,
      participant.phone,
      participant.email,
      participant.name,
      event.name,
      event.endTime
    )

        // Envia email de confirmação
    await sendConfirmationEmail(
      participant.email,
      participant.name,
      event.name,
      event.date,
      event.startTime,
      event.location ?? undefined
    )

    res.status(201).json(eventParticipant)
  } catch (error) {
    console.error("Erro ao inscrever participante:", error)
    res.status(500).json({ error: "Erro ao inscrever participante" })
  }
}

// Listar participantes de um evento
export const getParticipants = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params

    const participants = await prisma.eventParticipant.findMany({
      where: { eventId },
      include: {
        participant: true,
        responses: {
          include: { field: true },
        },
      },
      orderBy: { createdAt: "asc" },
    })

    res.json(participants)
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar participantes" })
  }
}

// Check-in
export const checkIn = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const eventParticipant = await prisma.eventParticipant.update({
      where: { id },
      data: {
        checkedIn: true,
        checkedInAt: new Date(),
      },
      include: { participant: true },
    })

    res.json(eventParticipant)
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer check-in" })
  }
}
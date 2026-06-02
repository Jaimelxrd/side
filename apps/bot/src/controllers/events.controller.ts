import { Request, Response } from "express"
import { prisma } from "@enso/database"
import { cancelEventJobs, rescheduleEventJobs } from "../scheduler/scheduler"
import { generateEventQRCode } from "../services/qrcode-service"

// Criar evento
export const createEvent = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      topic,
      date,
      startTime,
      endTime,
      location,
      slug,
      organizationId,
    } = req.body

    const event = await prisma.event.create({
      data: {
        name,
        description,
        topic,
        date: new Date(date),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        location,
        slug,
        organizationId,
      },
    })

    const qrCode = await generateEventQRCode(event.slug)
    res.status(201).json({ ...event, qrCode })
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar evento" })
  }
}

// Listar eventos
export const getEvents = async (req: Request, res: Response) => {
  try {
    const { organizationId } = req.query

    const events = await prisma.event.findMany({
      where: organizationId
        ? { organizationId: String(organizationId) }
        : undefined,
      orderBy: { date: "asc" },
    })

    res.json(events)
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar eventos" })
  }
}

// Buscar evento por ID
export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        formFields: { orderBy: { order: "asc" } },
        participants: {
          include: { participant: true },
        },
      },
    })

    if (!event) {
      res.status(404).json({ error: "Evento não encontrado" })
      return
    }

    res.json(event)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar evento" })
  }
}

// Actualizar evento
export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, description, topic, date, startTime, endTime, location } = req.body

    const event = await prisma.event.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(topic && { topic }),
        ...(date && { date: new Date(date) }),
        ...(startTime && { startTime: new Date(startTime) }),
        ...(endTime && { endTime: new Date(endTime) }),
        ...(location && { location }),
      },
    })

    // Se alterou horários, reagenda todos os jobs
    if (startTime || endTime) {
      await rescheduleEventJobs(
        id,
        new Date(startTime || event.startTime),
        new Date(endTime || event.endTime)
      )
    }

    res.json(event)
  } catch (error) {
    res.status(500).json({ error: "Erro ao actualizar evento" })
  }
}

// Publicar evento
export const publishEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const event = await prisma.event.update({
      where: { id },
      data: { publicationStatus: "PUBLISHED" },
    })

    res.json(event)
  } catch (error) {
    res.status(500).json({ error: "Erro ao publicar evento" })
  }
}

// Cancelar evento
export const cancelEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const event = await prisma.event.update({
      where: { id },
      data: { publicationStatus: "CANCELLED" },
    })

    // Cancela todos os jobs agendados
    await cancelEventJobs(id)

    res.json(event)
  } catch (error) {
    res.status(500).json({ error: "Erro ao cancelar evento" })
  }
}
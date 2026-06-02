import { Worker, Job } from "bullmq"
import { connection, reminderQueue, followUpQueue } from "./queue"
import { prisma } from "@enso/database"
import { sendFollowUpEmail } from "../services/email-service"

// ─── Tipos dos jobs ───────────────────────────────────────────────────────────

interface ReminderJobData {
  eventId: string
  participantId: string
  phone: string
  name: string
  eventName: string
  startTime: string
  type: "24h" | "1h"
}

interface FollowUpJobData {
  eventId: string
  participantId: string
  phone: string
  email: string
  name: string
  eventName: string
}

// ─── Agendar lembretes para um participante ───────────────────────────────────

export async function scheduleReminders(
  eventId: string,
  participantId: string,
  phone: string,
  name: string,
  eventName: string,
  startTime: Date
) {
  const now = new Date()

  const delay24h = startTime.getTime() - now.getTime() - 24 * 60 * 60 * 1000
  const delay1h = startTime.getTime() - now.getTime() - 60 * 60 * 1000

  if (delay24h > 0) {
    await reminderQueue.add(
      "reminder-24h",
      { eventId, participantId, phone, name, eventName, startTime: startTime.toISOString(), type: "24h" },
      { delay: delay24h, jobId: `reminder-24h-${eventId}-${participantId}` }
    )
    console.log(`⏰ Lembrete 24h agendado para ${name} — ${eventName}`)
  }

  if (delay1h > 0) {
    await reminderQueue.add(
      "reminder-1h",
      { eventId, participantId, phone, name, eventName, startTime: startTime.toISOString(), type: "1h" },
      { delay: delay1h, jobId: `reminder-1h-${eventId}-${participantId}` }
    )
    console.log(`⏰ Lembrete 1h agendado para ${name} — ${eventName}`)
  }
}

// ─── Agendar follow-up após evento ───────────────────────────────────────────

export async function scheduleFollowUp(
  eventId: string,
  participantId: string,
  phone: string,
  email: string,
  name: string,
  eventName: string,
  endTime: Date
) {
  const now = new Date()
  const delay = endTime.getTime() - now.getTime() + 5 * 60 * 1000

  if (delay > 0) {
    await followUpQueue.add(
      "followup",
      { eventId, participantId, phone, email, name, eventName },
      { delay, jobId: `followup-${eventId}-${participantId}` }
    )
    console.log(`📨 Follow-up agendado para ${name} — ${eventName}`)
  }
}

// ─── Cancelar todos os jobs de um evento ─────────────────────────────────────

export async function cancelEventJobs(eventId: string) {
  const participants = await prisma.eventParticipant.findMany({
    where: { eventId },
    include: { participant: true },
  })

  for (const ep of participants) {
    const pid = ep.participantId

    const job24h = await reminderQueue.getJob(`reminder-24h-${eventId}-${pid}`)
    const job1h = await reminderQueue.getJob(`reminder-1h-${eventId}-${pid}`)
    const jobFollowUp = await followUpQueue.getJob(`followup-${eventId}-${pid}`)

    if (job24h) await job24h.remove()
    if (job1h) await job1h.remove()
    if (jobFollowUp) await jobFollowUp.remove()
  }

  console.log(`🗑️ Jobs cancelados para evento ${eventId}`)
}

// ─── Reagendar quando admin altera horários ───────────────────────────────────

export async function rescheduleEventJobs(
  eventId: string,
  newStartTime: Date,
  newEndTime: Date
) {
  await cancelEventJobs(eventId)

  const participants = await prisma.eventParticipant.findMany({
    where: { eventId },
    include: { participant: true, event: true },
  })

  for (const ep of participants) {
    const { participant, event } = ep
    await scheduleReminders(
      eventId,
      participant.id,
      participant.phone,
      participant.name,
      event.name,
      newStartTime
    )
    await scheduleFollowUp(
      eventId,
      participant.id,
      participant.phone,
      participant.email,
      participant.name,
      event.name,
      newEndTime
    )
  }

  console.log(`🔄 Jobs reagendados para evento ${eventId}`)
}

// ─── Workers — processam os jobs quando disparam ─────────────────────────────

export function startWorkers(sock: any) {
  // Worker de lembretes
  new Worker<ReminderJobData>(
    "reminders",
    async (job: Job<ReminderJobData>) => {
      const { phone, name, eventName, startTime, type } = job.data

      const timeText = type === "24h" ? "amanhã" : "dentro de 1 hora"
      const hora = new Date(startTime).toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
      })

      await sock.sendMessage(`${phone}@s.whatsapp.net`, {
        text: `⏰ Olá, ${name}! Lembrete: o evento *${eventName}* começa ${timeText} às ${hora}. Até já!`,
      })

      console.log(`✅ Lembrete ${type} enviado para ${name}`)
    },
    { connection }
  )

  // Worker de follow-up
  new Worker<FollowUpJobData>(
    "followups",
    async (job: Job<FollowUpJobData>) => {
      const { phone, email, name, eventName } = job.data

      await sock.sendMessage(`${phone}@s.whatsapp.net`, {
        text: `🙏 Olá, ${name}! Obrigado por participares no evento *${eventName}*.\n\nEm breve receberás os materiais por email. Até ao próximo evento!`,
      })

      await sendFollowUpEmail(email, name, eventName)

      console.log(`✅ Follow-up enviado para ${name}`)
    },
    { connection }
  )

  console.log("✅ Workers BullMQ iniciados")
}
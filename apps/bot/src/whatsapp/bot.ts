import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
} from "@whiskeysockets/baileys"
import { Boom } from "@hapi/boom"
import path from "path"
import qrcode from "qrcode-terminal"
import { prisma } from "@enso/database"
import { analyzeQuestion } from "../services/ai-service"
import { io } from "../index"

const AUTH_FOLDER = path.join(__dirname, "../../auth")

async function getEventState(phone: string) {
  const participant = await prisma.participant.findUnique({
    where: { phone },
    include: {
      events: {
        include: { event: true },
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  })

  if (!participant || participant.events.length === 0) {
    return { participant: null, event: null, state: "UNKNOWN" }
  }

  const eventParticipant = participant.events[0]
  const event = eventParticipant.event
  const now = new Date()

  let state = "UNKNOWN"

  if (event.publicationStatus === "CANCELLED") {
    state = "CANCELLED"
  } else if (event.publicationStatus === "DRAFT") {
    state = "DRAFT"
  } else if (now < event.startTime) {
    state = "ACTIVE"
  } else if (now >= event.startTime && now <= event.endTime) {
    state = "LIVE"
  } else {
    state = "FINISHED"
  }

  return { participant, eventParticipant, event, state }
}

async function handleMessage(sock: any, from: string, text: string) {
  const phone = from.replace("@s.whatsapp.net", "")
  const { participant, eventParticipant, event, state } = await getEventState(phone)

  if (!participant || !event) {
    await sock.sendMessage(from, {
      text: "Olá! Não encontrámos a tua inscrição. Inscreve-te primeiro através do link do evento.",
    })
    return
  }

  const eventName = event.name

  switch (state) {
    case "ACTIVE":
      await sock.sendMessage(from, {
        text: `Olá, ${participant.name}! \n\nEstás inscrito no evento *${eventName}*.\n\n Data: ${new Date(event.date).toLocaleDateString("pt-PT")}\n⏰ Início: ${new Date(event.startTime).toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}\n\nEnviaremos um lembrete 1h antes. Até já!`,
      })
      break

    case "LIVE":
  const lowerText = text.toLowerCase().trim()

  if (lowerText.startsWith("votar ") || lowerText.startsWith("voto ")) {
    await sock.sendMessage(from, {
      text: "Para votar, acede à página do evento e clica no botão de voto na pergunta que preferes. 🗳️",
    })
    return
  }

  if (text.length < 10) {
    await sock.sendMessage(from, {
      text: "A tua pergunta é muito curta. Escreve uma pergunta completa para o evento. 📝",
    })
    return
  }

  await sock.sendMessage(from, { text: "A tua pergunta está a ser analisada... ⏳" })

  const aiResult = await analyzeQuestion(text, event.topic)

  if (!aiResult.approved) {
    await sock.sendMessage(from, {
      text: `A tua pergunta não foi aprovada pela moderação.\n\n_Motivo: ${aiResult.reason}_`,
    })
    return
  }

  const question = await prisma.question.create({
    data: {
      content: text,
      eventParticipantId: eventParticipant!.id,
      status: "AI_APPROVED",
      aiScore: aiResult.score,
      aiReason: aiResult.reason,
    },
    include: {
      eventParticipant: {
        include: { participant: true },
      },
      votes: true,
    },
  })

  // ✅ Emite para o ecrã do moderador em tempo real
  io.to(`event:${event.id}`).emit("question:new", {
    ...question,
    voteCount: 0,
  })

  await sock.sendMessage(from, {
    text: `✅ A tua pergunta foi aprovada e está na fila!\n\n"${text}"\n\nOs participantes já podem votar nela.`,
  })
  break

    case "FINISHED":
      await sock.sendMessage(from, {
        text: `O evento *${eventName}* já terminou. Obrigado pela tua participação! 🙏`,
      })
      break

    case "CANCELLED":
      await sock.sendMessage(from, {
        text: `O evento *${eventName}* foi cancelado. Pedimos desculpa pelo inconveniente.`,
      })
      break

    default:
      await sock.sendMessage(from, {
        text: "Olá! Como posso ajudar?",
      })
  }
}

export async function startWhatsAppBot() {
  const { state, saveCreds } = await useMultiFileAuthState(AUTH_FOLDER)
  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    version,
    auth: state,
  })

  sock.ev.on("creds.update", saveCreds)

  sock.ev.on("connection.update", (update: any) => {
    const { connection, lastDisconnect, qr } = update

    if (qr) {
      qrcode.generate(qr, { small: true })
    }

    if (connection === "close") {
      const shouldReconnect =
        (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut

      console.log("Conexão fechada. Reconectando:", shouldReconnect)

      if (shouldReconnect) {
        startWhatsAppBot()
      }
    } else if (connection === "open") {
      console.log("✅ WhatsApp Bot conectado!")
    }
  })

  sock.ev.on("messages.upsert", async ({ messages }: any) => {
    for (const msg of messages) {
      if (!msg.message || msg.key.fromMe) continue

      const from = msg.key.remoteJid
      if (!from || from.includes("@g.us")) continue

      const text =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text ||
        ""

      if (!text) continue

      try {
        await handleMessage(sock, from, text)
      } catch (err) {
        console.error("Erro ao processar mensagem:", err)
      }
    }
  })

  return sock
}
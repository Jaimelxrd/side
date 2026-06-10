import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"
import eventsRouter from "./routes/events"
import organizationsRouter from "./routes/organizations"
import participantsRouter from "./routes/participants"
import questionsRouter from "./routes/questions"
import { startWhatsAppBot } from "./whatsapp/bot"
import { startWorkers } from "./scheduler/scheduler"
import { setSock } from "./whatsapp/socket-instance"

const app = express()
const httpServer = createServer(app)

// ─── Socket.io ─────────────────────────────────────────────────────────────
export const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  },
})

io.on("connection", (socket) => {
  console.log("🔌 Moderador conectado:", socket.id)

  socket.on("join:event", (eventId: string) => {
    socket.join(`event:${eventId}`)
    console.log(`📺 Socket ${socket.id} entrou na sala event:${eventId}`)
  })

  socket.on("disconnect", () => {
    console.log("🔌 Moderador desconectado:", socket.id)
  })
})

const PORT = process.env.PORT || 3001

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}))
app.use(express.json())
app.use("/api/events", eventsRouter)
app.use("/api/organizations", organizationsRouter)
app.use("/api/participants", participantsRouter)
app.use("/api/questions", questionsRouter)
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "enso-bot" })
})

// ⚠️ httpServer em vez de app.listen
httpServer.listen(PORT, () => {
  console.log(`🚀 ENSO Bot API rodando na porta ${PORT}`)
})

startWhatsAppBot()
  .then((sock) => {
    setSock(sock)
    startWorkers(sock)
    console.log("✅ Scheduler iniciado")
  })
  .catch(console.error)
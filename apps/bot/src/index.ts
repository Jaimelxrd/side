import dotenv from "dotenv"
dotenv.config()
import express from "express"
import eventsRouter from "./routes/events"
import organizationsRouter from "./routes/organizations"
import participantsRouter from "./routes/participants"
import questionsRouter from "./routes/questions"
import { startWhatsAppBot } from "./whatsapp/bot"
import { startWorkers } from "./scheduler/scheduler"

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use("/api/events", eventsRouter)
app.use("/api/organizations", organizationsRouter)
app.use("/api/participants", participantsRouter)
app.use("/api/questions", questionsRouter)

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "enso-bot" })
})

app.listen(PORT, () => {
  console.log(`🚀 ENSO Bot API rodando na porta ${PORT}`)
})

// Inicia o bot WhatsApp e os workers
startWhatsAppBot()
  .then((sock) => {
    startWorkers(sock)
    console.log("✅ Scheduler iniciado")
  })
  .catch(console.error)
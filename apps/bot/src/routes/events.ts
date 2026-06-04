import { Router, Request, Response } from "express"
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  publishEvent,
  cancelEvent,
  updateFormFields,
} from "../controllers/events.controller"
import { generateEventQRCodeBuffer } from "../services/qrcode-service"
import { prisma } from "@enso/database"

const router = Router()

router.post("/", createEvent)
router.get("/", getEvents)
router.get("/:id", getEventById)
router.put("/:id", updateEvent)
router.patch("/:id/publish", publishEvent)
router.patch("/:id/cancel", cancelEvent)
router.put("/:id/form-fields", updateFormFields)

// Download do QR Code
router.get("/:id/qrcode", async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const event = await prisma.event.findUnique({ where: { id } })

    if (!event) {
      res.status(404).json({ error: "Evento não encontrado" })
      return
    }

    const buffer = await generateEventQRCodeBuffer(event.slug)

    res.setHeader("Content-Type", "image/png")
    res.setHeader("Content-Disposition", `attachment; filename="qrcode-${event.slug}.png"`)
    res.send(buffer)
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar QR Code" })
  }
})

export default router
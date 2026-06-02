import { Router } from "express"
import {
  registerParticipant,
  getParticipants,
  checkIn,
} from "../controllers/participants.controller"

const router = Router()

router.post("/register", registerParticipant)
router.get("/:eventId", getParticipants)
router.patch("/:id/checkin", checkIn)

export default router
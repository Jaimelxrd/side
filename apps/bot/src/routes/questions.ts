import { Router } from "express"
import {
  submitQuestion,
  getQuestions,
  voteQuestion,
  updateQuestionStatus,
} from "../controllers/questions.controller"

const router = Router()

router.post("/", submitQuestion)
router.get("/:eventId", getQuestions)
router.post("/:id/vote", voteQuestion)
router.patch("/:id/status", updateQuestionStatus)

export default router
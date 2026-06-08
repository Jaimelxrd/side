import { prisma } from "@enso/database"
import { notFound } from "next/navigation"
import ModeratorClient from "./ModeratorClient"

interface Props {
  params: { eventId: string }
}

export default async function ModeratorPage({ params }: Props) {
  const event = await prisma.event.findUnique({
    where: { id: params.eventId },
  })

  if (!event) return notFound()

  const questions = await prisma.question.findMany({
    where: {
      eventParticipant: { eventId: params.eventId },
      status: { in: ["AI_APPROVED", "APPROVED", "AI_REJECTED", "REJECTED"] },
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
    .map(q => ({ ...q, voteCount: q.votes.length }))
    .sort((a, b) => b.voteCount - a.voteCount)

  return (
    <ModeratorClient
      eventId={params.eventId}
      eventName={event.name}
      initialQuestions={questionsWithVotes}
    />
  )
}
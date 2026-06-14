export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import { prisma } from "@enso/database"
import { notFound } from "next/navigation"
import EventRegistrationForm from "./EventRegistrationForm"

interface Props {
  params: { slug: string }
}

export default async function EventPage({ params }: Props) {
  const event = await prisma.event.findUnique({
    where: { slug: params.slug },
    include: {
      formFields: { orderBy: { order: "asc" } },
    },
  })

  if (!event || event.publicationStatus !== "PUBLISHED") {
    notFound()
  }

  const now = new Date()
  const ended = new Date(event.endTime) < now

  const date = new Date(event.date).toLocaleDateString("pt-PT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const hour = new Date(event.startTime).toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
          {event.description && (
            <p className="text-gray-600 mt-2">{event.description}</p>
          )}
          <div className="mt-4 space-y-1 text-sm text-gray-500">
            <p> {date}</p>
            <p> {hour}</p>
            {event.location && <p> {event.location}</p>}
          </div>
        </div>
        <EventRegistrationForm event={event} ended={ended} />
      </div>
    </div>
  )
}
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import { prisma } from "@enso/database"
import { notFound } from "next/navigation"
import EventActions from "./EventActions"
import FormBuilder from "./FormBuilder"

interface Props {
  params: { id: string }
}

export default async function EventoPage({ params }: Props) {
  const event = await prisma.event.findUnique({
    where: { id: params.id },
    include: {
      formFields: { orderBy: { order: "asc" } },
      participants: {
        include: { participant: true },
        orderBy: { createdAt: "asc" },
      },
    },
  })

  if (!event) return notFound()

  const date = new Date(event.date).toLocaleDateString("pt-PT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const startHour = new Date(event.startTime).toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  })

  const endHour = new Date(event.endTime).toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  })

 const eventData = {
  id: event.id,
  slug: event.slug,
  name: event.name,
  description: event.description,
  topic: event.topic,
  date: event.date.toISOString(),
  startTime: event.startTime.toISOString(),
  endTime: event.endTime.toISOString(),
  location: event.location,
  publicationStatus: event.publicationStatus,
}

  return (
    <div className="max-w-4xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
          <p className="text-gray-500 mt-1">{event.topic}</p>
        </div>
        <span className={`text-sm px-3 py-1 rounded-full font-medium ${event.publicationStatus === "PUBLISHED" ? "bg-green-100 text-green-700" : event.publicationStatus === "CANCELLED" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"}`}>
          {event.publicationStatus === "PUBLISHED" ? "Publicado" : event.publicationStatus === "CANCELLED" ? "Cancelado" : "Rascunho"}
        </span>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Detalhes</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>📅 {date}</p>
          <p>⏰ {startHour} — {endHour}</p>
          {event.location && <p>📍 {event.location}</p>}
          {event.description && <p className="mt-3">{event.description}</p>}
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-gray-500">
            Link de inscrição:{" "}
            <a href={`/e/${event.slug}`} target="_blank" className="text-blue-600 hover:underline">
              enso.app/e/{event.slug}
            </a>
          </p>
        </div>
      </div>

      <EventActions event={eventData} />

            <div className="mt-6">
        <FormBuilder
          eventId={event.id}
          initialFields={event.formFields}
        />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
        <h2 className="font-semibold text-gray-900 mb-4">
          Participantes ({event.participants.length})
        </h2>
        {event.participants.length === 0 ? (
          <p className="text-gray-400 text-sm">Nenhum participante inscrito ainda.</p>
        ) : (
          <div className="space-y-2">
            {event.participants.map((ep) => (
              <div key={ep.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium text-gray-900 text-sm">{ep.participant.name}</p>
                  <p className="text-xs text-gray-500">{ep.participant.phone} · {ep.participant.email}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${ep.checkedIn ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {ep.checkedIn ? "✅ Check-in" : "Pendente"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
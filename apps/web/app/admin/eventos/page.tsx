import { prisma } from "@enso/database"
import Link from "next/link"
import { auth } from "@/auth"

export default async function EventosPage() {
  const session = await auth()
  const user = session?.user as any

  const events = await prisma.event.findMany({
    where: { organizationId: user?.organizationId },
    orderBy: { date: "asc" },
    include: {
      _count: { select: { participants: true } },
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Eventos</h1>
          <p className="text-gray-500 mt-1">{events.length} eventos</p>
        </div>
        <Link
          href="/admin/eventos/novo"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
        >
          + Novo evento
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <p className="text-gray-400 text-lg">Nenhum evento criado ainda.</p>
          <Link
            href="/admin/eventos/novo"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
          >
            Criar primeiro evento
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/admin/eventos/${event.id}`}
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-900">{event.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(event.date).toLocaleDateString("pt-PT", { timeZone: "Africa/Maputo" })} ·{" "}
                    {new Date(event.startTime).toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Maputo" })}
                    {event.location && ` ·  ${event.location}`}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">
                     {event._count.participants}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    event.publicationStatus === "PUBLISHED"
                      ? "bg-green-100 text-green-700"
                      : event.publicationStatus === "CANCELLED"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {event.publicationStatus === "PUBLISHED" ? "Publicado" :
                     event.publicationStatus === "CANCELLED" ? "Cancelado" : "Rascunho"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

import { prisma } from "@enso/database"
import { redirect } from "next/navigation"
import Link from "next/link"
import { auth } from "@/auth"

export default async function AdminDashboard() {
  const session = await auth()
  if (!session) redirect("/login")

  const user = session.user as any
  const orgId = user.organizationId
  const now = new Date()

  const [totalEvents, totalParticipants, publishedEvents, recentEvents] =
    await Promise.all([
      prisma.event.count({
        where: { organizationId: orgId },
      }),

      prisma.participant.count({
        where: {
          events: {
            some: { event: { organizationId: orgId } },
          },
        },
      }),

      prisma.event.count({
        where: { organizationId: orgId, publicationStatus: "PUBLISHED" },
      }),

      prisma.event.findMany({
        where: { organizationId: orgId },
        orderBy: { createdAt: "desc" },
        take: 5,
        include: { _count: { select: { participants: true } } },
      }),
    ])

  // LIVE é calculado: publicado + agora entre startTime e endTime
  const liveEvents = await prisma.event.count({
    where: {
      organizationId: orgId,
      publicationStatus: "PUBLISHED",
      startTime: { lte: now },
      endTime:   { gte: now },
    },
  })

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Bem-vindo, {session.user?.name}!</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total de eventos"   value={totalEvents}       color="text-gray-900" />
        <StatCard label="Publicados"         value={publishedEvents}   color="text-green-600" />
        <StatCard label="A decorrer agora"   value={liveEvents}        color="text-blue-600" pulse />
        <StatCard label="Participantes"      value={totalParticipants} color="text-gray-900" />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">Eventos recentes</h2>
          <Link href="/admin/eventos" className="text-sm text-blue-600 hover:underline">
            Ver todos
          </Link>
        </div>

        {recentEvents.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm mb-3">Nenhum evento criado ainda.</p>
            <Link href="/admin/eventos/novo" className="text-sm text-blue-600 hover:underline">
              Criar primeiro evento →
            </Link>
          </div>
        ) : (
          <div className="space-y-1">
            {recentEvents.map((event) => {
              const eventNow = new Date()
              const isLive =
                event.publicationStatus === "PUBLISHED" &&
                new Date(event.startTime) <= eventNow &&
                new Date(event.endTime) >= eventNow
              const isFinished =
                event.publicationStatus === "PUBLISHED" &&
                new Date(event.endTime) < eventNow

              const displayStatus = isLive
                ? "LIVE"
                : isFinished
                ? "FINISHED"
                : event.publicationStatus

              return (
                <Link
                  key={event.id}
                  href={`/admin/eventos/${event.id}`}
                  className="flex items-center justify-between py-3 px-2 border-b last:border-0 hover:bg-gray-50 rounded transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{event.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {new Date(event.date).toLocaleDateString("pt-PT", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        timeZone: "Africa/Maputo",
                      })}
                      {" · "}
                      {new Date(event.startTime).toLocaleTimeString("pt-PT", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "Africa/Maputo",
                      })}h
                      {" · "}
                       {event._count.participants}{" "}
                      {event._count.participants !== 1 ? "participantes" : "participante"}
                    </p>
                  </div>
                  <StatusBadge status={displayStatus} />
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  color,
  pulse = false,
}: {
  label: string
  value: number
  color: string
  pulse?: boolean
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm relative overflow-hidden">
      {pulse && value > 0 && (
        <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
        </span>
      )}
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; className: string }> = {
    DRAFT:     { label: "Rascunho",  className: "bg-gray-100 text-gray-600" },
    PUBLISHED: { label: "Publicado", className: "bg-green-100 text-green-700" },
    LIVE:      { label: "Ao vivo",   className: "bg-blue-100 text-blue-700" },
    FINISHED:  { label: "Terminado", className: "bg-purple-100 text-purple-700" },
    CANCELLED: { label: "Cancelado", className: "bg-red-100 text-red-700" },
  }

  const { label, className } = map[status] ?? {
    label: status,
    className: "bg-gray-100 text-gray-600",
  }

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${className}`}>
      {label}
    </span>
  )
}
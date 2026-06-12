// apps/web/app/admin/participantes/page.tsx
import { auth } from "@/auth"
import { prisma } from "@enso/database"
import ParticipantesClient from "./participantes-client"

export default async function ParticipantesPage() {
  const session = await await auth()
  const user = session?.user as any

  const participantes = await prisma.participant.findMany({
    where: {
      events: {
        some: { event: { organizationId: user?.organizationId } },
      },
    },
    include: {
      events: {
        where: { event: { organizationId: user?.organizationId } },
        include: {
          event: { select: { id: true, name: true, date: true } },
        },
        orderBy: { createdAt: "desc" },
      },
    },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Participantes</h1>
          <p className="text-gray-500 mt-1">{participantes.length} participantes</p>
        </div>
      </div>

      <ParticipantesClient participantes={participantes} />
    </div>
  )
}

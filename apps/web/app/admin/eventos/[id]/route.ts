import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@enso/database"

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth()
  const user = session?.user as any

  if (!user) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (!["ADMIN", "SUPERADMIN"].includes(user.role)) {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
  }

  const event = await prisma.event.findUnique({
    where: { id: params.id },
    select: { organizationId: true },
  })

  if (!event) return NextResponse.json({ error: "Evento não encontrado" }, { status: 404 })
  if (event.organizationId !== user.organizationId) {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
  }

  // Apagar em cascata (sem onDelete no schema)
  await prisma.$transaction([
    prisma.vote.deleteMany({
      where: { question: { eventParticipant: { eventId: params.id } } },
    }),
    prisma.question.deleteMany({
      where: { eventParticipant: { eventId: params.id } },
    }),
    prisma.participantResponse.deleteMany({
      where: { eventParticipant: { eventId: params.id } },
    }),
    prisma.eventParticipant.deleteMany({ where: { eventId: params.id } }),
    prisma.eventFormField.deleteMany({ where: { eventId: params.id } }),
    prisma.followUp.deleteMany({ where: { eventId: params.id } }),
    prisma.messageLog.deleteMany({ where: { eventId: params.id } }),
    prisma.event.delete({ where: { id: params.id } }),
  ])

  return NextResponse.json({ success: true })
}
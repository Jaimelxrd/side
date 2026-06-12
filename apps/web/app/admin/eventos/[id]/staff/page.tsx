export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import { prisma } from "@enso/database"
import { notFound } from "next/navigation"
import StaffClient from "./StaffClient"

interface Props {
  params: { id: string }
}

export default async function StaffPage({ params }: Props) {
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

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tela do Staff</h1>
        <p className="text-gray-500 mt-1">{event.name}</p>
      </div>
      <StaffClient event={event} />
    </div>
  )
}
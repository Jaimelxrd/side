export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const fetchCache = 'force-no-store'
export const revalidate = 0
import { prisma } from "@enso/database"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import UtilizadoresClient from "./utilizadores-client"

export default async function UtilizadoresPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user as any

  if (user?.role !== "SUPERADMIN") redirect("/admin")

  const users = await prisma.user.findMany({
    where: { organizationId: user?.organizationId },
    orderBy: { createdAt: "asc" },
  })

  return <UtilizadoresClient users={users} />
}
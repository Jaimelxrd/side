import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@enso/database"
import bcrypt from "bcryptjs"

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const session = await auth()

  if (!session) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  }

  if ((session.user as any)?.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
  }

  const { name, email, password, role, organizationId } = await req.json()

  if (!name || !email || !password || !role || !organizationId) {
    return NextResponse.json({ error: "Campos obrigatórios em falta" }, { status: 400 })
  }

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ error: "Email já está em uso" }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { name, email, passwordHash, role, organizationId },
  })

  return NextResponse.json({ id: user.id, name: user.name, email: user.email, role: user.role }, { status: 201 })
}

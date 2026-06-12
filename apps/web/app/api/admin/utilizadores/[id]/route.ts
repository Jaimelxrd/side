import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth" // Ajuste o caminho conforme seu projeto
import { prisma } from "@enso/database"
import bcrypt from "bcryptjs"

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const fetchCache = 'force-no-store'
export const revalidate = 0

export async function PATCH(
  req: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user as any)?.role !== "SUPERADMIN") {
      return NextResponse.json(
        { error: "Sem permissão" }, 
        { status: 403 }
      )
    }

    const { password } = await req.json()

    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: "Password deve ter pelo menos 6 caracteres" }, 
        { status: 400 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 10)

    await prisma.user.update({
      where: { id: params.id },
      data: { passwordHash },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("PATCH error:", error)
    return NextResponse.json(
      { error: "Erro ao atualizar usuário" }, 
      { status: 500 }
    )
  }
}

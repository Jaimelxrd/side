import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/lib/auth" // Ajuste caminho
// import { prisma } from "@enso/database"
// import bcrypt from "bcryptjs"

// ✅ Apenas isso para API routes
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function PATCH() {
  return Response.json({ ok: true })
}
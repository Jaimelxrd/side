import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function PATCH() {
  return Response.json({ ok: true })
}

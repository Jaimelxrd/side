import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { prisma } from "@enso/database"

export default async function AdminDashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Bem-vindo ao painel ENSO Events</p>
      </div>
    </div>
  )
}
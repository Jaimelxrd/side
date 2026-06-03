import { prisma } from "@enso/database"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function UtilizadoresPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user as any

  if (user?.role !== "SUPERADMIN") {
    redirect("/admin")
  }

  const users = await prisma.user.findMany({
    where: { organizationId: user?.organizationId },
    orderBy: { createdAt: "asc" },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Utilizadores</h1>
          <p className="text-gray-500 mt-1">{users.length} utilizadores</p>
        </div>
        <Link
          href="/admin/utilizadores/novo"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
        >
          + Novo utilizador
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {users.map((u, i) => (
          <div key={u.id} className={`flex items-center justify-between p-4 ${i !== users.length - 1 ? "border-b" : ""}`}>
            <div>
              <p className="font-medium text-gray-900">{u.name}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              u.role === "SUPERADMIN" ? "bg-purple-100 text-purple-700" :
              u.role === "ADMIN" ? "bg-blue-100 text-blue-700" :
              u.role === "MODERATOR" ? "bg-yellow-100 text-yellow-700" :
              "bg-gray-100 text-gray-600"
            }`}>
              {u.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
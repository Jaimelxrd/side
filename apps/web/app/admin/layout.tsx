"use client"
import { useSession, signOut } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">A carregar...</p>
      </div>
    )
  }

  if (!session) return null

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: "" },
    { href: "/admin/eventos", label: "Eventos", icon: "" },
    { href: "/admin/participantes", label: "Participantes", icon: "" },
  ]

  // Só SUPER_ADMIN vê gestão de admins
  if ((session.user as any)?.role === "SUPERADMIN") {
    navItems.push({ href: "/admin/utilizadores", label: "Utilizadores", icon: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm min-h-screen flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">ENSO Events</h1>
          <p className="text-xs text-gray-500 mt-1">{session.user?.name}</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg"
          >
            Sair
          </button>
        </div>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}

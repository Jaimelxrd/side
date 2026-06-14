"use client"

import { useState } from "react"
import Link from "next/link"

interface User {
  id: string
  name: string
  email: string
  role: string
}

export default function UtilizadoresClient({ users }: { users: User[] }) {
  const [modalUserId, setModalUserId] = useState<string | null>(null)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChangePassword = async () => {
    setLoading(true)
    setError("")
    setSuccess(false)

    const res = await fetch(`/api/admin/utilizadores/${modalUserId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      setSuccess(true)
      setPassword("")
      setTimeout(() => {
        setModalUserId(null)
        setSuccess(false)
      }, 1500)
    } else {
      const data = await res.json()
      setError(data.error || "Erro ao alterar senha")
    }
    setLoading(false)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Utilizadores</h1>
          <p className="text-gray-500 mt-1">{users.length} utilizadores</p>
        </div>
        <Link href="/admin/utilizadores/novo"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
           Novo utilizador
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {users.map((u, i) => (
          <div key={u.id} className={`flex items-center justify-between p-4 ${i !== users.length - 1 ? "border-b" : ""}`}>
            <div>
              <p className="font-medium text-gray-900">{u.name}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                u.role === "SUPERADMIN" ? "bg-purple-100 text-purple-700" :
                u.role === "ADMIN" ? "bg-blue-100 text-blue-700" :
                u.role === "MODERATOR" ? "bg-yellow-100 text-yellow-700" :
                "bg-gray-100 text-gray-600"
              }`}>
                {u.role}
              </span>
              {u.role !== "SUPERADMIN" && (
                <button onClick={() => { setModalUserId(u.id); setPassword(""); setError(""); setSuccess(false) }}
                  className="text-xs text-gray-500 hover:text-gray-800 underline">
                  Alterar senha
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalUserId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h2 className="font-semibold text-gray-900 mb-4">Alterar senha</h2>
            <input
              type="password"
              placeholder="Nova senha (mín. 6 caracteres)"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black mb-3"
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-3">Senha alterada com sucesso!</p>}
            <div className="flex gap-3">
              <button onClick={handleChangePassword} disabled={loading || password.length < 6}
                className="flex-1 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50">
                {loading ? "A guardar..." : "Guardar"}
              </button>
              <button onClick={() => setModalUserId(null)}
                className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
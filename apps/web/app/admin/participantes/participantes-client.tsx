// apps/web/app/admin/participantes/participantes-client.tsx
"use client"

import { useState } from "react"
import Link from "next/link"

type Participante = {
  id: string
  name: string
  email: string
  phone: string
  createdAt: Date
  events: {
    checkedIn: boolean
    event: { id: string; name: string; date: Date }
  }[]
}

export default function ParticipantesClient({
  participantes,
}: {
  participantes: Participante[]
}) {
  const [search, setSearch] = useState("")

  const filtrados = participantes.filter((p) => {
    const q = search.toLowerCase()
    return (
      p.name.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q) ||
      p.phone.includes(q)
    )
  })

  return (
    <div>
      {/* Pesquisa */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar por nome, email ou telefone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {filtrados.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <p className="text-gray-400 text-lg">
            {search ? "Nenhum resultado encontrado." : "Nenhum participante ainda."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtrados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-gray-900">{p.name}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {p.email} · {p.phone}
                  </p>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(p.createdAt).toLocaleDateString("pt-PT")}
                </span>
              </div>

              {/* Eventos em que participou */}
              {p.events.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.events.map((ep) => (
                    <Link
                      key={ep.event.id}
                      href={`/admin/eventos/${ep.event.id}`}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      {ep.event.name}
                      {ep.checkedIn && (
                        <span className="text-green-600 font-medium">✓</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
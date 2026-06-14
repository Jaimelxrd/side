"use client"

import { useEffect, useState } from "react"
import { io as socketIO } from "socket.io-client"

// ─── Tipos ─────────────────────────────────────────────────────────────────

type QuestionStatus =
  | "PENDING"
  | "AI_APPROVED"
  | "AI_REJECTED"
  | "APPROVED"
  | "REJECTED"
  | "ANSWERED"

interface Question {
  id: string
  content: string
  status: QuestionStatus
  voteCount: number
  aiScore?: number | null
  aiReason?: string | null
  createdAt: Date
  eventParticipant: {
    participant: {
      name: string
    }
  }
}

interface Props {
  eventId: string
  eventName: string
  initialQuestions: Question[]
  eventStatus: string
  startTime: string
  endTime: string
}

// ─── Componente ────────────────────────────────────────────────────────────

export default function ModeratorClient({ eventId, eventName, initialQuestions, eventStatus, startTime, endTime }: Props) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [connected, setConnected] = useState(false)
  const [filter, setFilter] = useState<"all" | "pending" | "answered" | "rejected">("all")
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const now = new Date()
  const isLive = new Date(startTime) <= now && new Date(endTime) >= now

  // ── Socket.io ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (eventStatus !== "PUBLISHED") return  // não liga socket se não está ao vivo

    const socket = socketIO(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001", {
      transports: ["websocket"],
    })

    socket.on("connect", () => {
      setConnected(true)
      socket.emit("join:event", eventId)
    })

    socket.on("disconnect", () => setConnected(false))

    socket.on("question:new", (question: Question) => {
      setQuestions(prev => {
        const exists = prev.find(q => q.id === question.id)
        if (exists) return prev
        return sortQuestions([...prev, question])
      })
    })

    socket.on("question:updated", (updated: Question) => {
      setQuestions(prev =>
        sortQuestions(prev.map(q => q.id === updated.id ? updated : q))
      )
    })

    socket.on("question:voted", ({ questionId, voteCount }: { questionId: string; voteCount: number }) => {
      setQuestions(prev =>
        sortQuestions(prev.map(q => q.id === questionId ? { ...q, voteCount } : q))
      )
    })

    return () => { socket.disconnect() }
  }, [eventId, eventStatus])

  // ── Ordenar por votos ─────────────────────────────────────────────────────
  const sortQuestions = (qs: Question[]) =>
    [...qs].sort((a, b) => b.voteCount - a.voteCount)

  // ── Actualizar status ─────────────────────────────────────────────────────
  const updateStatus = async (id: string, status: QuestionStatus) => {
    setLoadingId(id)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
    } finally {
      setLoadingId(null)
    }
  }

  // ── Filtrar perguntas ─────────────────────────────────────────────────────
  const filtered = questions.filter(q => {
    if (filter === "pending") return q.status === "AI_APPROVED" || q.status === "APPROVED"
    if (filter === "answered") return q.status === "ANSWERED"
    if (filter === "rejected") return q.status === "REJECTED" || q.status === "AI_REJECTED"
    return q.status !== "REJECTED" && q.status !== "AI_REJECTED"
  })

  const pendingCount = questions.filter(
    q => q.status === "AI_APPROVED" || q.status === "APPROVED"
  ).length

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">{eventName}</h1>
          <p className="text-xs text-gray-400 mt-0.5">Ecrã do Moderador</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{pendingCount}</p>
            <p className="text-xs text-gray-400">por responder</p>
          </div>
          <div className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
  isLive && connected
    ? "bg-green-900 text-green-400"
    : isLive && !connected
    ? "bg-yellow-900 text-yellow-400"
    : "bg-gray-800 text-gray-400"
}`}>
  <span className={`w-1.5 h-1.5 rounded-full ${
    isLive && connected ? "bg-green-400" :
    isLive && !connected ? "bg-yellow-400" : "bg-gray-400"
  }`} />
  {isLive && connected ? "Em directo" : isLive && !connected ? "A ligar..." : "Evento não está ao vivo"}
</div>
        </div>
      </div>

      {/* Filtros */}
      <div className="px-6 py-3 flex gap-2 border-b border-gray-800">
        {[
          { key: "all", label: "Todas" },
          { key: "pending", label: "Por responder" },
          { key: "answered", label: "Respondidas" },
          { key: "rejected", label: "Rejeitadas" },
        ].map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key as typeof filter)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === f.key
                ? "bg-white text-gray-900"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Lista de perguntas */}
      <div className="p-6 space-y-3 max-w-3xl mx-auto">
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">
              {filter === "answered"
                ? "Nenhuma pergunta respondida ainda."
                : filter === "rejected"
                ? "Nenhuma pergunta rejeitada."
                : "Nenhuma pergunta na fila. A aguardar..."}
            </p>
          </div>
        )}

        {filtered.map((q, idx) => (
          <div
            key={q.id}
            className={`rounded-xl border p-5 transition-all ${
              q.status === "ANSWERED"
                ? "bg-gray-900 border-gray-800 opacity-60"
                : q.status === "REJECTED" || q.status === "AI_REJECTED"
                ? "bg-gray-900 border-red-900"
                : q.status === "APPROVED"
                ? "bg-gray-900 border-blue-700"
                : "bg-gray-900 border-gray-700"
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Ranking */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">
                {idx + 1}
              </div>

              <div className="flex-1 min-w-0">
                {/* Conteúdo */}
                <p className={`text-base leading-relaxed ${
                  q.status === "ANSWERED" ? "text-gray-500" :
                  q.status === "REJECTED" || q.status === "AI_REJECTED" ? "text-gray-400" :
                  "text-white"
                }`}>
                  {q.content}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="text-xs text-gray-500">
                    {q.eventParticipant.participant.name}
                  </span>
                  <span className="text-xs text-gray-600">·</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    🔺 {q.voteCount} {q.voteCount === 1 ? "voto" : "votos"}
                  </span>
                  {q.status === "APPROVED" && (
                    <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                      Aprovada
                    </span>
                  )}
                  {q.status === "ANSWERED" && (
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                      ✓ Respondida
                    </span>
                  )}
                  {q.status === "AI_REJECTED" && (
                    <span className="text-xs bg-red-900 text-red-400 px-2 py-0.5 rounded-full">
                      Rejeitada pela IA
                    </span>
                  )}
                  {q.status === "REJECTED" && (
                    <span className="text-xs bg-red-900 text-red-400 px-2 py-0.5 rounded-full">
                      Rejeitada pelo moderador
                    </span>
                  )}
                </div>

                {/* Motivo da IA */}
                {(q.status === "AI_REJECTED" || q.status === "REJECTED") && q.aiReason && (
                  <p className="text-xs text-red-400 mt-2 italic">
                    IA: {q.aiReason}
                  </p>
                )}
              </div>

              {/* Acções — perguntas activas */}
              {q.status !== "ANSWERED" && q.status !== "REJECTED" && q.status !== "AI_REJECTED" && (
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => updateStatus(q.id, "ANSWERED")}
                    disabled={loadingId === q.id}
                    className="text-xs bg-green-700 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg font-medium disabled:opacity-50 whitespace-nowrap"
                  >
                    {loadingId === q.id ? "..." : "✓ Respondida"}
                  </button>
                  {q.status !== "APPROVED" && (
                    <button
                      onClick={() => updateStatus(q.id, "APPROVED")}
                      disabled={loadingId === q.id}
                      className="text-xs bg-blue-700 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium disabled:opacity-50"
                    >
                      Destacar
                    </button>
                  )}
                  <button
                    onClick={() => updateStatus(q.id, "REJECTED")}
                    disabled={loadingId === q.id}
                    className="text-xs bg-transparent hover:bg-red-900 text-red-500 px-3 py-1.5 rounded-lg font-medium disabled:opacity-50"
                  >
                    Rejeitar
                  </button>
                </div>
              )}

              {/* Acções — perguntas rejeitadas */}
              {(q.status === "REJECTED" || q.status === "AI_REJECTED") && (
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <span className="text-xs text-red-400 text-right">Rejeitada</span>
                  <button
                    onClick={() => updateStatus(q.id, "APPROVED")}
                    disabled={loadingId === q.id}
                    className="text-xs bg-blue-700 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium disabled:opacity-50 whitespace-nowrap"
                  >
                    Aprovar mesmo assim
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
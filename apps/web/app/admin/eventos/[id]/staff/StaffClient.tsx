"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

// ─── Tipos ─────────────────────────────────────────────────────────────────

interface FormField {
  id: string
  label: string
  type: string
  required: boolean
  options: string | null
}

interface Participant {
  id: string
  name: string
  phone: string
  email: string
}

interface EventParticipant {
  id: string
  checkedIn: boolean
  checkedInAt: Date | null
  origin: string
  participant: Participant
}

interface Event {
  id: string
  name: string
  formFields: FormField[]
  participants: EventParticipant[]
}

interface Props {
  event: Event
  ended: boolean
}

// ─── Componente principal ──────────────────────────────────────────────────

export default function StaffClient({ event, ended }: Props) {
  const [tab, setTab] = useState<"checkin" | "register">("checkin")

  return (
    <div>
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6">
        <button
          onClick={() => setTab("checkin")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            tab === "checkin"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Check-in
        </button>
        <button
          onClick={() => !ended && setTab("register")}
          disabled={ended}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            tab === "register"
              ? "bg-white text-gray-900 shadow-sm"
              : ended
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Inscrição manual {ended && ""}
        </button>
      </div>

      {tab === "checkin" && <CheckInTab event={event} />}
      {tab === "register" && !ended && <RegisterTab event={event} />}
      {tab === "register" && ended && (
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <div className="text-4xl mb-3"></div>
          <h2 className="text-lg font-bold text-gray-900">Inscrições encerradas</h2>
          <p className="text-gray-500 text-sm mt-1">Este evento já terminou.</p>
        </div>
      )}
    </div>
  )
}

// ─── Tab Check-in ──────────────────────────────────────────────────────────

function CheckInTab({ event }: { event: Event }) {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [checkedIds, setCheckedIds] = useState<Set<string>>(
    new Set(event.participants.filter(p => p.checkedIn).map(p => p.id))
  )

  const filtered = event.participants.filter(ep => {
    const q = search.toLowerCase()
    return (
      ep.participant.name.toLowerCase().includes(q) ||
      ep.participant.phone.includes(q)
    )
  })

  const total = event.participants.length
  const done = checkedIds.size

  const handleCheckIn = async (epId: string) => {
    setLoadingId(epId)
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/participants/${epId}/checkin`,
        { method: "PATCH" }
      )
      setCheckedIds(prev => new Set([...prev, epId]))
      router.refresh()
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div>
      {/* Contador */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Check-ins realizados</p>
          <p className="text-3xl font-bold text-gray-900 mt-0.5">
            {done} <span className="text-gray-300 font-normal">/ {total}</span>
          </p>
        </div>
        <div className="w-16 h-16 relative">
          <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15.9" fill="none"
              stroke="#16a34a" strokeWidth="3"
              strokeDasharray={`${total > 0 ? (done / total) * 100 : 0} 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
            {total > 0 ? Math.round((done / total) * 100) : 0}%
          </span>
        </div>
      </div>

      {/* Pesquisa */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></span>
        <input
          type="text"
          placeholder="Pesquisar por nome ou telefone..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white"
        />
      </div>

      {/* Lista */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-8">
            {search ? "Nenhum resultado encontrado." : "Nenhum participante inscrito."}
          </p>
        )}
        {filtered.map(ep => {
          const isChecked = checkedIds.has(ep.id)
          const isLoading = loadingId === ep.id
          return (
            <div
              key={ep.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                isChecked
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {ep.participant.name}
                </p>
                <p className="text-xs text-gray-400">{ep.participant.phone}</p>
              </div>
              {isChecked ? (
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                   Feito
                </span>
              ) : (
                <button
                  onClick={() => handleCheckIn(ep.id)}
                  disabled={isLoading}
                  className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50"
                >
                  {isLoading ? "..." : "Check-in"}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Tab Inscrição Manual ──────────────────────────────────────────────────

function RegisterTab({ event }: { event: Event }) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {

     console.log("API URL:", process.env.NEXT_PUBLIC_API_URL)
  console.log("Dados:", { name, phone, email })

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Nome, telefone e email são obrigatórios.")
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/participants/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventId: event.id,
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            origin: "MANUAL",
            responses: Object.entries(responses).map(([fieldId, value]) => ({
              fieldId,
              value,
            })),
          }),
        }
      )
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Erro ao inscrever.")
        return
      }
      setSuccess(true)
      router.refresh()
    } catch {
      setError("Erro de ligação. Tenta novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setName("")
    setPhone("")
    setEmail("")
    setResponses({})
    setError("")
    setSuccess(false)
  }

  if (success) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm text-center">
        <div className="text-5xl mb-4"></div>
        <h2 className="text-lg font-bold text-gray-900">Inscrito com sucesso!</h2>
        <p className="text-gray-500 text-sm mt-1 mb-6">
          O participante foi adicionado ao evento.
        </p>
        <button
          onClick={handleReset}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700"
        >
          Inscrever outro participante
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">

      {/* Campos fixos */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Nome completo *</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Ex: João Silva"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Telefone (WhatsApp) *</label>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="258841234567"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Email *</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="joao@exemplo.com"
        />
      </div>

      {/* Campos dinâmicos */}
      {event.formFields.map(field => (
        <div key={field.id}>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            {field.label} {field.required && "*"}
          </label>

          {field.type === "TEXT" && (
            <input
              type="text"
              value={responses[field.id] || ""}
              onChange={e => setResponses({ ...responses, [field.id]: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              required={field.required}
            />
          )}

          {field.type === "NUMBER" && (
            <input
              type="number"
              value={responses[field.id] || ""}
              onChange={e => setResponses({ ...responses, [field.id]: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              required={field.required}
            />
          )}

          {field.type === "SELECT" && (
            <select
              value={responses[field.id] || ""}
              onChange={e => setResponses({ ...responses, [field.id]: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              required={field.required}
            >
              <option value="">Selecciona uma opção</option>
              {JSON.parse(field.options || "[]").map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}

          {field.type === "CHECKBOX" && (
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={responses[field.id] === "true"}
                onChange={e => setResponses({ ...responses, [field.id]: e.target.checked ? "true" : "false" })}
                className="rounded h-4 w-4"
              />
              {field.label}
            </label>
          )}
        </div>
      ))}

      {error && (
        <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50 mt-2"
      >
        {loading ? "A inscrever..." : "Inscrever participante"}
      </button>
    </div>
  )
}
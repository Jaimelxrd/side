"use client"

import { useState } from "react"

interface FormField {
  id: string
  label: string
  type: string
  required: boolean
  options: string | null
}

interface Event {
  id: string
  name: string
  formFields: FormField[]
}

interface Props {
  event: Event
  ended: boolean
}

export default function EventRegistrationForm({ event, ended }: Props) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
            name,
            phone,
            email,
            origin: "LINK",
            responses: Object.entries(responses).map(([fieldId, value]) => ({
              fieldId,
              value,
            })),
          }),
        }
      )

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Erro ao realizar inscrição.")
        setLoading(false)
        return
      }

      setSuccess(true)
    } catch {
      setError("Erro de ligação. Tenta novamente.")
      setLoading(false)
    }
  }
  if (ended) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <div className="text-4xl mb-4"></div>
        <h2 className="text-xl font-bold text-gray-900">Inscrições encerradas</h2>
        <p className="text-gray-500 mt-2">
          Este evento já terminou. As inscrições estão fechadas.
        </p>
      </div>
    )
  }

  if (success) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <div className="text-4xl mb-4"></div>
        <h2 className="text-xl font-bold text-gray-900">Inscrição confirmada!</h2>
        <p className="text-gray-500 mt-2">
          Receberás uma confirmação por email e WhatsApp em breve.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Inscrição</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos fixos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefone (WhatsApp) *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="258841234567"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Campos dinâmicos */}
        {event.formFields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} {field.required && "*"}
            </label>

            {field.type === "TEXT" && (
              <input
                type="text"
                value={responses[field.id] || ""}
                onChange={(e) =>
                  setResponses({ ...responses, [field.id]: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required={field.required}
              />
            )}

            {field.type === "NUMBER" && (
              <input
                type="number"
                value={responses[field.id] || ""}
                onChange={(e) =>
                  setResponses({ ...responses, [field.id]: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required={field.required}
              />
            )}

            {field.type === "SELECT" && (
              <select
                value={responses[field.id] || ""}
                onChange={(e) =>
                  setResponses({ ...responses, [field.id]: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required={field.required}
              >
                <option value="">Selecciona uma opção</option>
                {JSON.parse(field.options || "[]").map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {field.type === "CHECKBOX" && (
              <input
                type="checkbox"
                checked={responses[field.id] === "true"}
                onChange={(e) =>
                  setResponses({
                    ...responses,
                    [field.id]: e.target.checked ? "true" : "false",
                  })
                }
                className="h-4 w-4"
                required={field.required}
              />
            )}
          </div>
        ))}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "A inscrever..." : "Inscrever-me"}
        </button>
      </form>
    </div>
  )
}
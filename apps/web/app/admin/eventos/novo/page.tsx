"use client"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NovoEventoPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({
    name: "",
    description: "",
    topic: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    slug: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (name === "name") {
      setForm((prev) => ({
        ...prev,
        name: value,
        slug: value
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const startStr = new Date(`${form.date}T${form.startTime}:00+02:00`).toISOString()
      const endStr = new Date(`${form.date}T${form.endTime}:00+02:00`).toISOString()

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: new Date(`${form.date}T00:00:00+02:00`).toISOString(),
          startTime: startStr,
          endTime: endStr,
          organizationId: (session?.user as any)?.organizationId,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Erro ao criar evento.")
        setLoading(false)
        return
      }

      router.push("/admin/eventos")
    } catch {
      setError("Erro de ligação. Tenta novamente.")
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Novo evento</h1>
        <p className="text-gray-500 mt-1">Preenche os detalhes do evento</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
          />
          <p className="text-xs text-gray-400 mt-1">enso.app/e/{form.slug || "slug-do-evento"}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tema / Tópico *</label>
          <input
            name="topic"
            value={form.topic}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Ex: Inteligência Artificial, Empreendedorismo..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Início *</label>
            <input
              type="time"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fim *</label>
            <input
              type="time"
              name="endTime"
              value={form.endTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Local</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Ex: Auditório da ENSO, Maputo"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "A criar..." : "Criar evento"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
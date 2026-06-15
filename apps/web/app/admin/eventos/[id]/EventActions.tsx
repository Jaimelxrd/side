"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface Event {
  id: string
  slug: string
  name: string
  description?: string | null
  topic?: string | null
  date: string
  startTime: string
  endTime: string
  location?: string | null
  publicationStatus: string
}

interface Props {
  event: Event
}

export default function EventActions({ event }: Props) {
  console.log("EVENT STATUS:", event.publicationStatus)
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [editOpen, setEditOpen] = useState(false)
  
const toLocalTime = (isoString: string) => {
  return new Date(isoString).toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Maputo",
  })
}

const toLocalDate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString("en-CA", {
    timeZone: "Africa/Maputo",
  }) // en-CA dá formato YYYY-MM-DD que o input type="date" precisa
}

  const [form, setForm] = useState({
    name: event.name,
    description: event.description ?? "",
    topic: event.topic ?? "",
    date: toLocalDate(event.date),
    startTime: toLocalTime(event.startTime),
    endTime: toLocalTime(event.endTime),
    location: event.location ?? "",
  })


  
  const handlePublish = async () => {
    setLoading("publish")
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}/publish`, { method: "PATCH" })
    router.refresh()
    setLoading(null)
  }

  const handleCancel = async () => {
    if (!confirm("Tens a certeza que queres cancelar este evento? Os participantes serão notificados.")) return
    setLoading("cancel")
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}/cancel`, { method: "PATCH" })
    router.refresh()
    setLoading(null)
  }
  const handleDelete = async () => {
  if (!confirm("Tens a certeza que queres APAGAR este evento? Esta acção é irreversível e remove todos os participantes e dados associados.")) return
  setLoading("delete")
  const res = await fetch(`/api/admin/eventos/${event.id}`, { method: "DELETE" })
  if (res.ok) {
    router.push("/admin/eventos")
  } else {
    alert("Erro ao apagar evento.")
    setLoading(null)
  }
}

  const handleDownloadQR = async () => {
    setLoading("qr")
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}/qrcode`)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `qrcode-${event.slug}.png`
    a.click()
    URL.revokeObjectURL(url)
    setLoading(null)
  }

  const handleEdit = async () => {
  setLoading("edit")
  try {
    const dateStr = form.date
    // Constrói como horário local de Moçambique explicitamente
    const toUTC = (time: string) => {
      const local = new Date(`${dateStr}T${time}:00+02:00`)
      return local.toISOString()
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        description: form.description,
        topic: form.topic,
        location: form.location,
        date: new Date(`${dateStr}T00:00:00+02:00`).toISOString(),
        startTime: toUTC(form.startTime),
        endTime: toUTC(form.endTime),
      }),
    })
    if (res.ok) {
      setEditOpen(false)
      router.refresh()
    }
  } finally {
    setLoading(null)
  }
}

  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-900 mb-4">Acções</h2>
        <div className="flex gap-3 flex-wrap">
          {event.publicationStatus === "DRAFT" && (
            <button onClick={handlePublish} disabled={loading === "publish"}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50">
              {loading === "publish" ? "A publicar..." : " Publicar evento"}
            </button>
          )}
          {event.publicationStatus !== "CANCELLED" && new Date() < new Date(event.endTime) &&(
            <>
              <button onClick={() => setEditOpen(true)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                 Editar evento
              </button>
              <button onClick={handleCancel} disabled={loading === "cancel"}
                className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 disabled:opacity-50">
                {loading === "cancel" ? "A cancelar..." : " Cancelar evento"}
              </button>
            </>
          )}
             <button onClick={handleDelete}
          disabled={loading === "delete"}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50">
          {loading === "delete" ? "A apagar..." : " Apagar evento"}
          </button>
          <button onClick={handleDownloadQR} disabled={loading === "qr"}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 disabled:opacity-50">
            {loading === "qr" ? "A gerar..." : " Descarregar QR Code"}
          </button>
          <a href={`/e/${event.slug}`} target="_blank"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
             Ver página pública
          </a>
          <Link href={`/admin/eventos/${event.id}/staff`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
             Tela do Staff
          </Link>
          <Link href={`/moderar/${event.id}`} target="_blank"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
            Ecrã do Moderador
          </Link>
        </div>
      </div>

      {/* Modal de edição */}
      {editOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="font-semibold text-gray-900 mb-4">Editar evento</h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Nome</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Tema</label>
                <input value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Descrição</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Local</label>
                <input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Data</label>
                <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">Hora de início</label>
                  <input type="time" value={form.startTime} onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">Hora de fim</label>
                  <input type="time" value={form.endTime} onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2"> Horário de Moçambique (UTC+2)</p>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleEdit} disabled={loading === "edit"}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
                {loading === "edit" ? "A guardar..." : "Guardar alterações"}
              </button>
              <button onClick={() => setEditOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
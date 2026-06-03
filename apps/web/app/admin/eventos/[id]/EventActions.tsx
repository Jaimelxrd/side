"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Event {
  id: string
  slug: string
  publicationStatus: string
}

interface Props {
  event: Event
}

export default function EventActions({ event }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

  const handlePublish = async () => {
    setLoading("publish")
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}/publish`, {
      method: "PATCH",
    })
    router.refresh()
    setLoading(null)
  }

  const handleCancel = async () => {
    if (!confirm("Tens a certeza que queres cancelar este evento? Os participantes serão notificados.")) return
    setLoading("cancel")
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}/cancel`, {
      method: "PATCH",
    })
    router.refresh()
    setLoading(null)
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

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="font-semibold text-gray-900 mb-4">Acções</h2>
      <div className="flex gap-3 flex-wrap">
        {event.publicationStatus === "DRAFT" && (
          <button
            onClick={handlePublish}
            disabled={loading === "publish"}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
          >
            {loading === "publish" ? "A publicar..." : "✅ Publicar evento"}
          </button>
        )}
        {event.publicationStatus !== "CANCELLED" && (
          <button
            onClick={handleCancel}
            disabled={loading === "cancel"}
            className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 disabled:opacity-50"
          >
            {loading === "cancel" ? "A cancelar..." : "❌ Cancelar evento"}
          </button>
        )}
        <button
          onClick={handleDownloadQR}
          disabled={loading === "qr"}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 disabled:opacity-50"
        >
          {loading === "qr" ? "A gerar..." : "📱 Descarregar QR Code"}
        </button>
        
        <a  href={`/e/${event.slug}`}
          target="_blank"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200"
        >
          🔗 Ver página pública
        </a>
      </div>
    </div>
  )
}
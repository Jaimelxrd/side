"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// ─── Tipos ─────────────────────────────────────────────────────────────────

type FieldType = "TEXT" | "NUMBER" | "SELECT" | "CHECKBOX"

interface FormField {
  id: string
  label: string
  type: FieldType
  required: boolean
  options?: string | null
  order: number
  isDefault: boolean
}

interface NewField {
  label: string
  type: FieldType
  required: boolean
  options: string
}

interface Props {
  eventId: string
  initialFields: FormField[]
}

// ─── Campos fixos ──────────────────────────────────────────────────────────

const FIXED_FIELDS = [
  { label: "Nome completo", icon: "" },
  { label: "Telefone", icon: "" },
  { label: "Email", icon: "" },
]

// ─── Campos padrão opcionais ───────────────────────────────────────────────

const DEFAULT_OPTIONAL = [
  { label: "Cidade", type: "TEXT" as FieldType },
  { label: "Profissão", type: "TEXT" as FieldType },
  { label: "Empresa", type: "TEXT" as FieldType },
  { label: "Como conheceu o evento", type: "SELECT" as FieldType },
]

function parseOptions(options?: string | null): string[] {
  if (!options) return []
  try { return JSON.parse(options) } catch { return [] }
}

// ─── Componente principal ──────────────────────────────────────────────────

export default function FormBuilder({ eventId, initialFields }: Props) {
  const router = useRouter()
  const [fields, setFields] = useState<FormField[]>(initialFields)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showNewField, setShowNewField] = useState(false)
  const [newField, setNewField] = useState<NewField>({
    label: "", type: "TEXT", required: false, options: "",
  })
  const [optionsInput, setOptionsInput] = useState("")

  const customFields = fields.filter(f => !f.isDefault).sort((a, b) => a.order - b.order)
  const defaultFields = fields.filter(f => f.isDefault)

  const isDefaultActive = (label: string) =>
    defaultFields.some(f => f.label === label)

  // ── Toggle campo padrão opcional ──────────────────────────────────────────
  const toggleDefault = (item: typeof DEFAULT_OPTIONAL[number]) => {
    const existing = defaultFields.find(f => f.label === item.label)
    if (existing) {
      setFields(prev => prev.filter(f => f.id !== existing.id))
    } else {
      const tempId = `temp_${Date.now()}`
      const newOrder = fields.length > 0 ? Math.max(...fields.map(f => f.order)) + 1 : 4
      setFields(prev => [...prev, {
        id: tempId,
        label: item.label,
        type: item.type,
        required: false,
        options: item.label === "Como conheceu o evento"
          ? JSON.stringify(["Redes sociais", "Amigo/familiar", "Email", "Cartaz", "Outro"])
          : null,
        order: newOrder,
        isDefault: true,
      }])
    }
  }

  // ── Adicionar campo personalizado ─────────────────────────────────────────
  const addCustomField = () => {
    if (!newField.label.trim()) return
    const opts = newField.type === "SELECT" || newField.type === "CHECKBOX"
      ? optionsInput.split(",").map(s => s.trim()).filter(Boolean)
      : []
    const tempId = `temp_${Date.now()}`
    const newOrder = fields.length > 0 ? Math.max(...fields.map(f => f.order)) + 1 : 4
    setFields(prev => [...prev, {
      id: tempId,
      label: newField.label.trim(),
      type: newField.type,
      required: newField.required,
      options: opts.length ? JSON.stringify(opts) : null,
      order: newOrder,
      isDefault: false,
    }])
    setNewField({ label: "", type: "TEXT", required: false, options: "" })
    setOptionsInput("")
    setShowNewField(false)
  }

  // ── Remover campo personalizado ───────────────────────────────────────────
  const removeCustomField = (id: string) => {
    setFields(prev => prev.filter(f => f.id !== id))
  }

  // ── Reordenar ─────────────────────────────────────────────────────────────
  const moveField = (id: string, direction: "up" | "down") => {
    const sorted = [...customFields]
    const idx = sorted.findIndex(f => f.id === id)
    if (direction === "up" && idx === 0) return
    if (direction === "down" && idx === sorted.length - 1) return
    const swapIdx = direction === "up" ? idx - 1 : idx + 1
    ;[sorted[idx], sorted[swapIdx]] = [sorted[swapIdx], sorted[idx]]
    const updatedCustom = sorted.map((f, i) => ({ ...f, order: defaultFields.length + i + 1 }))
    setFields(prev => [...prev.filter(f => f.isDefault), ...updatedCustom])
  }

  // ── Toggle obrigatório ────────────────────────────────────────────────────
  const toggleRequired = (id: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, required: !f.required } : f))
  }

  // ── Guardar ───────────────────────────────────────────────────────────────
  const saveForm = async () => {
    setSaving(true)
    try {
      const payload = fields.map((f, i) => ({
        id: f.id.startsWith("temp_") ? undefined : f.id,
        label: f.label,
        type: f.type,
        required: f.required,
        options: f.options,
        order: i + 1,
        isDefault: f.isDefault,
      }))
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${eventId}/form-fields`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: payload }),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
      router.refresh()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-900">Formulário de inscrição</h2>
          <p className="text-xs text-gray-400 mt-0.5">{fields.length + 3} campos no total</p>
        </div>
        <button
          onClick={saveForm}
          disabled={saving}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            saved ? "bg-green-100 text-green-700" : "bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50"
          }`}
        >
          {saving ? "A guardar..." : saved ? "✓ Guardado" : "Guardar formulário"}
        </button>
      </div>

      <div className="p-6 space-y-6">

        {/* Campos fixos */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Campos obrigatórios</p>
          <div className="space-y-2">
            {FIXED_FIELDS.map(f => (
              <div key={f.label} className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-100">
                <span>{f.icon}</span>
                <span className="text-sm font-medium text-gray-700 flex-1">{f.label}</span>
                <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full">Sempre presente</span>
              </div>
            ))}
          </div>
        </div>

        {/* Campos padrão opcionais */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Campos opcionais padrão</p>
          <div className="space-y-2">
            {DEFAULT_OPTIONAL.map(item => {
              const active = isDefaultActive(item.label)
              const field = defaultFields.find(f => f.label === item.label)
              return (
                <div key={item.label} className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                  active ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200 opacity-60"
                }`}>
                  <button
                    onClick={() => toggleDefault(item)}
                    className={`w-10 h-5 rounded-full transition-all flex-shrink-0 relative ${active ? "bg-blue-600" : "bg-gray-200"}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${active ? "left-5" : "left-0.5"}`} />
                  </button>
                  <span className="text-sm font-medium text-gray-700 flex-1">{item.label}</span>
                  {active && field && (
                    <label className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer">
                      <input type="checkbox" checked={field.required} onChange={() => toggleRequired(field.id)} className="rounded" />
                      Obrigatório
                    </label>
                  )}
                  <span className="text-xs text-gray-400">{item.type === "SELECT" ? "Selecção" : "Texto"}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Campos personalizados */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Campos personalizados</p>
            <button onClick={() => setShowNewField(true)} className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              + Adicionar campo
            </button>
          </div>

          {customFields.length === 0 && !showNewField && (
            <div className="text-center py-6 border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-sm text-gray-400">Nenhum campo personalizado ainda.</p>
              <button onClick={() => setShowNewField(true)} className="mt-2 text-sm text-blue-600 hover:underline">
                Adicionar o primeiro campo
              </button>
            </div>
          )}

          <div className="space-y-2">
            {customFields.map((field, idx) => (
              <div key={field.id} className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-gray-200">
                <div className="flex flex-col gap-0.5">
                  <button onClick={() => moveField(field.id, "up")} disabled={idx === 0} className="text-gray-300 hover:text-gray-500 disabled:opacity-20 text-xs leading-none">▲</button>
                  <button onClick={() => moveField(field.id, "down")} disabled={idx === customFields.length - 1} className="text-gray-300 hover:text-gray-500 disabled:opacity-20 text-xs leading-none">▼</button>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{field.label}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-400">
                      {field.type === "TEXT" ? "Texto" : field.type === "NUMBER" ? "Número" : field.type === "SELECT" ? "Selecção" : "Checkbox"}
                    </span>
                    {field.type === "SELECT" && field.options && (
                      <span className="text-xs text-gray-400">· {parseOptions(field.options).length} opções</span>
                    )}
                  </div>
                </div>
                <label className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer flex-shrink-0">
                  <input type="checkbox" checked={field.required} onChange={() => toggleRequired(field.id)} className="rounded" />
                  Obrigatório
                </label>
                <button onClick={() => removeCustomField(field.id)} className="text-red-400 hover:text-red-600 text-xs p-1">✕</button>
              </div>
            ))}
          </div>

          {/* Formulário novo campo */}
          {showNewField && (
            <div className="mt-3 p-4 border-2 border-blue-200 bg-blue-50 rounded-lg space-y-3">
              <p className="text-sm font-semibold text-gray-700">Novo campo</p>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Rótulo</label>
                <input
                  type="text"
                  placeholder="Ex: Número de BI"
                  value={newField.label}
                  onChange={e => setNewField(p => ({ ...p, label: e.target.value }))}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Tipo</label>
                  <select
                    value={newField.type}
                    onChange={e => setNewField(p => ({ ...p, type: e.target.value as FieldType }))}
                    className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  >
                    <option value="TEXT">Texto</option>
                    <option value="NUMBER">Número</option>
                    <option value="SELECT">Selecção (lista)</option>
                    <option value="CHECKBOX">Checkbox</option>
                  </select>
                </div>
                <div className="flex items-end pb-1">
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" checked={newField.required} onChange={e => setNewField(p => ({ ...p, required: e.target.checked }))} className="rounded" />
                    Obrigatório
                  </label>
                </div>
              </div>
              {(newField.type === "SELECT" || newField.type === "CHECKBOX") && (
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Opções <span className="text-gray-400">(separadas por vírgula)</span></label>
                  <input
                    type="text"
                    placeholder="Ex: Sim, Não, Talvez"
                    value={optionsInput}
                    onChange={e => setOptionsInput(e.target.value)}
                    className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                  />
                </div>
              )}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={addCustomField}
                  disabled={!newField.label.trim()}
                  className="flex-1 bg-gray-900 text-white text-sm py-2 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-40"
                >
                  Adicionar campo
                </button>
                <button
                  onClick={() => { setShowNewField(false); setNewField({ label: "", type: "TEXT", required: false, options: "" }); setOptionsInput("") }}
                  className="px-4 text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Pré-visualização */}
        <div className="border-t pt-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Pré-visualização · {fields.length + 3} campos
          </p>
          <div className="flex flex-wrap gap-2">
            {FIXED_FIELDS.map(f => (
              <span key={f.label} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200">
                {f.label} <span className="text-red-400">*</span>
              </span>
            ))}
            {fields.map(f => (
              <span key={f.id} className={`text-xs px-2.5 py-1 rounded-full border ${
                f.isDefault ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-purple-50 text-purple-700 border-purple-200"
              }`}>
                {f.label} {f.required && <span className="text-red-400">*</span>}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            <span className="inline-block w-2 h-2 bg-blue-200 rounded-full mr-1" />Padrão&nbsp;&nbsp;
            <span className="inline-block w-2 h-2 bg-purple-200 rounded-full mr-1" />Personalizado&nbsp;&nbsp;
            <span className="text-red-400">*</span> Obrigatório
          </p>
        </div>

      </div>
    </div>
  )
}
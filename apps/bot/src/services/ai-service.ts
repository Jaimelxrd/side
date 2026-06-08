import { GoogleGenerativeAI } from "@google/generative-ai"

// --- Tipos ---
export interface AIAnalysisResult {
  approved: boolean  
  score: number        // 0 a 100
  reason: string
}

// --- Interface do provider (para trocar de API no futuro) ---
interface AIProvider {
  analyze(question: string, eventTopic: string): Promise<AIAnalysisResult>
}

// --- Provider: Gemini ---
class GeminiProvider implements AIProvider {
  private client: GoogleGenerativeAI

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) throw new Error("GEMINI_API_KEY não definida no .env")
    this.client = new GoogleGenerativeAI(apiKey)
  }

  async analyze(question: string, eventTopic: string): Promise<AIAnalysisResult> {
    const model = this.client.getGenerativeModel({ model: "gemini-1.5-pro" })

    const prompt = `
És um moderador de perguntas para um evento sobre: "${eventTopic}".

Analisa esta pergunta e decide se deve ser aprovada para o público:
"${question}"

Critérios de REJEIÇÃO:
- Spam ou mensagem sem sentido
- Linguagem ofensiva ou inapropriada
- Completamente fora do tema do evento
- Propaganda ou publicidade

Responde APENAS com JSON válido, sem texto extra, neste formato exacto:
{
  "approved": true,
  "score": 85,
  "reason": "Pergunta relevante e bem formulada sobre o tema"
}
`

    const result = await model.generateContent(prompt)
    const text = result.response.text().trim()

    // Remove possíveis marcadores de código (```json ... ```)
    const clean = text.replace(/```json|```/g, "").trim()
    const parsed = JSON.parse(clean)

    return {
      approved: Boolean(parsed.approved),
      score: Number(parsed.score),
      reason: String(parsed.reason),
    }
  }
}

// --- Serviço principal (usa o provider activo) ---
const provider: AIProvider = new GeminiProvider()

export async function analyzeQuestion(
  question: string,
  eventTopic: string
): Promise<AIAnalysisResult> {
  try {
    return await provider.analyze(question, eventTopic)
  } catch (error) {
    console.error("Erro no serviço de IA:", error)
    // Fallback seguro: aprova com score baixo para não bloquear o sistema
    return {
      approved: true,
      score: 50,
      reason: "Serviço de IA indisponível — aprovação automática",
    }
  }
}
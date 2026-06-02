import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.RESEND_FROM || "onboarding@resend.dev"

// ─── Email de confirmação de inscrição ───────────────────────────────────────

export async function sendConfirmationEmail(
  to: string,
  name: string,
  eventName: string,
  eventDate: Date,
  startTime: Date,
  location?: string
) {
  const date = eventDate.toLocaleDateString("pt-PT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const hour = startTime.toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  })

  await resend.emails.send({
    from: FROM,
    to,
    subject: `✅ Inscrição confirmada — ${eventName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Olá, ${name}! 👋</h2>
        <p>A tua inscrição no evento <strong>${eventName}</strong> foi confirmada.</p>
        
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 24px 0;">
          <p>📅 <strong>Data:</strong> ${date}</p>
          <p>⏰ <strong>Hora:</strong> ${hour}</p>
          ${location ? `<p>📍 <strong>Local:</strong> ${location}</p>` : ""}
        </div>

        <p>Receberás um lembrete por WhatsApp 24h e 1h antes do evento.</p>
        <p>Até já!</p>
      </div>
    `,
  })

  console.log(`📧 Email de confirmação enviado para ${to}`)
}

// ─── Email de follow-up pós-evento ───────────────────────────────────────────

export async function sendFollowUpEmail(
  to: string,
  name: string,
  eventName: string
) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: `🙏 Obrigado por participares — ${eventName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Olá, ${name}! 🙏</h2>
        <p>Obrigado por participares no evento <strong>${eventName}</strong>.</p>
        
        <p>Em breve partilharemos os materiais e gravações do evento.</p>
        
        <p>Fique atento às próximas edições!</p>
      </div>
    `,
  })

  console.log(`📧 Email de follow-up enviado para ${to}`)
}
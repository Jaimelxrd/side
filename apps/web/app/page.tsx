import Link from "next/link"

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-geist-sans)" }} className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-8 py-5 border-b border-gray-100 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">ENSO</span>
          <span className="text-sm text-gray-400">Events OS</span>
        </div>
        <Link href="/login" className="text-sm text-gray-500 border border-gray-200 rounded-lg px-4 py-1.5 hover:border-gray-400 transition-colors">
          Entrar
        </Link>
      </header>

      <section className="px-8 pt-16 pb-10 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Gestão de eventos</p>
        <h1 className="text-4xl sm:text-5xl font-medium leading-tight text-gray-900 mb-5">
          Da inscrição ao check-in,<br />tudo num painel só.
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-lg mb-8">
          Cria eventos, partilha o link de inscrição e acompanha participantes em tempo real — com confirmações automáticas via WhatsApp.
        </p>
        <Link href="/login" className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors">
          Aceder ao painel →
        </Link>
      </section>

      <section className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { title: "Criação de eventos", text: "Define data, local e capacidade. Link de inscrição gerado em segundos." },
            { title: "WhatsApp automático", text: "Confirmações e lembretes enviados automaticamente para cada participante." },
            { title: "Check-in por QR Code", text: "Regista presenças na porta com leitura rápida de QR code ou lista manual." },
          ].map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm font-medium text-gray-900 mb-1">{f.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-8 py-5 border-t border-gray-100 max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-sm text-gray-400">ENSO Events OS</span>
        <Link href="/login" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Painel administrativo →</Link>
      </footer>
    </div>
  )
}
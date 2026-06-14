export default function Home() {
  return (
    <div className="min-h-screen bg-[#15151A] text-[#F4F1EA]" style={{fontFamily: 'var(--font-geist-sans)'}}>
      {/* Nav */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-sm tracking-[0.3em] uppercase text-[#FF5E3A]" style={{fontFamily: 'var(--font-geist-mono)'}}>ENSO</span>
          <span className="text-sm tracking-[0.3em] uppercase text-[#8A8A93]" style={{fontFamily: 'var(--font-geist-mono)'}}>Events OS</span>
        </div>
        <a
          href="/login"
          className="text-sm font-medium border border-[#3A3A42] rounded-full px-5 py-2 hover:border-[#FF5E3A] hover:text-[#FF5E3A] transition-colors"
        >
          Entrar
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 sm:px-10 max-w-6xl mx-auto pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-[#8A8A93] mb-6" style={{fontFamily: 'var(--font-geist-mono)'}}>
            Gestão de eventos · do convite ao check-in
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            Cada bilhete,
            <br />
            <span className="text-[#FF5E3A]">um convidado</span>
            <br />
            confirmado.
          </h1>
          <p className="mt-8 text-lg text-[#B8B8C0] max-w-md leading-relaxed">
            Cria o evento, partilha o link de inscrição e acompanha quem chega
            — tudo num painel só, com confirmações automáticas via WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/login"
              className="inline-flex items-center gap-2 bg-[#FF5E3A] text-[#15151A] font-medium rounded-full px-6 py-3 hover:bg-[#ff7a5c] transition-colors"
            >
              Aceder ao painel
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className="text-sm text-[#8A8A93]">Acesso restrito à equipa</span>
          </div>
        </div>

        {/* Ticket card */}
        <div className="mx-auto w-full max-w-sm">
          <div className="bg-[#1E1E25] border border-[#33333C] rounded-2xl overflow-hidden">
            {/* Top */}
            <div className="px-6 py-5 border-b border-dashed border-[#3A3A42] flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8A8A93]">Bilhete</p>
                <p className="text-lg font-semibold mt-1">Noite de Lançamento</p>
              </div>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#FF5E3A]">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Body */}
            <div className="px-6 py-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#8A8A93] text-xs uppercase tracking-wider">Convidado</p>
                <p className="mt-1">Inês Macamo</p>
              </div>
              <div>
                <p className="text-[#8A8A93] text-xs uppercase tracking-wider">Estado</p>
                <p className="mt-1 flex items-center gap-2 text-[#2DD4BF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] inline-block" />
                  Confirmado
                </p>
              </div>
              <div>
                <p className="text-[#8A8A93] text-xs uppercase tracking-wider">Data</p>
                <p className="mt-1">21 Jun · 19h00</p>
              </div>
              <div>
                <p className="text-[#8A8A93] text-xs uppercase tracking-wider">Via</p>
                <p className="mt-1 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#2DD4BF]">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  WhatsApp
                </p>
              </div>
            </div>

            {/* QR stub */}
            <div className="relative border-t border-dashed border-[#3A3A42] flex items-center justify-center bg-[#181820] h-24">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#5A5A63]">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="5" y="5" width="3" height="3" fill="currentColor"/>
                <rect x="16" y="5" width="3" height="3" fill="currentColor"/>
                <rect x="5" y="16" width="3" height="3" fill="currentColor"/>
                <path d="M14 14h2v2h-2zM16 16h2v2h-2zM18 14h2v2h-2zM14 18h4v2h-4z" fill="currentColor"/>
              </svg>
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#15151A] border border-[#33333C]" />
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#15151A] border border-[#33333C]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-10 max-w-6xl mx-auto pb-24">
        <div className="grid sm:grid-cols-3 gap-px bg-[#2A2A31] rounded-2xl overflow-hidden">
          <div className="bg-[#1E1E25] p-8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#FF5E3A] mb-4">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-lg mb-2">Criação de eventos</h3>
            <p className="text-sm text-[#B8B8C0] leading-relaxed">Define data, local e capacidade. Gera o link de inscrição em segundos.</p>
          </div>
          <div className="bg-[#1E1E25] p-8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#FF5E3A] mb-4">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-lg mb-2">Confirmação automática</h3>
            <p className="text-sm text-[#B8B8C0] leading-relaxed">O bot de WhatsApp envia lembretes e regista presenças sem trabalho manual.</p>
          </div>
          <div className="bg-[#1E1E25] p-8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#FF5E3A] mb-4">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="font-semibold text-lg mb-2">Gestão da equipa</h3>
            <p className="text-sm text-[#B8B8C0] leading-relaxed">Atribui papéis de admin e staff para moderar a porta no dia do evento.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 max-w-6xl mx-auto py-10 border-t border-[#2A2A31] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8A8A93]">
        <p>ENSO Events OS</p>
        <a href="/login" className="hover:text-[#FF5E3A] transition-colors">
          Painel administrativo →
        </a>
      </footer>
    </div>
  )
}
# 🤖 Guia para IA - Arquitetura & Context

## 📌 Para Assistentes de IA que vão ajudar com Deploy

Este documento foi criado para que você (uma IA) entenda rapidamente a arquitetura, estrutura e todos os detalhes necessários para ajudar com deployment, troubleshooting e melhorias.

---

## 🏗️ Arquitetura de Alto Nível

```
┌─────────────────────────────────────────────────────────────┐
│                     ENSO Events OS                           │
│                   (Monorepo Node.js)                        │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────┬────────────────────┐
│   apps/web           │     apps/bot         │  packages/database │
│   (Next.js 14)       │   (Express.js)       │   (Prisma ORM)     │
│                      │                      │                    │
│  - Frontend React    │  - WhatsApp Bot      │  - Shared client   │
│  - API Routes        │  - Scheduler         │  - Migrations      │
│  - Auth (NextAuth)   │  - Services          │  - Schema          │
│  - Admin Dashboard   │  - Socket.io         │                    │
└──────────────────────┴──────────────────────┴────────────────────┘
          │                    │                        │
          └────────────────────┴────────────────────────┘
                        │
                ┌───────▼────────┐
                │  PostgreSQL    │
                │   Database     │
                └────────────────┘
```

---

## 📁 Estrutura de Arquivos Crítica

### Para Deploy
```
.
├── package.json              ← Root workspace config
├── DEPLOYMENT_DOCS.md        ← Este arquivo (leia primeiro!)
├── ENDPOINT_DETAILS.md       ← Detalhes do endpoint PATCH
├── DEPLOYMENT_SCENARIOS.md   ← Guias de deploy por plataforma
│
├── apps/
│   ├── web/
│   │   ├── package.json      ← Dependencies do Next.js
│   │   ├── tsconfig.json     ← TypeScript config
│   │   ├── next.config.mjs   ← Next.js config
│   │   ├── .env.local        ← ⚠️ Variables (não commit)
│   │   ├── middleware.ts     ← Auth middleware
│   │   │
│   │   ├── app/
│   │   │   ├── layout.tsx    ← Root layout
│   │   │   ├── page.tsx      ← Home page
│   │   │   │
│   │   │   ├── api/
│   │   │   │   ├── admin/
│   │   │   │   │   └── utilizadores/[id]/route.ts  ← ENDPOINT DOCUMENTADO
│   │   │   │   └── auth/[...nextauth]/             ← Auth endpoints
│   │   │   │
│   │   │   ├── admin/        ← Dashboard pages
│   │   │   ├── e/[slug]/     ← Event registration
│   │   │   └── login/        ← Login page
│   │   │
│   │   └── lib/
│   │       └── auth.ts       ← NextAuth config
│   │
│   └── bot/
│       ├── package.json
│       ├── railway.toml      ← Railway deploy config
│       ├── tsconfig.json
│       │
│       └── src/
│           ├── index.ts      ← Entry point
│           ├── controllers/  ← Request handlers
│           ├── routes/       ← Route definitions
│           ├── services/     ← Business logic
│           ├── scheduler/    ← Queue/Scheduler
│           └── whatsapp/     ← Bot logic
│
└── packages/
    └── database/
        ├── package.json
        ├── tsconfig.json
        ├── index.ts         ← Exports prisma client
        │
        ├── prisma/
        │   ├── schema.prisma ← ⭐ Database schema (IMPORTANTE!)
        │   └── migrations/   ← SQL migrations
        │
        └── generated/
            └── prisma/      ← Auto-generated types
```

---

## 🔐 Stack Técnico Resumido

### Frontend & API (apps/web)
```
NextAuth (Auth) → Next.js Routes → Prisma Client → PostgreSQL
     ↓                ↓              ↓                ↓
  Session        Endpoint         Types            Data
  Validation     Handler          Safety
```

### Backend (apps/bot)
```
Express Router → Controllers → Services → Prisma → PostgreSQL
     ↓                ↓           ↓         ↓           ↓
  HTTP/WS       Business      Queue      ORM        Persistence
                 Logic        Scheduler
```

### Database Layer (packages/database)
```
Prisma Schema → Migrations → Client Generation → Shared Export
     ↓              ↓              ↓                  ↓
  Models        SQL Files      Type Defs          Import via
  Validation                                     @enso/database
```

---

## 🔑 Conceitos Importantes

### 1. Monorepo com npm Workspaces
```json
// Root package.json
{
  "workspaces": [
    "apps/*",      // apps/web, apps/bot
    "packages/*"   // packages/database
  ]
}
```

**Implicação:** 
- Instalar uma vez: `npm install` no root
- Acessa de um lugar: `import { prisma } from "@enso/database"`
- Shared dependencies (evita duplicação)

### 2. NextAuth para Autenticação
```typescript
const session = await getServerSession(authOptions)
// Retorna: { user: { email, role, ... }, expires }
```

**Roles:**
- SUPERADMIN: Pode fazer tudo (trocar senhas de outros users)
- ADMIN: Admin limitado
- USER: Usuário normal

### 3. Prisma como ORM
```typescript
await prisma.user.update({
  where: { id: "123" },
  data: { passwordHash: "..." }
})
// → SQL gerado e executado automaticamente
```

### 4. API Route Dinâmica do Next.js
```
URL: /api/admin/utilizadores/[id]
Arquivo: app/api/admin/utilizadores/[id]/route.ts
Param: params.id extrai o [id]
```

---

## 🌍 Fluxo de Dados End-to-End

### Exemplo: Alterar senha de usuário

```
1. BROWSER
   └─ User clica "Change Password"
   └─ Submete form: POST { password: "..." }

2. FRONTEND (React/Next.js)
   └─ fetch('/api/admin/utilizadores/userId', { body })
   └─ Envia cookie de autenticação automaticamente

3. BACKEND (Next.js API Route)
   ├─ Route: apps/web/app/api/admin/utilizadores/[id]/route.ts
   ├─ getServerSession() → verifica se autenticado
   ├─ Valida role → requer SUPERADMIN
   ├─ Valida password → mín 6 chars
   ├─ bcrypt.hash(password) → cria hash seguro
   └─ prisma.user.update() → atualiza banco

4. DATABASE LAYER (packages/database)
   ├─ Prisma client gerado a partir de schema
   ├─ Converte em SQL: UPDATE User SET passwordHash=... WHERE id=...
   └─ Executa contra PostgreSQL

5. POSTGRESQL
   └─ Armazena hash de forma segura

6. RESPONSE
   ├─ Backend retorna { success: true }
   ├─ Frontend recebe
   ├─ React atualiza UI
   └─ Browser mostra mensagem de sucesso
```

---

## ⚙️ Variáveis de Ambiente Críticas

| Variável | Local | Prod | Obrigatória | Onde |
|----------|-------|------|-------------|------|
| DATABASE_URL | ✅ | ✅ | ✅ | .env.local, Vercel/Railway/AWS |
| NEXTAUTH_SECRET | ✅ | ✅ | ✅ | .env.local, Vercel/Railway/AWS |
| NEXTAUTH_URL | ✅ | ✅ | ✅ | .env.local, Vercel/Railway/AWS |
| NODE_ENV | ✅ | ✅ | ✅ | Auto (production em prod) |

**Segredo Importante:**
- DATABASE_URL nunca no git (add `.env.local` to `.gitignore`)
- NEXTAUTH_SECRET deve ser aleatório e único por environment
- Gerar: `openssl rand -base64 32`

---

## 🛠️ Ferramentas & Comandos Essenciais

```bash
# ===== SETUP =====
npm install                                    # Instalar tudo
npx prisma generate                            # Gerar types
npx prisma migrate deploy                      # Rodar migrations

# ===== DESENVOLVIMENTO =====
npm run dev:web                                # Rodar Next.js
npm run dev:bot                                # Rodar Bot
npm run dev                                    # Ambos

# ===== BUILD =====
npm run build --workspace=apps/web             # Build Next.js
npm run build --workspace=apps/bot             # Build Bot
npm run lint --workspace=apps/web              # Lint code

# ===== PRODUÇÃO =====
NODE_ENV=production npm start --workspace=apps/web

# ===== DEBUG PRISMA =====
npx prisma db execute --stdin                  # SQL direto
npx prisma studio                              # Visual DB browser
npx prisma migrate status                      # Ver migrations
```

---

## 🐛 Troubleshooting Rápido para IA

### Erro: "Cannot find module @enso/database"
```bash
# Solução: Instalar workspace
npm install
npx prisma generate
```

### Erro: "Database connection failed"
```bash
# Verificar:
1. PostgreSQL rodando?
2. DATABASE_URL correto?
3. Migração executada? (npx prisma migrate deploy)
```

### Erro: "Session invalid / Sem permissão"
```bash
# Verificar:
1. NEXTAUTH_SECRET definido?
2. User é SUPERADMIN? (check banco)
3. Cookie válida?
```

### Build falha com TypeScript error
```bash
# Solução:
npx tsc --noEmit
# Fix errors, then retry build
```

### Porta 3000 em uso
```bash
# Solução:
npm run dev:web -- -p 3001
```

---

## 🚀 Pronto para Deploy? Use Esta Sequência

1. **Ler** [DEPLOYMENT_DOCS.md](./DEPLOYMENT_DOCS.md)
2. **Escolher plataforma** (Vercel, Railway, Docker, etc)
3. **Ler cenário** em [DEPLOYMENT_SCENARIOS.md](./DEPLOYMENT_SCENARIOS.md)
4. **Executar checklist** pré-deploy
5. **Monitorar** após deploy (logs, health check)

---

## 📚 Referências Rápidas para IA

| Tópico | Arquivo | Linha |
|--------|---------|-------|
| Endpoint PATCH | `apps/web/app/api/admin/utilizadores/[id]/route.ts` | - |
| Auth Config | `apps/web/lib/auth.ts` | - |
| Database Schema | `packages/database/prisma/schema.prisma` | - |
| Middleware | `apps/web/middleware.ts` | - |
| Auth Routes | `apps/web/app/api/auth/[...nextauth]/` | - |

---

## 💡 Para IA: Informações Sobre Este Projeto

### Tipo de Projeto
- **Full-Stack Web Application**
- **Monorepo** (múltiplos apps compartilhando código)
- **Type-Safe** (TypeScript em todo lugar)

### Complexidade
- **Baixa-Média**
- Autenticação, CRUD, Database simples
- Sem microserviços complexos

### Recomendações para Deploy
1. **Starter:** Vercel (Next.js) + Vercel Postgres
2. **Simples:** Railway (tudo integrado)
3. **Controle Total:** Docker + VPS

### Potencial Melhorias
- [ ] Rate limiting API
- [ ] Validação de senha mais forte
- [ ] Auditoria de mudanças (quem mudou o quê)
- [ ] Email notifications para mudanças de senha
- [ ] 2FA para SUPERADMIN
- [ ] Tests automatizados
- [ ] CI/CD pipeline

---

## 🎯 TLDR para IA Rápido

**O que é?** Sistema de eventos com autenticação, dashboard admin, e bot de WhatsApp.

**Stack?** Next.js 14 (frontend/api) + Express (backend) + Prisma + PostgreSQL

**Arquivo crítico?** `apps/web/app/api/admin/utilizadores/[id]/route.ts` (PATCH endpoint)

**Deploy?** Pode ir em Vercel, Railway, Docker, AWS, etc

**Primeiro passo?** `npm install` → `npx prisma migrate deploy` → `npm run build`

---

**🤖 Criado para:** Assistentes de IA  
**📅 Data:** 2026-06-12  
**🎯 Objetivo:** Facilitar compreensão e deployment do projeto

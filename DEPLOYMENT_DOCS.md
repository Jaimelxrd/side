# 📋 Documentação de Deployment - ENSO Events OS

## 📌 Visão Geral do Projeto

**Projeto:** ENSO Events OS
**Versão:** 1.0.0
**Tipo:** Full-stack Node.js com monorepo (Next.js + Express.js)
**Package Manager:** npm workspaces

### Arquitetura do Projeto

```
enso/side/ (monorepo root)
├── apps/
│   ├── web/          # Next.js 14 - Frontend + API Routes
│   └── bot/          # Express.js - Bot de WhatsApp
├── packages/
│   └── database/     # Prisma ORM compartilhado
└── Dependências globais
```

---

## 🔧 Stack Tecnológico

### Frontend/API (apps/web)
- **Next.js:** 14.2.35
- **React:** 18.2.0
- **TypeScript:** 5.0
- **Autenticação:** next-auth
- **Styling:** Tailwind CSS + PostCSS
- **Validação:** bcryptjs (para hashing de senhas)

### Backend (apps/bot)
- **Express.js** (implícito no package.json)
- **Suporte a WhatsApp** (socket.io-client)
- **Scheduler:** Queue + Scheduler

### Banco de Dados
- **ORM:** Prisma 5.22.0
- **Suporte:** PostgreSQL (via schema.prisma)
- **Shared Package:** @enso/database

---

## 📁 Estrutura de Pastas Detalhada

### `apps/web` - Next.js Application

```
apps/web/
├── app/
│   ├── api/
│   │   ├── admin/
│   │   │   └── utilizadores/[id]/route.ts  ⭐ ENDPOINT DOCUMENTADO
│   │   ├── auth/[...nextauth]/             # Autenticação
│   │   └── [outros endpoints]
│   ├── admin/                              # Dashboard admin
│   ├── e/[slug]/                          # Event registration forms
│   ├── login/                             # Login page
│   └── moderar/[eventId]/                 # Moderator panel
├── lib/
│   └── auth.ts                            # Auth config
├── middleware.ts                          # Next.js middleware
├── tsconfig.json                          # Typescript config
└── package.json
```

### `apps/bot` - Express Application

```
apps/bot/
├── src/
│   ├── controllers/                       # Route handlers
│   ├── routes/                           # Route definitions
│   ├── services/                         # Business logic
│   ├── scheduler/                        # Queue + jobs
│   └── whatsapp/                         # WhatsApp bot logic
├── railway.toml                          # Railway.app config
└── tsconfig.json
```

---

## 🔑 Endpoint Documentado: PATCH /api/admin/utilizadores/[id]

### Localização
📍 `apps/web/app/api/admin/utilizadores/[id]/route.ts`

### Funcionalidade
Atualiza a senha de um usuário (Admin only).

### Detalhes Técnicos

#### Requisição
```http
PATCH /api/admin/utilizadores/[USER_ID]
Content-Type: application/json

{
  "password": "nova_senha_segura"
}
```

#### Parâmetros
- `id` (URL param): UUID/ID do usuário a atualizar
- `password` (body): Nova senha (mínimo 6 caracteres)

#### Respostas

**✅ Sucesso (200)**
```json
{ "success": true }
```

**❌ Sem Permissão (403)**
```json
{ "error": "Sem permissão" }
```

**❌ Validação Inválida (400)**
```json
{ "error": "Password deve ter pelo menos 6 caracteres" }
```

**❌ Erro Servidor (500)**
```json
{ "error": "Erro ao atualizar usuário" }
```

### Segurança

#### Autenticação
- ✅ Valida sessão via `next-auth`
- ✅ Requer role `SUPERADMIN`
- ✅ Retorna 403 se não autenticado

#### Criptografia de Senha
- ✅ Usa `bcryptjs` com salt rounds = 10
- ✅ Armazena hash no banco, nunca texto plano
- ✅ Validação de comprimento mínimo (6 caracteres)

#### Ambiente
- ✅ `export const dynamic = 'force-dynamic'` (sem cache, sempre fresco)

---

## 🗄️ Banco de Dados - Prisma

### Configuração

#### Arquivo de Schema
📍 `packages/database/prisma/schema.prisma`

#### Tipo de Banco Suportado
- **PostgreSQL** (via `prisma/schema.prisma`)

#### Migrations
```
packages/database/prisma/migrations/
├── 20260512211910_init/                    # Schema inicial
└── 20260601180902_add_super_admin_role/   # Adição role SUPERADMIN
```

#### Client Compartilhado
```
import { prisma } from "@enso/database"
```

---

## 🚀 Instruções de Setup & Deploy

### 1️⃣ Pré-requisitos

```bash
# Node.js
node --version  # Requer: 18+ (recomendado 20+)

# npm workspaces suportado
npm --version   # Requer: 7+
```

### 2️⃣ Instalação Local

```bash
# Root do projeto
cd c:\Users\jaime\Videos\enso\side

# Instalar todas as dependências
npm install

# Instalará automaticamente:
# - apps/web/node_modules
# - apps/bot/node_modules
# - packages/database/node_modules
```

### 3️⃣ Configuração de Ambiente

#### `.env.local` ou `.env`
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/enso_db"

# NextAuth
NEXTAUTH_SECRET="seu_secret_super_seguro_aqui"
NEXTAUTH_URL="http://localhost:3000"  # ou seu domain em prod

# WhatsApp Bot (se usado)
WHATSAPP_BOT_TOKEN="seu_token_aqui"
```

#### Arquivo `.env.local` deve estar em:
- `apps/web/.env.local` (Next.js precisa)
- `packages/database/.env` ou root (Prisma precisa)

### 4️⃣ Configurar Banco de Dados

```bash
# Gerar client Prisma
npx prisma generate

# Rodar migrations
npx prisma migrate deploy

# (Opcional) Seed de dados
npx prisma db seed
```

### 5️⃣ Build

```bash
# Build Frontend (Next.js)
npm run build --workspace=apps/web

# Build Backend (Bot/Express)
npm run build --workspace=apps/bot
```

### 6️⃣ Desenvolvimento Local

```bash
# Terminal 1: Frontend
npm run dev:web
# Acessa: http://localhost:3000

# Terminal 2: Bot/Backend
npm run dev:bot
# (porta configurada em apps/bot)

# OU ambos em paralelo
npm run dev
```

### 7️⃣ Produção - Deploy

#### Opção A: Railway.app (Recomendado - já tem config)
```bash
# Railway.app usa: apps/bot/railway.toml
# Deploy automático via Git
```

#### Opção B: Vercel (Next.js)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd apps/web
vercel
```

#### Opção C: Docker/VPS
```dockerfile
# Exemplo Dockerfile simplificado
FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --workspace=apps/web

EXPOSE 3000
CMD ["npm", "run", "start", "--workspace=apps/web"]
```

---

## 🔐 Autenticação & Autorização

### Sistema de Auth

#### Localização Config
📍 `apps/web/lib/auth.ts`

#### Usado Em
- `next-auth` para gerenciar sessões
- Middleware: `apps/web/middleware.ts`

#### Roles Suportadas
```
- SUPERADMIN: Acesso total (pode usar endpoint PATCH de usuários)
- ADMIN: Acesso admin limitado
- USER: Acesso normal
```

---

## ⚠️ Variáveis de Ambiente Críticas

| Variável | Ambiente | Obrigatório | Descrição |
|----------|----------|-------------|-----------|
| `DATABASE_URL` | Todos | ✅ | Connection string PostgreSQL |
| `NEXTAUTH_SECRET` | Produção | ✅ | Secret para JWT |
| `NEXTAUTH_URL` | Produção | ✅ | URL base da aplicação |
| `NODE_ENV` | Produção | ✅ | `production` ou `development` |

---

## 📊 Dependências Críticas para Deploy

### Web (Next.js)
```json
{
  "@enso/database": "*",        // Shared DB client
  "@prisma/client": "^5.22.0",  // ORM
  "bcryptjs": "^2.4.3",         // Password hashing
  "next": "14.2.35",            // Framework
  "next-auth": "^5.x.x",        // Auth (implícito)
}
```

### Instalação de Deps
```bash
npm install --workspace=apps/web
npm install --workspace=packages/database
```

---

## 🧪 Testes Antes do Deploy

### ✅ Checklist Pre-Deploy

```bash
# 1. Verificar conexão banco
npx prisma db execute --stdin < /dev/null

# 2. Build sem erros
npm run build --workspace=apps/web

# 3. Rodar em staging local
npm run dev:web
# Testar endpoint: http://localhost:3000/api/admin/utilizadores/[test-id]

# 4. Verificar types TypeScript
npm run lint --workspace=apps/web

# 5. Simular produção
NODE_ENV=production npm start --workspace=apps/web
```

### Teste Manual do Endpoint

```bash
# 1. Obter token de autenticação (via login)
# 2. Fazer request PATCH

curl -X PATCH http://localhost:3000/api/admin/utilizadores/user-id-123 \
  -H "Content-Type: application/json" \
  -H "Cookie: next-auth.session-token=your_token" \
  -d '{"password": "novaSenha123"}'
```

---

## 🐛 Troubleshooting Comum

### Erro: "DATABASE_URL not found"
```bash
# Solução: Adicionar .env.local em apps/web e root
echo 'DATABASE_URL="postgresql://..."' > .env.local
echo 'DATABASE_URL="postgresql://..."' > packages/database/.env
```

### Erro: "Prisma client not generated"
```bash
# Solução: Gerar client
npx prisma generate
```

### Erro: "Session invalid / Sem permissão"
```bash
# Verificar:
# 1. NEXTAUTH_SECRET definido
# 2. User tem role SUPERADMIN
# 3. Session cookie válida
```

### Erro: "next dev not starting"
```bash
# Solução:
rm -rf .next node_modules
npm install
npm run dev:web
```

---

## 📚 Arquivos Importantes para IA

| Arquivo | Propósito |
|---------|-----------|
| `package.json` | Root workspace config |
| `apps/web/package.json` | Web dependencies |
| `apps/web/tsconfig.json` | TypeScript config |
| `apps/web/middleware.ts` | Next.js middleware |
| `packages/database/prisma/schema.prisma` | Database schema |
| `apps/web/lib/auth.ts` | Auth configuration |
| `apps/web/app/api/admin/utilizadores/[id]/route.ts` | Endpoint documentado |

---

## 🔗 Referências & Links

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Railway.app Docs](https://docs.railway.app/)

---

**📅 Última Atualização:** 2026-06-12  
**✍️ Mantido por:** Tim de Desenvolvimento ENSO

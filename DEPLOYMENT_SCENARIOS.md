# 🚀 Guia de Deploy - Checklist & Cenários

## 📋 Pré-Deploy Checklist

### ✅ Ambiente Local

- [ ] Node.js 18+ instalado
  ```bash
  node --version
  ```
- [ ] npm 7+ instalado
  ```bash
  npm --version
  ```
- [ ] Projeto clonado/baixado
  ```bash
  cd c:\Users\jaime\Videos\enso\side
  ```
- [ ] Dependências instaladas
  ```bash
  npm install
  ```

### ✅ Banco de Dados

- [ ] PostgreSQL instalado e rodando
- [ ] Credenciais de acesso conhecidas
- [ ] Database criada (ex: `enso_db`)
- [ ] `.env.local` criado com `DATABASE_URL`
  ```bash
  DATABASE_URL="postgresql://user:password@localhost:5432/enso_db"
  ```
- [ ] Prisma client gerado
  ```bash
  npx prisma generate
  ```
- [ ] Migrations executadas
  ```bash
  npx prisma migrate deploy
  ```

### ✅ Autenticação

- [ ] NextAuth secret gerado
  ```bash
  # Gerar com: openssl rand -base64 32
  NEXTAUTH_SECRET="seu_secret_super_seguro_aqui"
  ```
- [ ] `.env.local` tem `NEXTAUTH_SECRET`
- [ ] `.env.local` tem `NEXTAUTH_URL`
  - Local: `http://localhost:3000`
  - Produção: `https://seu-domain.com`

### ✅ Build & Tests

- [ ] Build sem erros
  ```bash
  npm run build --workspace=apps/web
  ```
- [ ] Lint passing
  ```bash
  npm run lint --workspace=apps/web
  ```
- [ ] Servidor inicia sem erros
  ```bash
  npm run dev:web
  ```
- [ ] Endpoint responsivo
  ```bash
  curl http://localhost:3000/api/admin/utilizadores/test
  ```

---

## 🎯 Cenários de Deploy

### Cenário 1: Deploy Local (Desenvolvimento)

**Objetivo:** Rodar aplicação localmente para testes

```bash
# 1. Setup inicial (uma vez)
cd c:\Users\jaime\Videos\enso\side
npm install
npx prisma migrate deploy

# 2. Configurar .env.local
cat > apps/web/.env.local << EOF
DATABASE_URL="postgresql://localhost/enso_dev"
NEXTAUTH_SECRET="dev-secret-unsafe-only-local"
NEXTAUTH_URL="http://localhost:3000"
EOF

# 3. Rodar
npm run dev:web
# Acessa: http://localhost:3000
```

**Troubleshooting:**
```bash
# Porta 3000 em uso?
npm run dev:web -- -p 3001

# Prisma client desatualizado?
npx prisma generate

# Banco indisponível?
docker run --name postgres -e POSTGRES_PASSWORD=123 -p 5432:5432 postgres:15
```

---

### Cenário 2: Deploy em Vercel (Next.js)

**Objetivo:** Deploy automático com Vercel (melhor para Next.js)

#### Passo 1: Preparar Repositório
```bash
# Fazer commit do código
git add .
git commit -m "Ready for Vercel deploy"
git push origin main
```

#### Passo 2: Conectar ao Vercel
```bash
# Opção A: Web dashboard (recomendado)
# 1. Ir para https://vercel.com
# 2. Conectar GitHub account
# 3. Importar repositório
# 4. Configurar root path: "apps/web"

# Opção B: CLI
npm install -g vercel
cd apps/web
vercel
```

#### Passo 3: Configurar Variáveis
Na Vercel dashboard → Settings → Environment Variables:

```
DATABASE_URL = "postgresql://prod-user:password@prod-host:5432/enso_prod"
NEXTAUTH_SECRET = "seu_secret_de_produção_aqui" (copiar de `openssl rand -base64 32`)
NEXTAUTH_URL = "https://seu-dominio.vercel.app"
```

#### Passo 4: Deploy
```bash
# Automático: Just push to main branch
git push origin main

# Ou manual:
vercel --prod
```

**URL Result:** `https://seu-projeto.vercel.app`

---

### Cenário 3: Deploy em Railway.app (Full Stack)

**Objetivo:** Deploy com Railway (suporta backend + frontend + banco)

#### Passo 1: Criar Conta
- Ir para https://railway.app
- Connect GitHub

#### Passo 2: Configurar Projeto
```bash
# railway.toml já existe em apps/bot/
# Exemplo:
[build]
builder = "nixpacks"

[start]
cmd = "npm run start --workspace=apps/web"

[env]
DATABASE_URL = "postgresql://..."
NEXTAUTH_SECRET = "..."
NODE_ENV = "production"
```

#### Passo 3: Add PostgreSQL
No Railway dashboard:
- New → PostgreSQL
- Conecta automaticamente ao projeto

#### Passo 4: Deploy
```bash
# Railway CLI (opcional)
npm install -g @railway/cli
railway login
railway up
```

---

### Cenário 4: Deploy em Docker (VPS)

**Objetivo:** Rodar em qualquer VPS com Docker

#### Dockerfile

```dockerfile
# apps/web/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy monorepo
COPY package.json package-lock.json ./
COPY apps/web ./apps/web
COPY apps/bot ./apps/bot
COPY packages/database ./packages/database

# Install deps
RUN npm install --production

# Build
RUN npm run build --workspace=apps/web

# Generate Prisma
RUN npx prisma generate

# Expose port
EXPOSE 3000

# Run
CMD ["npm", "run", "start", "--workspace=apps/web"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: "senha_secura"
      POSTGRES_DB: "enso_prod"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  web:
    build: .
    environment:
      DATABASE_URL: "postgresql://postgres:senha_secura@postgres:5432/enso_prod"
      NEXTAUTH_SECRET: "seu_secret_aqui"
      NEXTAUTH_URL: "https://seu-dominio.com"
      NODE_ENV: "production"
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    restart: always

volumes:
  postgres_data:
```

#### Deploy
```bash
# No servidor
docker-compose up -d

# Verificar
docker-compose ps
docker-compose logs web

# Parar
docker-compose down
```

---

### Cenário 5: Deploy em AWS (EC2)

**Objetivo:** Deploy manual em instância EC2

#### Passo 1: SSH para servidor
```bash
ssh -i seu-key.pem ubuntu@seu-ec2-ip
```

#### Passo 2: Instalar dependências
```bash
# Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Git (se não tiver)
sudo apt-get install -y git
```

#### Passo 3: Clonar e setup
```bash
cd /var/www
git clone seu-repositorio enso
cd enso

npm install
npx prisma migrate deploy
npm run build --workspace=apps/web
```

#### Passo 4: Configurar .env
```bash
sudo nano apps/web/.env.local
# Adicionar:
# DATABASE_URL=postgresql://...
# NEXTAUTH_SECRET=...
# NEXTAUTH_URL=https://seu-dominio.com
```

#### Passo 5: Usar PM2 para gerenciar processo
```bash
npm install -g pm2

pm2 start npm --name "enso-web" -- run start --workspace=apps/web
pm2 save
pm2 startup
```

#### Passo 6: Nginx Reverse Proxy
```bash
sudo apt-get install -y nginx

# Editar config:
sudo nano /etc/nginx/sites-available/default

# Adicionar:
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Restart
sudo systemctl restart nginx
```

#### Passo 7: SSL com Let's Encrypt
```bash
sudo apt-get install -y certbot python3-certbot-nginx

sudo certbot --nginx -d seu-dominio.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

## 📊 Comparação de Plataformas

| Plataforma | Dificuldade | Custo | Auto-Deploy | Melhor Para |
|-----------|------------|-------|-------------|------------|
| **Vercel** | 🟢 Fácil | Grátis-$20/mo | ✅ Git push | Next.js puro |
| **Railway** | 🟡 Médio | ~$5-50/mo | ✅ Git push | Full-stack simples |
| **Docker + VPS** | 🔴 Difícil | ~$5-20/mo | ❌ Manual | Controle total |
| **AWS** | 🔴 Muito difícil | ~$10-100/mo | ❌ Manual | Scale massivo |

---

## 🔍 Monitoramento Pós-Deploy

### Health Check
```bash
# Verificar se aplicação está respondendo
curl https://seu-dominio.com/api/health

# Ou
curl -I https://seu-dominio.com
# Espera: HTTP/2 200
```

### Logs
```bash
# Vercel
vercel logs seu-projeto.vercel.app

# Railway
railway logs

# Docker
docker logs seu-container-id

# AWS EC2 / PM2
pm2 logs enso-web
```

### Banco de Dados
```bash
# Verificar conexão
npx prisma db execute --stdin

# Ver status migrações
npx prisma migrate status

# Backup (importante!)
pg_dump postgresql://user:pass@host/db > backup.sql
```

---

## 🆘 Emergency Rollback

### Se deploy falhar
```bash
# Vercel
vercel rollback

# Docker
docker-compose down
docker-compose up -d --previous-version

# Manual
git revert HEAD
npm run build
npm start
```

---

## 📝 Notas Importantes

1. **NEXTAUTH_SECRET**: Deve ser diferente em cada ambiente
   - Local: Qualquer valor (ex: "dev")
   - Produção: Gerado com `openssl rand -base64 32`

2. **DATABASE_URL**: Nunca commit em git (usar .env.local)
   - Adicionar `.env.local` ao `.gitignore`

3. **Build Process**: Next.js valida types durante build
   - Se falhar, fix TypeScript errors antes de deploy

4. **Node Version**: Manter Node 18+ para compatibilidade

5. **Prisma Migrations**: Rodar `migrate deploy` em produção
   - Nunca commitar `schema.prisma` sem migration

---

## ✅ Deploy Checklist Final

- [ ] DATABASE_URL testada localmente
- [ ] NEXTAUTH_SECRET gerado com openssl
- [ ] NEXTAUTH_URL correto para produção
- [ ] NODE_ENV=production
- [ ] npm run build completa sem erros
- [ ] Migrations executadas: `prisma migrate deploy`
- [ ] Health check respondendo
- [ ] Logs sendo monitorados
- [ ] Backup do banco configurado
- [ ] Rollback plan documentado

---

**📅 Criado:** 2026-06-12  
**🎯 Uso:** Referência rápida para deployment

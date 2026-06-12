# 🔐 Documentação Técnica - Endpoint PATCH /api/admin/utilizadores/[id]

## 📍 Localização
`apps/web/app/api/admin/utilizadores/[id]/route.ts`

---

## 📋 Código Comentado Detalhado

```typescript
// ===== IMPORTS =====
import { NextRequest, NextResponse } from "next/server"
// Next.js types para requisições e respostas HTTP

import { getServerSession } from "next-auth/next"
// Função para obter sessão autenticada do next-auth

import { authOptions } from "@/lib/auth"
// Configuração de autenticação (localizado em apps/web/lib/auth.ts)
// Define providers, callbacks, secret, etc.

import { prisma } from "@enso/database"
// Cliente Prisma compartilhado (importado do workspace @enso/database)
// Fornece acesso tipado ao banco de dados

import bcrypt from "bcryptjs"
// Biblioteca para hash/comparação de senhas com segurança


// ===== CONFIG NEXTJS =====
// ✅ Força Next.js a sempre revalidar esta rota (sem cache estático)
// Necessário porque é uma API dinâmica que modifica dados
export const dynamic = 'force-dynamic'


// ===== HANDLER PRINCIPAL =====
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // PATCH: Método HTTP para atualização parcial
  // req: Objeto da requisição contendo headers, body, cookies
  // params: Parâmetros extraídos da URL (ex: /api/admin/utilizadores/123 → id=123)

  try {
    // ===== 1. VERIFICAR AUTENTICAÇÃO =====
    const session = await getServerSession(authOptions)
    // Obtém a sessão do usuário atual
    // Retorna null se não autenticado, ou objeto com dados do usuário

    if (!session || (session.user as any)?.role !== "SUPERADMIN") {
      // Rejeita se:
      // - Não tem sessão (não autenticado)
      // - Tem sessão mas role não é SUPERADMIN
      return NextResponse.json(
        { error: "Sem permissão" },
        { status: 403 }  // 403 Forbidden
      )
    }
    // ✅ Neste ponto, sabemos que é SUPERADMIN


    // ===== 2. EXTRAIR DADOS DO CORPO =====
    const { password } = await req.json()
    // Parse JSON body para obter a nova senha
    // Exemplo: { "password": "novaSenha123" }


    // ===== 3. VALIDAR ENTRADA =====
    if (!password || password.length < 6) {
      // Rejeita se:
      // - password não foi enviado (undefined/null)
      // - OU tem menos de 6 caracteres
      return NextResponse.json(
        { error: "Password deve ter pelo menos 6 caracteres" },
        { status: 400 }  // 400 Bad Request
      )
    }
    // ✅ Neste ponto, sabemos que password é válida


    // ===== 4. HASHEAR SENHA =====
    const passwordHash = await bcrypt.hash(password, 10)
    // bcrypt.hash(texto, saltRounds)
    // - texto: a senha em texto plano
    // - saltRounds: 10 = bom balanço segurança/performance
    // Resultado: hash seguro, não reversível
    // Exemplo: "$2a$10$..." (algoritmo + salt + hash)


    // ===== 5. ATUALIZAR BANCO DE DADOS =====
    await prisma.user.update({
      where: { id: params.id },
      // Encontra usuário pelo ID da URL
      // Exemplo: /api/.../123 → params.id = "123"

      data: { passwordHash },
      // Atualiza apenas o campo passwordHash (não toca em outros campos)
      // Nota: Armazena hash, nunca a senha em texto plano
    })
    // ✅ Banco de dados atualizado


    // ===== 6. RESPOSTA DE SUCESSO =====
    return NextResponse.json({ success: true })
    // Retorna 200 OK com JSON
    // Status HTTP 200 é default, não precisa especificar
  
  } catch (error) {
    // ===== TRATAMENTO DE ERRO =====
    console.error("PATCH error:", error)
    // Log do erro para debug (pode ser capturado em logs de produção)

    return NextResponse.json(
      { error: "Erro ao atualizar usuário" },
      { status: 500 }  // 500 Internal Server Error
    )
  }
}
```

---

## 🔄 Fluxo de Execução

```
1. Client envia PATCH request
   ├─ URL: /api/admin/utilizadores/[id]
   ├─ Headers: Cookie (next-auth token)
   └─ Body: JSON { password: "..." }
   
2. Next.js roteia para route.ts
   └─ Extrai [id] dos params
   
3. PATCH handler executa
   ├─ getServerSession() verifica autenticação
   ├─ Se não autenticado → retorna 403
   ├─ Se autenticado mas não SUPERADMIN → retorna 403
   ├─ Parse JSON body
   ├─ Se password inválida → retorna 400
   ├─ bcrypt.hash() cria hash da senha
   ├─ prisma.user.update() atualiza banco
   ├─ Se sucesso → retorna 200 + { success: true }
   └─ Se erro → console.error + retorna 500
```

---

## 💾 Banco de Dados

### Tabela Usada: `user`

Campos relevantes (baseado no schema Prisma):
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String    // ← Campo atualizado por este endpoint
  role          String    // ex: "SUPERADMIN", "ADMIN", "USER"
  // ... outros campos
}
```

### Query SQL Gerada (exemplo)
```sql
UPDATE "User" 
SET "passwordHash" = '$2a$10$...'
WHERE "id" = 'user-uuid-123'
RETURNING *;
```

---

## 🔐 Segurança - Análise Detalhada

### ✅ Autenticação
| Aspecto | Status | Detalhes |
|---------|--------|----------|
| Verifica sessão | ✅ | `getServerSession()` obrigatório |
| Valida role | ✅ | Requer `SUPERADMIN` explicitamente |
| Server-side | ✅ | Executado em server (não no client) |

### ✅ Autorização
| Aspecto | Status | Detalhes |
|---------|--------|----------|
| Role-based | ✅ | Apenas SUPERADMIN pode executar |
| Princípio do menor privilégio | ✅ | Não permite outros roles |
| Auditável | ⚠️ | Sem log de quem alterou (ver melhorias) |

### ✅ Criptografia de Senha
| Aspecto | Status | Detalhes |
|---------|--------|----------|
| Algoritmo | ✅ | bcryptjs (padrão seguro) |
| Salt rounds | ✅ | 10 (bom balanço) |
| Nunca texto plano | ✅ | Apenas hash armazenado |
| Validação mínima | ✅ | 6 caracteres (considerado fraco, ver melhorias) |

### ⚠️ Possíveis Melhorias de Segurança

1. **Rate limiting** - Impedir brute force
   ```typescript
   // Adicionar middleware que limita requisições por IP
   ```

2. **Validação de senha mais forte**
   ```typescript
   // Exigir: maiúsculas, números, caracteres especiais
   const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   ```

3. **Auditoria de mudanças**
   ```typescript
   // Log: quem alterou a senha de quem, quando
   await prisma.auditLog.create({
     data: {
       action: "PASSWORD_CHANGE",
       targetUserId: params.id,
       adminUserId: session.user.id,
       timestamp: new Date()
     }
   })
   ```

4. **Confirmação por email**
   ```typescript
   // Enviar email notificando mudança de senha
   // Permitir que usuário reverta em X horas
   ```

5. **Restrição por IP/2FA**
   ```typescript
   // Verificar IP da requisição
   // Requerer segundo fator de autenticação
   ```

---

## 📊 Exemplos de Uso

### Teste com cURL

```bash
# 1. Obter token (fazer login primeiro)
curl -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "admin123"}' \
  -c cookies.txt

# 2. Atualizar senha
curl -X PATCH http://localhost:3000/api/admin/utilizadores/user-uuid-123 \
  -H "Content-Type: application/json" \
  -H "Cookie: $(cat cookies.txt)" \
  -d '{"password": "novaSenhaSegura123"}' \
  -v
```

### Teste com JavaScript/Fetch

```javascript
// 1. Atualizar senha de um usuário
async function updateUserPassword(userId, newPassword) {
  const response = await fetch(
    `/api/admin/utilizadores/${userId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: newPassword })
      // Cookie enviado automaticamente pelo browser
    }
  )
  
  const data = await response.json()
  
  if (response.ok) {
    console.log("✅ Senha atualizada!")
  } else if (response.status === 403) {
    console.error("❌ Sem permissão (não é SUPERADMIN)")
  } else if (response.status === 400) {
    console.error("❌ Validação falhou:", data.error)
  } else {
    console.error("❌ Erro servidor:", data.error)
  }
  
  return data
}

// Uso:
updateUserPassword("user-123", "novaSenha123")
```

### Teste com Insomnia/Postman

```
Method: PATCH
URL: http://localhost:3000/api/admin/utilizadores/user-123

Headers:
  Content-Type: application/json
  Cookie: next-auth.session-token=sua_sessao_aqui

Body (JSON):
{
  "password": "novaSenhaForte123!"
}

Response (200 OK):
{
  "success": true
}
```

---

## 🚨 Possíveis Erros & Soluções

| Erro | HTTP | Causa | Solução |
|------|------|-------|---------|
| "Sem permissão" | 403 | Não autenticado ou não SUPERADMIN | Fazer login com admin, verificar role |
| "Password deve ter..." | 400 | Senha < 6 chars ou vazia | Enviar senha com 6+ caracteres |
| "Erro ao atualizar..." | 500 | Prisma error, user não existe, etc | Verificar logs, user ID válido |
| Network timeout | - | Servidor lento/indisponível | Verificar se Next.js está rodando |
| 401 Unauthorized | 401 | Cookie expirado | Fazer login novamente |

---

## 📦 Dependências Necessárias

```json
{
  "bcryptjs": "^2.4.3",           // Hash de senhas
  "@prisma/client": "^5.22.0",    // Database ORM
  "next-auth": "^5.x.x",          // Autenticação
  "next": "14.2.35",              // Framework web
  "@enso/database": "*"           // Client Prisma compartilhado
}
```

Se alguma estiver faltando:
```bash
npm install bcryptjs @prisma/client next-auth next
```

---

## 🔗 Arquivos Relacionados

| Arquivo | Propósito |
|---------|-----------|
| `apps/web/lib/auth.ts` | Configuração de autenticação |
| `packages/database/prisma/schema.prisma` | Schema do banco |
| `apps/web/middleware.ts` | Middleware de rotas |
| `apps/web/app/api/auth/[...nextauth]/` | Endpoints de auth |

---

## 📚 Referências

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma Client](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

**✍️ Documentado em:** 2026-06-12  
**🎯 Objetivo:** Facilitar deploy e compreensão de IA

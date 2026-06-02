# Melhorias para o Deploy

## Segurança
- [ ] Implementar `middleware.ts` no Next.js para proteger rotas admin de forma centralizada (actualmente feito no layout)
- [ ] Gerar `NEXTAUTH_SECRET` seguro em produção (actualmente usa valor fixo)
- [ ] Variáveis de ambiente seguras no servidor de produção

## Performance
- [ ] Activar cache no Prisma para queries frequentes
- [ ] Optimizar imagens com `next/image`

## Bot WhatsApp
- [ ] Usar número dedicado (WhatsApp Business) em produção
- [ ] Monitorizar sessão do Baileys — reconectar automaticamente se cair

## Email
- [ ] Verificar domínio próprio no Resend (actualmente usa `onboarding@resend.dev`)
- [ ] Templates de email mais elaborados com logo e design da ENSO

## Deploy
- [ ] Backend → Railway ou Render
- [ ] Frontend → Vercel
- [ ] Redis → Railway ou Upstash
- [ ] Configurar domínio próprio
- [ ] SSL/HTTPS automático
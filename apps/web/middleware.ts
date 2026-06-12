export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export function middleware() {
  // Middleware vazio força todas as rotas a serem dinâmicas
  return
}
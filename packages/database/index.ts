import { PrismaClient } from "./generated/prisma/index.js"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient() {
  return new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  })
}

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? getPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

export * from "./generated/prisma/index.js"
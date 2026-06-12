import { PrismaClient } from "./generated/prisma/index.js"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient() {
  return new (PrismaClient as any)({
    datasourceUrl: process.env.DATABASE_URL,
  }) as PrismaClient
}

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? getPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

export * from "./generated/prisma/index.js"
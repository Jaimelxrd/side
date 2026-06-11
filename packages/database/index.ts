import { config } from "dotenv"
import { resolve } from "path"

config({ path: resolve(__dirname, "../../apps/bot/.env") })

import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./generated/prisma/index.js"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient() {
  const connectionString = process.env.DATABASE_URL ?? ""
  console.log("CONNECTION STRING:", connectionString)
  const adapter = new PrismaPg({ connectionString })
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? getPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

export * from "./generated/prisma/index.js"

import { Queue, Worker, QueueEvents } from "bullmq"
import IORedis from "ioredis"

console.log("REDIS_URL: redis://default:JAiQAOYxrlxnsfHsqthqAuKFdcAdltQC@yamanote.proxy.rlwy.net:53545", process.env.REDIS_URL)

export const connection = new IORedis(
  process.env.REDIS_URL || "redis://localhost:6379",
  { maxRetriesPerRequest: null }
)

// Queues
export const reminderQueue = new Queue("reminders", { connection })
export const followUpQueue = new Queue("followups", { connection })

console.log("✅ Queues BullMQ inicializadas")

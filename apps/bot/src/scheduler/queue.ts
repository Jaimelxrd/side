import { Queue, Worker, QueueEvents } from "bullmq"
import IORedis from "ioredis"

export const connection = new IORedis({
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  maxRetriesPerRequest: null,
})

// Queues
export const reminderQueue = new Queue("reminders", { connection })
export const followUpQueue = new Queue("followups", { connection })

console.log("✅ Queues BullMQ inicializadas")
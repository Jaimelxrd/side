import { Queue } from "bullmq"
import IORedis from "ioredis"

const REDIS_URL = process.env.REDIS_URL ?? "redis://default:JAiQAOYxrlxnsfHsqthqAuKFdcAdltQC@yamanote.proxy.rlwy.net:53545"

console.log("Connecting to Redis:", REDIS_URL)

export const connection = new IORedis(REDIS_URL, { maxRetriesPerRequest: null })

export const reminderQueue = new Queue("reminders", { connection })
export const followUpQueue = new Queue("followups", { connection })

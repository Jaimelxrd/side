Set-Content -Path "C:\Users\administerator\Desktop\Nova Pasta\side\apps\bot\src\scheduler\queue.ts" -Value @"
import { Queue } from "bullmq"
import IORedis from "ioredis"

const connection = new IORedis({
  host: "yamanote.proxy.rlwy.net",
  port: 53545,
  username: "default",
  password: "JAiQAOYxrlxnsfHsqthqAuKFdcAdltQC",
  maxRetriesPerRequest: null,
})

console.log("Connecting to Redis: yamanote.proxy.rlwy.net:53545")

export { connection }
export const reminderQueue = new Queue("reminders", { connection })
export const followUpQueue = new Queue("followups", { connection })
"@

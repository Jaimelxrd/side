import fs from "fs"
import path from "path"

const src = path.resolve("../../packages/database/generated/prisma")
const dest = path.resolve("./packages/database/generated/prisma")

fs.mkdirSync(dest, { recursive: true })

for (const file of fs.readdirSync(src)) {
  if (file.endsWith(".so.node") || file === "schema.prisma") {
    fs.copyFileSync(path.join(src, file), path.join(dest, file))
    console.log("copied", file)
  }
}
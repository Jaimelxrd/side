import { prisma } from "./index"
import bcrypt from "bcryptjs"

async function main() {
  // Cria a organização
  const org = await prisma.organization.upsert({
    where: { slug: "enso" },
    update: {},
    create: {
      name: "ENSO",
      slug: "enso",
    },
  })

  console.log("✅ Organização criada:", org.name)

  // Cria o super admin
  const passwordHash = await bcrypt.hash("admin123", 10)

  const user = await prisma.user.upsert({
    where: { email: "admin@enso.app" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@enso.app",
      passwordHash,
      role: "SUPERADMIN",
      organizationId: org.id,
    },
  })

  console.log("✅ Super Admin criado:", user.email)
  console.log("📧 Email: admin@enso.app")
  console.log("🔑 Password: admin123")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
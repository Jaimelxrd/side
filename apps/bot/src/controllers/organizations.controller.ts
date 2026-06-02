import { Request, Response } from "express"
import { prisma } from "@enso/database"

export const createOrganization = async (req: Request, res: Response) => {
  try {
    const { name, slug } = req.body

    const organization = await prisma.organization.create({
      data: { name, slug },
    })

    res.status(201).json(organization)
  } catch (error) {
    console.error("Erro ao criar organização:", error)
    res.status(500).json({ error: "Erro ao criar organização" })
  }
}

export const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await prisma.organization.findMany()
    res.json(organizations)
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar organizações" })
  }
}

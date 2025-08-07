import { PrismaClient } from '@prisma/client'

export async function seedCategoryProducts(prisma: PrismaClient) {
  await prisma.producto.createMany({
    data: [
      { nombre: "Manzana", descripcion: "Manzana chilena importada", precio: 1.00, categoria: "frutas" },
      { nombre: "Pera", descripcion: "Pera de ambato", precio: 1.00, categoria: "frutas" },
      { nombre: "Brocoli", descripcion: "Brocoli", precio: 0.50, categoria: "verduras" },
      { nombre: "Nuez", descripcion: "Libra de nueces", precio: 5.50, categoria: "frutos secos" },
    ],
    skipDuplicates: true,
  })
}
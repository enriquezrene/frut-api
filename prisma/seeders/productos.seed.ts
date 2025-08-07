import { PrismaClient } from '@prisma/client'

export async function seedCategoryProducts(prisma: PrismaClient) {
  await prisma.producto.createMany({
    data: [
      { nombre: "Manzana", descripcion: "Manzana chilena importada", precio: 1.00, categoria: "frutas", imagenUrl: "https://enriquezrene.github.io/frut-api/images/manzana.webp" },
      { nombre: "Pera", descripcion: "Pera de ambato", precio: 1.00, categoria: "frutas", imagenUrl: "https://enriquezrene.github.io/frut-api/images/pera.jpg" },
      { nombre: "Brocoli", descripcion: "Brocoli", precio: 0.50, categoria: "verduras", imagenUrl: "https://enriquezrene.github.io/frut-api/images/brocolo.jpg" },
      { nombre: "Nuez", descripcion: "Libra de nueces", precio: 5.50, categoria: "frutos secos", imagenUrl: "https://enriquezrene.github.io/frut-api/images/nuexz.webp" },
    ],
    skipDuplicates: true,
  })
}
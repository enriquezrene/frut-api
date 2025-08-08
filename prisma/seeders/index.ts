import { PrismaClient } from '@prisma/client'
import { seedCategoryProducts } from './001-productos.seed';

export async function runSeeders() {
  const prisma = new PrismaClient();
  await seedCategoryProducts(prisma);
  await prisma.$disconnect();
  console.log('All seeders completed!');
}
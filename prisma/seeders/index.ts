import { PrismaClient } from '@prisma/client'
import { seedProductos } from './001-productos.seed';
import { seedCajas } from './002-cajas.seed';
import { seedCajaProductos } from './003-cajas-productos.seed';

export async function runSeeders() {
  const prisma = new PrismaClient();
  await seedProductos(prisma);
  await seedCajas(prisma);
  await seedCajaProductos(prisma);
  await prisma.$disconnect();
  console.log('All seeders completed!');
}
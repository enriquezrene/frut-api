-- CreateTable
CREATE TABLE "public"."Caja" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagenUrl" TEXT,
    "descripcion" TEXT,
    "precio" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Caja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CajaProducto" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cajaId" INTEGER,
    "productoId" INTEGER,
    "precio" DECIMAL(65,30) NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,
    "unidad" TEXT NOT NULL,

    CONSTRAINT "CajaProducto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."CajaProducto" ADD CONSTRAINT "CajaProducto_cajaId_fkey" FOREIGN KEY ("cajaId") REFERENCES "public"."Caja"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CajaProducto" ADD CONSTRAINT "CajaProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "public"."Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

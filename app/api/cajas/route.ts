import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle OPTIONS (CORS preflight)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const itemsPerPage = parseInt(url.searchParams.get("items") || "20");
  const offset = (page - 1) * itemsPerPage;

  const items = await prisma.caja.findMany({
    skip: offset,
    take: itemsPerPage,
    include: {
      cajaProductos: {
        include: {
          producto: {
            select: {
              nombre: true,
              precio: true,
            },
          },
        },
      },
    },
    orderBy: { id: "asc" },
  });

  const totalItems = await prisma.producto.count();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return NextResponse.json({ items, totalPages },
    { headers: corsHeaders });
}
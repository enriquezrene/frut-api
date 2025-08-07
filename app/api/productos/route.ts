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
  const itemsPerPage = 20;
  const offset = (page - 1) * itemsPerPage;

  const items = await prisma.producto.findMany({
    skip: offset,
    take: itemsPerPage,
    orderBy: { nombre: "asc" },
  });

  const totalItems = await prisma.producto.count();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return NextResponse.json({ items, totalPages },
    { headers: corsHeaders });
}


export async function PUT(request: Request) {
  console.log("PUT request received");
  /*const page = parseInt(url.searchParams.get("page") || "1");
  const postsPerPage = 5;
  const offset = (page - 1) * postsPerPage;

  // Fetch paginated posts
  const posts = await prisma.post.findMany({
    skip: offset,
    take: postsPerPage,
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } },
  });

  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil(totalPosts / postsPerPage);*/

  return NextResponse.json({
    products: [
      { id: 1, name: "Product 1", description: "Description for product 1" },
      { id: 2, name: "Product 2", description: "Description for product 2" },
      { id: 3, name: "Product 3", description: "Description for product 3" }
    ], totalCount: 1 });
}

export async function POST(request: Request) {
  console.log("POST request received");
  /*const page = parseInt(url.searchParams.get("page") || "1");
  const postsPerPage = 5;
  const offset = (page - 1) * postsPerPage;

  // Fetch paginated posts
  const posts = await prisma.post.findMany({
    skip: offset,
    take: postsPerPage,
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } },
  });

  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil(totalPosts / postsPerPage);*/

  return NextResponse.json({
    products: [
      { id: 1, name: "Product 1", description: "Description for product 1" },
      { id: 2, name: "Product 2", description: "Description for product 2" },
      { id: 3, name: "Product 3", description: "Description for product 3" }
    ], totalCount: 1 });
}

export async function DELETE(request: Request) {
  console.log("DELETE request received");
  /*const page = parseInt(url.searchParams.get("page") || "1");
  const postsPerPage = 5;
  const offset = (page - 1) * postsPerPage;

  // Fetch paginated posts
  const posts = await prisma.post.findMany({
    skip: offset,
    take: postsPerPage,
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } },
  });

  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil(totalPosts / postsPerPage);*/

  return NextResponse.json({
    products: [
      { id: 1, name: "Product 1", description: "Description for product 1" },
      { id: 2, name: "Product 2", description: "Description for product 2" },
      { id: 3, name: "Product 3", description: "Description for product 3" }
    ], totalCount: 1 });
}
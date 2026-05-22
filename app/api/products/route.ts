

/*import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - listar produtos
export async function GET() {
    const products = await prisma.product.findMany();

    return NextResponse.json(products);
}

// POST - criar produto
export async function POST(request: Request) {
    const body = await request.json();

    const newProduct = await prisma.product.create({
        data: {
            title: body.title,
            description: body.description,
            category: body.category,
        },
    });

    return NextResponse.json(newProduct);
}*/
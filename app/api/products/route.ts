export const runtime = "nodejs";

import { NextResponse } from "next/server";

const products = [
    {
        id: 1,
        title: "Notebook Dell",
        description: "Notebook usado em ótimo estado.",
        category: "Tecnologia",
    },
    {
        id: 2,
        title: "Mesa Gamer",
        description: "Mesa compacta para escritório.",
        category: "Móveis",
    },
];

export async function GET() {
    return NextResponse.json(products);
}
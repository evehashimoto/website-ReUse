import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// DELETE produto por ID
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        // Next.js 16 exige await aqui
        const { id } = await params

        const productId = Number(id)

        console.log("ID recebido:", productId)

        await prisma.product.delete({
            where: {
                id: productId
            }
        })

        return NextResponse.json({
            message: "Produto deletado com sucesso"
        })

    } catch (error: any) {

        console.error("ERRO AO DELETAR:")
        console.error(error)

        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}
import { prisma } from "@/lib/prisma";

export default async function ProdutoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const produto = await prisma.product.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!produto) {
        return <p>Produto não encontrado</p>;
    }

    return (
        <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
            <h1>{produto.title}</h1>

            <p>
                <strong>Categoria:</strong> {produto.category}
            </p>

            <p>
                <strong>Descrição:</strong> {produto.description}
            </p>
        </main>
    );
}
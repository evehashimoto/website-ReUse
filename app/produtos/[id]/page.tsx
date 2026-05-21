export default function Home() {
    return (
        <main style={{ padding: "40px", fontFamily: "Arial" }}>
            <h1>ReUse</h1>

            <p>
                Plataforma colaborativa para troca de produtos e incentivo ao consumo consciente.
            </p>

            <h2>Funcionalidades</h2>

            <ul>
                <li>Cadastro de produtos</li>
                <li>Integração com chatbot</li>
                <li>Automação com Watson Assistant</li>
                <li>Integração com Supabase</li>
            </ul>
        </main>
    );
}

/*export const dynamic = "force-dynamic";

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
}*/
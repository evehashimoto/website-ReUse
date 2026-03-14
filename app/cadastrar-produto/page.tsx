import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function criarProduto(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;

    await prisma.product.create({
        data: {
            title,
            description,
            category,
            ownerId: 1, 
        },
    });

    redirect("/");
}

export default function CadastrarProduto() {
    return (
        <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
            <h1>Cadastrar produto</h1>

            <form action={criarProduto}>
                <div>
                    <label>Título</label>
                    <input type="text" name="title" required />
                </div>

                <div>
                    <label>Descrição</label>
                    <textarea name="description" required />
                </div>

                <div>
                    <label>Categoria</label>
                    <input type="text" name="category" required />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </main>
    );
}
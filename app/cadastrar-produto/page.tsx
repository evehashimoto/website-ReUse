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
        },
    });

    redirect("/");
}

export default function CadastrarProduto() {
    return (
        <main
            style={{
                minHeight: "100vh",
                backgroundColor: "#f4f4f4",
                padding: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "16px",
                    width: "100%",
                    maxWidth: "600px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <h1
                    style={{
                        marginBottom: "24px",
                        color: "#15803d",
                        textAlign: "center",
                    }}
                >
                    Anunciar Produto ♻️
                </h1>

                <form
                    action={criarProduto}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <div>
                        <label
                            htmlFor="title"
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "bold",
                                color: "#222",
                            }}
                        >
                            Título do Produto
                        </label>

                        <input
                            id="title"
                            type="text"
                            name="title"
                            required
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "bold",
                                color: "#222",
                            }}
                        >
                            Descrição
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            required
                            rows={5}
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="category"
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "bold",
                                color: "#222",
                            }}
                        >
                            Categoria
                        </label>

                        <input
                            id="category"
                            type="text"
                            name="category"
                            required
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#15803d",
                            color: "white",
                            border: "none",
                            padding: "14px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >
                        Publicar Produto
                    </button>
                </form>
            </div>
        </main>
    );
}
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
                    maxWidth: "700px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <a
                    href="/"
                    style={{
                        color: "#15803d",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    ← Voltar para Home
                </a>

                <h1
                    style={{
                        marginTop: "30px",
                        marginBottom: "12px",
                        color: "#15803d",
                        textAlign: "center",
                        fontSize: "28px",
                        fontWeight: "",
                    }}
                >
                    Anunciar Produto
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#555",
                        marginBottom: "30px",
                        fontSize: "20px",
                    }}
                >
                    Compartilhe, reutilize!
                </p>

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
                            htmlFor="price"
                            style={{
                                color: "#222",
                                fontWeight: "bold",
                            }}
                        >
                            Título do Produto:
                        </label>

                        <input
                            id="title"
                            type="text"
                            name="title"
                            required
                            placeholder="Por exemplo: Notebook Dell Inspiron"
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginTop: "8px",
                                color: "#222",
                                backgroundColor: "#fff",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            style={{
                                color: "#222",
                                fontWeight: "bold",
                            }}
                        >
                            Categoria:
                        </label>

                        <input
                            id="category"
                            type="text"
                            name="category"
                            required
                            placeholder="Tecnologia"
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginTop: "8px",
                                color: "#222",
                                backgroundColor: "#fff",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            style={{
                                color: "#222",
                                fontWeight: "bold",
                            }}
                        >
                            Preço:
                        </label>

                        <input
                            id="price"
                            type="text"
                            placeholder="R$ 0,00"
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginTop: "8px",
                                color: "#222",
                                backgroundColor: "#fff",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            style={{
                                color: "#222",
                                fontWeight: "bold",
                            }}
                        >
                            Localização:
                        </label>

                        <input
                            id="location"
                            type="text"
                            placeholder="São Paulo - SP"
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginTop: "8px",
                                color: "#222",
                                backgroundColor: "#fff",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            style={{
                                color: "#222",
                                fontWeight: "bold",
                            }}
                        >
                            Imagem do Produto:
                        </label>

                        <input
                            id="image"
                            type="file"
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginTop: "8px",
                                color: "#222",
                                backgroundColor: "#fff",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            style={{
                                color: "#222",
                                fontWeight: "bold",
                            }}
                        >
                            Descrição:
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            required
                            rows={6}
                            placeholder="Descreva o estado do produto, tempo de uso e demais informações relevantes."
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                marginTop: "8px",
                                color: "#222",
                                backgroundColor: "#fff",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#15803d",
                            color: "white",
                            border: "none",
                            padding: "16px",
                            borderRadius: "10px",
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
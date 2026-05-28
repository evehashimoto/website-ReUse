import Header from "../../components/Header";

const products = [
    {
        id: 1,
        title: "Notebook Dell",
        description:
            "Notebook usado em ótimo estado, ideal para estudos e trabalho.",
        category: "Tecnologia",
        price: "R$ 2.300",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
        id: 2,
        title: "Mesa Gamer",
        description:
            "Mesa gamer moderna com ótimo espaço para setup completo.",
        category: "Móveis",
        price: "R$ 450",
        image:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    },
    {
        id: 3,
        title: "Violão",
        description:
            "Violão acústico seminovo com excelente qualidade sonora.",
        category: "Instrumentos",
        price: "R$ 700",
        image:
            "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    },
];

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>Produto não encontrado</h1>;
    }

    return (
        <>
            <Header />

            <main
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f4f4f4",
                    padding: "40px",
                    fontFamily: "Arial",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "24px",
                        padding: "40px",
                        display: "flex",
                        gap: "40px",
                        alignItems: "center",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                    }}
                >
                    {/* IMAGEM */}
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: "500px",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "20px",
                        }}
                    />

                    {/* INFO */}
                    <div>
                        <small
                            style={{
                                backgroundColor: "#dcfce7",
                                color: "#166534",
                                padding: "8px 14px",
                                borderRadius: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            {product.category}
                        </small>

                        <h1
                            style={{
                                fontSize: "48px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                color: "#111827",
                            }}
                        >
                            {product.title}
                        </h1>

                        <p
                            style={{
                                fontSize: "18px",
                                color: "#4b5563",
                                marginBottom: "30px",
                                maxWidth: "500px",
                            }}
                        >
                            {product.description}
                        </p>

                        <h2
                            style={{
                                color: "#15803d",
                                fontSize: "40px",
                                marginBottom: "30px",
                            }}
                        >
                            {product.price}
                        </h2>

                        <button
                            style={{
                                backgroundColor: "#15803d",
                                color: "white",
                                border: "none",
                                padding: "16px 28px",
                                borderRadius: "12px",
                                fontWeight: "bold",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            Tenho interesse
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
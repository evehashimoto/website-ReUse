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

            <div
                style={{
                    padding: "20px 40px 0 40px",
                    backgroundColor: "#f4f4f4",
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
                    ← Voltar para produtos
                </a>
            </div>

            <main
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f4f4f4",
                    padding: "40px",
                    fontFamily: "Arial",
                }}
            >
                {/* CARD PRINCIPAL */}
                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "24px",
                        padding: "40px",
                        display: "flex",
                        gap: "40px",
                        alignItems: "flex-start",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                    }}
                >
                    {/* IMAGEM */}
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: "450px",
                            height: "320px",
                            objectFit: "cover",
                            borderRadius: "20px",
                        }}
                    />

                    {/* INFORMAÇÕES */}
                    <div
                        style={{
                            display: "flex",
                            gap: "30px",
                            flex: 1,
                            alignItems: "flex-start",
                        }}
                    >
                        {/* COLUNA ESQUERDA */}
                        <div
                            style={{
                                flex: 1,
                            }}
                        >
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
                                    marginBottom: "24px",
                                    maxWidth: "500px",
                                }}
                            >
                                {product.description}
                            </p>

                            <h2
                                style={{
                                    color: "#15803d",
                                    fontSize: "40px",
                                    marginBottom: "20px",
                                }}
                            >
                                {product.price}
                            </h2>

                            <div
                                style={{
                                    marginBottom: "25px",
                                    color: "#4b5563",
                                    lineHeight: "1.8",
                                }}
                            >
                                <strong>Vendedor:</strong> Amanda Santos
                                <br />
                                <strong>Localização:</strong> São Paulo - SP
                            </div>

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
                                Entrar em contato
                            </button>
                        </div>

                        {/* COLUNA DIREITA */}
                        <div
                            style={{
                                minWidth: "280px",
                                backgroundColor: "#f9fafb",
                                padding: "24px",
                                borderRadius: "16px",
                                border: "1px solid #e5e7eb",
                                color: "#4b5563",
                                lineHeight: "2",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            }}
                        >
                            <h3
                                style={{
                                    color: "#111827",
                                    marginBottom: "16px",
                                    fontSize: "22px",
                                }}
                            >
                                Detalhes do produto
                            </h3>

                            <p><strong>Marca:</strong> Dell</p>
                            <p><strong>Modelo:</strong> Inspiron 15</p>
                            <p><strong>Cor:</strong> Prata</p>
                            <p><strong>Tempo de uso:</strong> 2 anos</p>
                            <p><strong>Estado:</strong> Muito bom</p>
                            <p><strong>Bateria:</strong> 5 horas</p>
                            <p><strong>Acompanha:</strong> Carregador original</p>
                        </div>
                    </div>
                </div>

                {/* SOBRE O PRODUTO */}
                <section
                    style={{
                        backgroundColor: "white",
                        marginTop: "30px",
                        padding: "30px",
                        borderRadius: "24px",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "36px",
                            color: "#111827",
                            marginBottom: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        Sobre este produto
                    </h2>

                    <div
                        style={{
                            color: "#4b5563",
                            lineHeight: "1.9",
                        }}
                    >
                        <p>
                            Notebook usado em ótimo estado de conservação,
                            ideal para estudos, trabalho remoto e atividades
                            do dia a dia.
                        </p>

                        <p>
                            O aparelho está funcionando normalmente,
                            sem defeitos estruturais e com bateria em bom
                            desempenho para uso cotidiano.
                        </p>

                        <p>
                            Acompanha carregador original e foi mantido
                            com todos os cuidados necessários durante
                            seu período de utilização.
                        </p>

                        <p>
                            Excelente opção para quem busca economia,
                            sustentabilidade e um equipamento confiável.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
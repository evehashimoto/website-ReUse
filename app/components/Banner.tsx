export default function Banner() {
    return (
        <section
            style={{
                background: "linear-gradient(to right, #dcfce7, #bbf7d0)",
                padding: "80px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "24px",
                marginBottom: "50px",
                gap: "40px",
            }}
        >
            {/* TEXTO */}
            <div style={{ flex: 1 }}>
                <h1
                    style={{
                        fontSize: "clamp(36px, 6vw, 52px)",
                        color: "#166534",
                        marginBottom: "20px",
                        lineHeight: "1.1",
                    }}
                >
                    ReUse ♻️
                    <br />
                    Consumo consciente para todos
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#374151",
                        marginBottom: "30px",
                        maxWidth: "600px",
                        lineHeight: "1.6",
                    }}
                >
                    Uma plataforma colaborativa para compra, venda e reutilização de
                    produtos usados, incentivando a sustentabilidade e reduzindo o
                    descarte desnecessário de itens.
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="#produtos"
                        style={{
                            backgroundColor: "#15803d",
                            color: "white",
                            textDecoration: "none",
                            padding: "16px 28px",
                            borderRadius: "12px",
                            fontWeight: "bold",
                        }}
                    >
                        Explorar Produtos
                    </a>

                    <a
                        href="/cadastrar-produto"
                        style={{
                            backgroundColor: "white",
                            color: "#15803d",
                            textDecoration: "none",
                            padding: "16px 28px",
                            borderRadius: "12px",
                            fontWeight: "bold",
                            border: "2px solid #15803d",
                        }}
                    >
                        Anunciar Produto
                    </a>
                </div>
            </div>

            {/* ILUSTRAÇÃO */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "280px",
                        height: "280px",
                        borderRadius: "20px",
                        border: "3px dashed #15803d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#166534",
                        fontWeight: "bold",
                        backgroundColor: "rgba(255,255,255,0.5)",
                    }}
                >
                    Ilustração ReUse
                </div>
            </div>
        </section>
    );
}
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
                        fontSize: "52px",
                        color: "#166534",
                        marginBottom: "20px",
                        lineHeight: "1.1",
                    }}
                >
                    Dê uma nova vida aos seus produtos ♻️
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#374151",
                        marginBottom: "30px",
                        maxWidth: "600px",
                    }}
                >
                    Compre, venda e reutilize produtos de forma sustentável.
                    Faça parte de uma comunidade que acredita no consumo consciente.
                </p>

                <button
                    style={{
                        backgroundColor: "#15803d",
                        color: "white",
                        border: "none",
                        padding: "16px 28px",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Explorar produtos
                </button>
            </div>

            {/* ILUSTRAÇÃO */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "140px",
                }}
            >
                ♻️
            </div>
        </section>
    );
}
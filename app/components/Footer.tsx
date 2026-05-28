export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#166534",
                color: "white",
                padding: "50px 40px",
                marginTop: "60px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "30px",
                }}
            >
                {/* LOGO */}
                <div>
                    <h2 style={{ marginBottom: "10px" }}>
                        ReUse ♻️
                    </h2>

                    <p style={{ maxWidth: "300px", color: "#d1fae5" }}>
                        Plataforma colaborativa voltada ao consumo consciente
                        e reutilização sustentável de produtos.
                    </p>
                </div>

                {/* LINKS */}
                <div>
                    <h3 style={{ marginBottom: "12px" }}>
                        Navegação
                    </h3>

                    <p>Home</p>
                    <p>Produtos</p>
                    <p>Categorias</p>
                    <p>Contato</p>
                </div>

                {/* CONTATO */}
                <div>
                    <h3 style={{ marginBottom: "12px" }}>
                        Contato
                    </h3>

                    <p>reuse@email.com</p>
                    <p>(11) 99999-9999</p>
                    <p>São Paulo - SP</p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div
                style={{
                    marginTop: "40px",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    paddingTop: "20px",
                    textAlign: "center",
                    color: "#d1fae5",
                }}
            >
                © 2026 ReUse — Todos os direitos reservados.
            </div>
        </footer>
    );
}
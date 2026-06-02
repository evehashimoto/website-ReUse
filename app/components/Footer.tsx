export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#166534",
                color: "white",
                padding: "60px 40px",
                marginTop: "60px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "40px",
                }}
            >
                {/* SOBRE */}
                <div style={{ maxWidth: "350px" }}>
                    <h2
                        style={{
                            marginBottom: "12px",
                        }}
                    >
                        ReUse!
                    </h2>

                    <p
                        style={{
                            color: "#d1fae5",
                            lineHeight: "1.8",
                        }}
                    >
                        Plataforma colaborativa para compra, venda e reutilização
                        de produtos, incentivando o consumo consciente e a
                        sustentabilidade urbana.
                    </p>
                </div>

                {/* LINKS */}
                <div>
                    <h3
                        style={{
                            marginBottom: "16px",
                        }}
                    >
                        Navegação
                    </h3>

                    <p>Home</p>
                    <p>Favoritos</p>
                    <p>Anunciar Produto</p>
                    <p>Sustentabilidade</p>
                </div>

                {/* CONTATO */}
                <div>
                    <h3
                        style={{
                            marginBottom: "16px",
                        }}
                    >
                        Contato
                    </h3>

                    <p>contato@reuse.com.br</p>
                    <p>São Paulo - SP</p>
                    <p>Projeto Acadêmico FIAP</p>
                </div>
            </div>

            <div
                style={{
                    marginTop: "40px",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    paddingTop: "20px",
                    textAlign: "center",
                    color: "#d1fae5",
                    lineHeight: "1.8",
                }}
            >
                © 2026 ReUse — Todos os direitos reservados.
                <br />
                Promovendo a reutilização de produtos e o consumo consciente.
                <br />
                Evelin Júlia Hashimoto e Rebecca Martins
                <br />
                FIAP - Web Design - 2WTDOR
            </div>
        </footer>
    );
}
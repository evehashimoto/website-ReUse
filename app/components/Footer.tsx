"use client";


import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            style={{
                background:
                    "linear-gradient(135deg, #14532d, #166534)",
                color: "white",
                marginTop: "80px",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "70px 40px 50px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "50px",
                    }}
                >
                    {/* SOBRE */}
                    <div>
                        <img
                            src="/logo-reuse-white.png"
                            alt="ReUse"
                            style={{
                                width: "300px",
                                height: "auto",
                                marginBottom: "0px",
                            }}
                        />

                    </div>

                    {/* NAVEGAÇÃO */}
                    <div>
                        <h3
                            style={{
                                fontSize: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            Navegação
                        </h3>

                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                            }}
                        >
                            {[
                                "Home",
                                "Favoritos",
                                "Anunciar Produto",
                                "Sustentabilidade",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        style={{
                                            color: "#d1fae5",
                                            textDecoration: "none",
                                            transition: "0.3s",
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTATO */}
                    <div>
                        <h3
                            style={{
                                fontSize: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            Contato
                        </h3>

                        <p style={{ color: "#d1fae5" }}>
                            contato@reuse.com.br
                        </p>

                        <p style={{ color: "#d1fae5" }}>
                            São Paulo - SP
                        </p>

                        <p style={{ color: "#d1fae5" }}>
                            Projeto Acadêmico FIAP
                        </p>
                    </div>

                    {/* REDES */}
                    <div>
                        <h3
                            style={{
                                fontSize: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            Redes Sociais
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                gap: "14px",
                            }}
                        >
                            {[
                                {
                                    icon: <FaInstagram size={22} />,
                                    label: "Instagram",
                                },
                                {
                                    icon: <FaLinkedin size={22} />,
                                    label: "LinkedIn",
                                },
                                {
                                    icon: <FaGithub size={22} />,
                                    label: "GitHub",
                                },
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    aria-label={item.label}
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "50%",
                                        border: "none",
                                        backgroundColor:
                                            "rgba(255,255,255,0.12)",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        outline: "none",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#22c55e";
                                        e.currentTarget.style.transform =
                                            "translateY(-3px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255,255,255,0.12)";
                                        e.currentTarget.style.transform =
                                            "translateY(0)";
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#22c55e";
                                        e.currentTarget.style.boxShadow =
                                            "0 0 0 4px rgba(255,255,255,0.35)";
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255,255,255,0.12)";
                                        e.currentTarget.style.boxShadow =
                                            "none";
                                    }}
                                >
                                    {item.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* LINHA INFERIOR */}
                <div
                    style={{
                        marginTop: "60px",
                        borderTop:
                            "1px solid rgba(255,255,255,0.15)",
                        paddingTop: "30px",
                        textAlign: "center",
                    }}
                >
                    <p
                        style={{
                            color: "#d1fae5",
                            lineHeight: "1.9",
                            fontSize: "15px",
                        }}
                    >
                        © 2026 ReUse — Todos os direitos reservados.
                        <br />
                        Promovendo a reutilização de produtos e o consumo
                        consciente.
                        <br />
                        Evelin Júlia Hashimoto e Rebecca Martins
                        <br />
                        FIAP • Web Design • 2WTDOR
                    </p>
                </div>
            </div>
        </footer>
    );
}
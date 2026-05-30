export default function Header() {
    return (
        <header
            style={{
                backgroundColor: "#15803d",
                padding: "16px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
            }}
        >
            {/* LOGO */}
            <a
                href="/"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "32px",
                    fontWeight: "bold",
                }}
            >
                ♻️ ReUse
            </a>

            {/* BUSCA */}
            <input
                type="search"
                placeholder="Buscar produtos..."
                aria-label="Buscar produtos"
                style={{
                    flex: 1,
                    minWidth: "250px",
                    maxWidth: "500px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "none",
                }}
            />

            {/* MENU */}
            <nav
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                <a
                    href="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500",
                    }}
                >
                    Home
                </a>

                <a
                    href="/sobre"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500",
                    }}
                >
                    Sobre
                </a>

                <a
                    href="/favoritos"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500",
                    }}
                >
                    Favoritos
                </a>
            </nav>

            {/* AÇÕES */}
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                }}
            >
                <a
                    href="/cadastrar-produto"
                    style={{
                        backgroundColor: "white",
                        color: "#15803d",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    + Anunciar
                </a>

                <button
                    style={{
                        backgroundColor: "#166534",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Login
                </button>
            </div>
        </header>
    );
}
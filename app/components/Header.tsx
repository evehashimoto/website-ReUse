export default function Header() {
    return (
        <header
            style={{
                backgroundColor: "#15803d",
                padding: "16px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "white",
            }}
        >
            {/* LOGO */}
            <div
                style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                }}
            >
                ReUse ♻️
            </div>

            {/* MENU */}
            <nav
                style={{
                    display: "flex",
                    gap: "24px",
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
                    href="/favoritos"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500",
                    }}
                >
                    Favoritos
                </a>

                <a
                    href="/cadastrar-produto"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500",
                    }}
                >
                    Anunciar
                </a>
            </nav>

            {/* BUSCA + LOGIN */}
            <div
                style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    style={{
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "none",
                        width: "220px",
                    }}
                />

                <button
                    style={{
                        backgroundColor: "white",
                        color: "#15803d",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </div>
        </header>
    );
}
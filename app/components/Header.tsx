import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,

                backgroundColor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",

                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",

                padding: "0 40px",

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "24px",
            }}
        >
            {/* LOGO */}
            <Link
                href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    flexShrink: 0,
                }}
            >
                <Image
                    src="/logo-reuse.png"
                    alt="Logo ReUse"
                    width={250}
                    height={100}
                    priority
                />
            </Link>

            {/* BUSCA */}
            <input
                type="search"
                placeholder="Buscar produtos..."
                aria-label="Buscar produtos"
                style={{
                    flex: 1,
                    maxWidth: "450px",
                    padding: "12px 18px",
                    borderRadius: "12px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "#f9fafb",
                    color: "#111827",
                    outline: "none",
                }}
            />

            {/* MENU */}
            <nav
                style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "center",
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: "#374151",
                        textDecoration: "none",
                        fontWeight: "600",
                    }}
                >
                    Home
                </Link>

                <Link
                    href="/sobre"
                    style={{
                        color: "#374151",
                        textDecoration: "none",
                        fontWeight: "600",
                    }}
                >
                    Sobre
                </Link>

                <Link
                    href="/favoritos"
                    style={{
                        color: "#374151",
                        textDecoration: "none",
                        fontWeight: "600",
                    }}
                >
                    Favoritos
                </Link>
            </nav>

            {/* AÇÕES */}
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                }}
            >
                <Link
                    href="/cadastrar-produto"
                    style={{
                        backgroundColor: "#ecfdf5",
                        color: "#15803d",
                        padding: "10px 18px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "700",
                        border: "1px solid #bbf7d0",
                    }}
                >
                    Anunciar
                </Link>

                <button
                    style={{
                        backgroundColor: "#166534",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "700",
                    }}
                >
                    Entrar
                </button>
            </div>
        </header>
    );
}
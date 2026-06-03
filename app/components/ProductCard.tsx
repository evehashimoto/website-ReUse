"use client";

import Link from "next/link";

interface ProductCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    price: string;
    image: string;
}

export default function ProductCard({
    id,
    title,
    description,
    category,
    price,
    image,
}: ProductCardProps) {
    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
            }}
        >
            {/* {/* FAVORITO */}
            <button
                aria-label="Adicionar aos favoritos"
                style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "44px",
                    height: "44px",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    cursor: "pointer",
                    fontSize: "20px",
                    transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.innerHTML = "♥";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.innerHTML = "♡";
                }}
                onFocus={(e) => {
                    e.currentTarget.innerHTML = "♥";
                    e.currentTarget.style.boxShadow =
                        "0 0 0 3px #166354";
                }}
                onBlur={(e) => {
                    e.currentTarget.innerHTML = "♡";
                    e.currentTarget.style.boxShadow =
                        "0 2px 6px rgba(0,0,0,0.15)";
                }}
            >
                ♡
            </button>

            {/* IMAGEM */}
            <img
                src={image}
                alt={title}
                style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                }}
            />

            {/* CONTEÚDO */}
            <div style={{ padding: "20px" }}>
                <small
                    style={{
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                    }}
                >
                    {category}
                </small>

                <h3
                    style={{
                        marginTop: "16px",
                        marginBottom: "10px",
                        fontSize: "22px",
                        color: "#222",
                    }}
                >
                    {title}
                </h3>

                <p
                    style={{
                        color: "#3e4650",
                        marginBottom: "18px",
                        minHeight: "48px",
                        lineHeight: "1.5",
                    }}
                >
                    {description}
                </p>

                {/* PREÇO + BOTÃO */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <strong
                        style={{
                            fontSize: "26px",
                            color: "#15803d",
                        }}
                    >
                        {price}
                    </strong>

                    <Link
                        href={`/produtos/${id}`}
                        style={{
                            backgroundColor: "#15803d",
                            color: "white",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        Ver detalhes →
                    </Link>
                </div>
            </div>
        </div>
    );
}
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
                backgroundColor: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
            }}
        >
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
                    }}
                >
                    {title}
                </h3>

                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "18px",
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
                    }}
                >
                    <strong
                        style={{
                            fontSize: "22px",
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
                        Ver produto
                    </Link>
                </div>
            </div>
        </div>
    );
}
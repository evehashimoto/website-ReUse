import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const favoriteProducts = [
    {
        id: 1,
        title: "Notebook Dell",
        description: "Notebook usado em ótimo estado.",
        category: "Tecnologia",
        price: "R$ 2.300",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
        id: 2,
        title: "Violão Yamaha",
        description: "Violão seminovo conservado.",
        category: "Instrumentos",
        price: "R$ 700",
        image:
            "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    },
];

export default function FavoritosPage() {
    return (
        <>
            <Header />

            <main
                style={{
                    minHeight: "100vh",
                    padding: "40px",
                    backgroundColor: "#f4f4f4",
                }}
            >
                <h1
                    style={{
                        fontSize: "36px",
                        marginBottom: "12px",
                        color: "#222",
                    }}
                >
                    Meus Favoritos ❤️
                </h1>

                <p
                    style={{
                        marginBottom: "32px",
                        color: "#333",
                    }}
                >
                    Produtos salvos para acompanhar ou comprar futuramente.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {favoriteProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </main >

            <Footer />
        </>
    );
}
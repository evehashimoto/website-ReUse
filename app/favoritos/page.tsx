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
        title: "Mesa Gamer",
        description: "Mesa gamer moderna para setup completo.",
        category: "Móveis",
        price: "R$ 450",
        image:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    },
];

export default function FavoritosPage() {
    return (
        <>
            <Header />

            <main
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f4f4f4",
                    padding: "40px",
                    fontFamily: "Arial",
                }}
            >
                <h1
                    style={{
                        color: "#166534",
                        marginBottom: "10px",
                        fontSize: "34px",
                    }}
                >
                    Favoritos
                </h1>

                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "30px",
                        fontSize: "20px",
                    }}
                >
                    Produtos salvos para consultar depois
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
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
            </main>

            <Footer />
        </>
    );
}
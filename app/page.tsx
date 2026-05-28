"use client";

import Header from "./components/Header";

import Banner from "./components/Banner";

import ProductCard from "./components/ProductCard";

import Footer from "./components/Footer";

const products = [
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
    description: "Mesa compacta para escritório.",
    category: "Móveis",
    price: "R$ 450",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
  },
  {
    id: 3,
    title: "Violão",
    description: "Violão acústico seminovo.",
    category: "Instrumentos",
    price: "R$ 700",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
          padding: "40px",
          fontFamily: "Arial",
          color: "#222",
        }}
      >
        <Banner />

        <h2 style={{ marginBottom: "20px" }}>
          Produtos disponíveis
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
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
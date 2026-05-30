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

        <section
          style={{
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#222",
            }}
          >
            Categorias Populares
          </h2>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              "Tecnologia",
              "Móveis",
              "Instrumentos",
              "Esportes",
              "Livros",
            ].map((categoria) => (
              <div
                key={categoria}
                style={{
                  backgroundColor: "white",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  fontWeight: "bold",
                  color: "#222",
                }}
              >
                {categoria}
              </div>
            ))}
          </div>
        </section>

        <h2
          style={{
            marginBottom: "20px",
            color: "#222",
            marginTop: "20px",
          }}
        >
          Produtos em Destaque
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

        <section
          style={{
            marginTop: "60px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#222",
            }}
          >
            Recém Adicionados
          </h2>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                color: "#444",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              Novos produtos são adicionados diariamente pela comunidade ReUse.
              Explore oportunidades de compra consciente e contribua para uma
              economia mais sustentável.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
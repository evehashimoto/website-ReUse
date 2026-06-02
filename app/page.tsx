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
            marginTop: "50px",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#166534",
              marginBottom: "40px",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            Como Funciona
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#3c3f44",
              marginTop: "-30px",
              marginBottom: "40px",
              fontSize: "20px",
            }}
          >
            Três passos simples para dar uma nova vida aos produtos
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #166534, #15803d)",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(21,128,61,0.18)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  opacity: "0.55",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                01
              </div>

              <h3
                style={{
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Anuncie
              </h3>

              <p
                style={{
                  color: "#fff",
                  lineHeight: "1.6",
                }}
              >
                Cadastre produtos que você não utiliza mais e encontre novos interessados.
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #166534, #15803d)",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(21,128,61,0.18)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  opacity: "0.55",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                02
              </div>

              <h3
                style={{
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Encontre
              </h3>

              <p
                style={{
                  color: "#fff",
                  lineHeight: "1.6",
                }}
              >
                Descubra produtos reutilizáveis anunciados pela comunidade.
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #166534, #15803d)",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(21,128,61,0.18)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  opacity: "0.55",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                03
              </div>

              <h3
                style={{
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Transforme
              </h3>

              <p
                style={{
                  color: "#fff",
                  lineHeight: "1.6",
                }}
              >
                Contribua para a redução de resíduos e para um consumo mais sustentável.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to right, #15803d, #22c55e)",
              borderRadius: "24px",
              padding: "40px",
              color: "white",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "40px",
                fontSize: "36px",
              }}
            >
              Impacto Sustentável
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "42px", marginBottom: "10px" }}>
                  500+
                </h3>
                <p>Produtos reutilizados</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "42px", marginBottom: "10px" }}>
                  200+
                </h3>
                <p>Usuários ativos</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "42px", marginBottom: "10px" }}>
                  1t
                </h3>
                <p>Resíduos evitados</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "42px", marginBottom: "10px" }}>
                  100%
                </h3>
                <p>Compromisso com sustentabilidade</p>
              </div>
            </div>
          </div>
        </section>

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
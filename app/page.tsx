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
            Como Funciona?
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#3c3f44",
              marginTop: "-30px",
              marginBottom: "40px",
              fontSize: "20px",
              fontWeight: "bold",
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
              tabIndex={0}
              style={{
                background: "linear-gradient(135deg, #166534, #15803d)",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(21,128,61,0.18)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 4px #0f0f0f, 0 15px 35px rgba(21,128,61,0.18)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(21,128,61,0.18)";
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
                Cadastre produtos que você não utiliza mais e encontre novos interessados
              </p>
            </div>

            <div
              tabIndex={0}
              style={{
                background: "linear-gradient(135deg, #166534, #15803d)",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(21,128,61,0.18)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 4px #0f0f0f, 0 15px 35px rgba(21,128,61,0.18)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(21,128,61,0.18)";
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
                Descubra produtos reutilizáveis anunciados pela comunidade ReUse
              </p>
            </div>

            <div
              tabIndex={0}
              style={{
                background: "linear-gradient(135deg, #166534, #15803d)",
                padding: "30px",
                borderRadius: "16px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 15px 35px rgba(21,128,61,0.18)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 4px #0f0f0f, 0 15px 35px rgba(21,128,61,0.18)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(21,128,61,0.18)";
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
                Contribua para a redução de resíduos e para um consumo mais sustentável
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            marginBottom: "80px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <h2
              style={{
                color: "#166534",
                fontSize: "36px",
                marginBottom: "12px",
                fontWeight: "bold",
              }}
            >
              Impacto Sustentável
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "18px",
              }}
            >
              Resultados gerados pela comunidade ReUse através da reutilização consciente!
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "50px 30px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.21)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  numero: "500+",
                  titulo: "Produtos reutilizados",
                },
                {
                  numero: "200+",
                  titulo: "Usuários ativos",
                },
                {
                  numero: "1t",
                  titulo: "Resíduos evitados",
                },
                {
                  numero: "100%",
                  titulo: "Compromisso sustentável",
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  tabIndex={0}
                  style={{
                    position: "relative",
                    backgroundColor: "white",
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px #166534";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3
                    style={{
                      fontSize: "64px",
                      fontWeight: "700",
                      color: "#15803d",
                      marginBottom: "12px",
                      lineHeight: "1",
                    }}
                  >
                    {item.numero}
                  </h3>

                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    {item.titulo}
                  </p>
                </div>
              ))}
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
              color: "#166534",
              fontSize: "36px",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Categorias populares
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
                tabIndex={0}
                style={{
                  backgroundColor: "white",
                  padding: "18px 28px",
                  borderRadius: "999px",
                  border: "2px solid #166534",
                  color: "#166534",
                  fontWeight: "600",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#15803d";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#166534";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#15803d";
                  e.currentTarget.style.color = "white";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#166534";
                }}
              >
                {categoria}
              </div>
            ))}
          </div>
        </section>

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
            marginTop: "80px",
          }}
        >
          <h2
            style={{
              color: "#166534",
              fontSize: "36px",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Recém adicionados
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <ProductCard
              id={101}
              title="Cama de Casal"
              description="Estrutura em madeira maciça em excelente estado."
              category="Móveis"
              price="R$ 2.800"
              image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            />

            <ProductCard
              id={102}
              title="Bicicleta Urbana"
              description="Ideal para deslocamentos diários e lazer."
              category="Esportes"
              price="R$ 950"
              image="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop"
            />

            <ProductCard
              id={103}
              title="Coleção de Livros"
              description="Mais de 30 títulos em excelente conservação."
              category="Livros"
              price="R$ 120"
              image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </section>
      </main>
      <Footer /> 
    </>
  );
}
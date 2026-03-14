import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Produtos disponíveis</h1>

      <a href="/cadastrar-produto">Cadastrar novo produto</a>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <a
            key={product.id}
            href={`/produtos/${product.id}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textDecoration: "none",
              color: "black",
              background: "white",
            }}
          >
            <h3>{product.title}</h3>

            <p style={{ fontSize: "14px", opacity: 0.7 }}>
              {product.category}
            </p>

            <p style={{ marginTop: "10px" }}>
              {product.description.slice(0, 60)}...
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
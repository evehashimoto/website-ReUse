import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif"}}>
      <h1 className="text-3xl font-bold mb-3" >
        ReUse! 
      </h1>
      <h2 className="text-2xl font-medium mb-6">Plataforma de Troca de Itens</h2>
      <p className="mb-8 text-gray-600">
        Cadastre itens que você não usa mais e encontre oportunidades de troca.
      </p>

      <a href="/cadastrar-produto">Cadastrar novo produto</a>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <a
            key={product.id}
            href={`/produtos/${product.id}`}
            style={{
              border: "2px solid #a8a8a8",
              borderRadius: "10px",
              padding: "20px",
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
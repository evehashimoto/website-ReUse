"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);

        setProducts([]);
      }
    }

    loadProducts();
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>ReUse</h1>

      <p>
        Plataforma colaborativa para troca de produtos e incentivo ao consumo consciente.
      </p>

      <h2>Produtos</h2>

      <div style={{ marginTop: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "12px",
            }}
          >
            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <small>{product.category}</small>
          </div>
        ))}
      </div>
    </main>
  );
}
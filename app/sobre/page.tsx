import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SobrePage() {
    return (
        <>
            <Header />

            <main
                style={{
                    minHeight: "100vh",
                    padding: "40px",
                    backgroundColor: "#f4f4f4",
                    color: "#222",
                }}
            >
                <section
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "42px",
                            marginBottom: "24px",
                        }}
                    >
                        Sobre a ReUse ♻️
                    </h1>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                            marginBottom: "24px",
                        }}
                    >
                        A ReUse é uma plataforma digital colaborativa que promove
                        a compra, venda e reutilização de produtos usados,
                        incentivando práticas de consumo consciente e
                        sustentabilidade urbana.
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                            marginBottom: "24px",
                        }}
                    >
                        O projeto foi desenvolvido ao longo de diversas fases
                        acadêmicas, passando por etapas de prototipação,
                        desenvolvimento mobile, marketing digital,
                        desenvolvimento Full Stack e automação de processos.
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                        }}
                    >
                        Nosso objetivo é reduzir o descarte desnecessário de
                        produtos, ampliar o ciclo de vida dos itens e estimular
                        uma economia mais sustentável e acessível para todos.
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "10",
                        }}
                    >
                        Desenvolvido por Evelin Julia Hashimoto e Rebecca Martins, FIAP 2026 - Turma 2TWDOR
                    </p>
                    
                </section>
            </main>

            <Footer />
        </>
    );
}
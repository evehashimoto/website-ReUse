import Image from "next/image";

export default function Banner() {
    return (
        <section
            style={{
                maxWidth: "1200px",
                margin: "0 auto 60px auto",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.08)";
            }}
        >
            <Image
                src="/banner-reuse.png"
                alt="Banner ReUse"
                width={1600}
                height={500}
                priority
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                }}
            />
        </section>
    );
}
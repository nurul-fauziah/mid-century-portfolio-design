import { ImageResponse } from "next/og";

export const alt = "Nurul Fauziah — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F6EFE0",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          color: "#2B2118",
          border: "12px solid #2B2118",
        }}
      >
        {/* Geometric mid-century decorative accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "60px",
              borderTopLeftRadius: "60px",
              borderTopRightRadius: "60px",
              backgroundColor: "#E3A62B",
              border: "3px solid #2B2118",
            }}
          />
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#D9622B",
              border: "3px solid #2B2118",
            }}
          />
        </div>

        {/* Top Header Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              backgroundColor: "#D9622B",
              color: "#F6EFE0",
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "2px solid #2B2118",
            }}
          >
            Portfolio
          </div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#5A4C40",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Tangerang, Indonesia
          </span>
        </div>

        {/* Center Main Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              margin: 0,
              color: "#2B2118",
            }}
          >
            Nurul Fauziah
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "4px",
                backgroundColor: "#D9622B",
              }}
            />
            <span
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#D9622B",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* Bottom Tech Stack & Philosophy */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "3px solid #2B2118",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#5A4C40",
              letterSpacing: "0.05em",
            }}
          >
            Next.js · TypeScript · Laravel · NestJS · PostgreSQL · MySQL
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1F7A74",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Informatics Engineering Graduate
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


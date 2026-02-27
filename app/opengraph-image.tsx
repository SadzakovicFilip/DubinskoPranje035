import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Dubinsko Pranje 035 - Iznajmljivanje mašina za dubinsko pranje i čišćenje u Ćupriji, Paraćinu i Jagodini";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a5c32 0%, #2d8a4e 50%, #1a5c32 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              marginBottom: "30px",
              fontSize: "48px",
              fontWeight: "bold",
              color: "#f5f0e8",
              border: "3px solid rgba(255,255,255,0.3)",
            }}
          >
            D.P.
          </div>

          <div
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Dubinsko Pranje 035
          </div>

          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              lineHeight: 1.5,
              marginBottom: "30px",
            }}
          >
            Iznajmljivanje mašina za dubinsko pranje i čišćenje
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Ćuprija
            </span>
            <span
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Paraćin
            </span>
            <span
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Jagodina
            </span>
          </div>

          <div
            style={{
              marginTop: "30px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            dubinskopranje035.rs | 060 456 4481
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

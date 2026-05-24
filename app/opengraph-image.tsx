import { ImageResponse } from "next/og";

export const alt = "Healing with Uday Kiran — Emotional Mastery for High Performers";
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
          padding: 80,
          background:
            "linear-gradient(135deg, #FBF9F4 0%, #F6F1E7 45%, #E7D6A8 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "rgba(201,162,75,0.18)",
              color: "#C9A24B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            ॐ
          </div>
          <div style={{ color: "#1F2A2E", fontSize: 22, fontWeight: 500 }}>
            Healing with Uday Kiran
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C9A24B",
              marginBottom: 24,
            }}
          >
            Emotional Mastery for High Performers
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              color: "#1F2A2E",
              fontWeight: 600,
              maxWidth: 940,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Healing is not soft.</span>
            <span style={{ color: "#C9A24B" }}>
              It is the system that holds your performance.
            </span>
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 22,
              color: "rgba(31,42,46,0.65)",
            }}
          >
            udaykiranmanthri.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FBF9F4 0%, #E7D6A8 100%)",
          color: "#C9A24B",
          fontSize: 120,
          fontWeight: 600,
        }}
      >
        ॐ
      </div>
    ),
    { ...size },
  );
}

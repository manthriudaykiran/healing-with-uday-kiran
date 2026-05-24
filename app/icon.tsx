import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 44,
          fontWeight: 600,
          borderRadius: 14,
        }}
      >
        ॐ
      </div>
    ),
    { ...size },
  );
}

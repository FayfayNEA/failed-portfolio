import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Failenn Aselta — Designer";
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
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 96px",
          backgroundColor: "#e8e8e8",
          backgroundImage:
            "radial-gradient(#00000018 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          fontFamily: "monospace",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: 13,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#a1a1aa",
            marginBottom: 24,
            margin: "0 0 24px 0",
          }}
        >
          portfolio
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 88,
            fontWeight: 500,
            color: "#09090b",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 20px 0",
          }}
        >
          Failenn Aselta
        </h1>

        {/* Role */}
        <p
          style={{
            fontSize: 28,
            color: "#52525b",
            letterSpacing: "-0.01em",
            margin: "0 0 56px 0",
          }}
        >
          Product Design · Design Engineering · Design Technologist
        </p>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 1,
            backgroundColor: "#d4d4d8",
            margin: "0 0 32px 0",
          }}
        />

        {/* URL */}
        <p
          style={{
            fontSize: 15,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#a1a1aa",
            margin: 0,
          }}
        >
          failennaselta.com
        </p>
      </div>
    ),
    { ...size }
  );
}

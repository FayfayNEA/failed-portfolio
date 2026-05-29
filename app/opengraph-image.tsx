import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "Failenn Aselta — Product Designer + Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imgBuffer = await readFile(
    path.join(process.cwd(), "public/home/assets/background2.png")
  );
  const imgSrc = `data:image/png;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#e8e8e8",
        }}
      >
        {/* Collage scene */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />

        {/* Dot-grid overlay — matches the site background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Gradient vignette — fades scene into the name strip */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(232,232,232,0.05) 0%, rgba(232,232,232,0.18) 45%, rgba(232,232,232,0.82) 72%, rgba(232,232,232,0.97) 100%)",
          }}
        />

        {/* Name + tagline strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0 72px 52px",
            gap: 0,
            fontFamily: "monospace",
          }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6b7280",
              margin: "0 0 16px 0",
            }}
          >
            failennaselta.com
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: 76,
              fontWeight: 600,
              color: "#111827",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: "0 0 14px 0",
            }}
          >
            Failenn Aselta
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: 24,
              color: "#374151",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Product Designer + Code
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}

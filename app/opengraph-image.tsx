import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "Failenn Aselta — Product Designer + Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const [imgBuffer, fontRegular, fontSemiBold] = await Promise.all([
    readFile(path.join(process.cwd(), "public/home/assets/background2.png")),
    readFile(path.join(process.cwd(), "public/fonts/GeistMono-Regular.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/GeistMono-SemiBold.ttf")),
  ]);

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
            objectPosition: "center 28%",
          }}
        />

        {/* Dot-grid overlay — site texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(0,0,0,0.09) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Gradient fade into name strip */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(232,232,232,0.0) 0%, rgba(232,232,232,0.1) 42%, rgba(232,232,232,0.78) 66%, rgba(232,232,232,0.97) 82%, rgba(232,232,232,1.0) 100%)",
          }}
        />

        {/* Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            padding: "0 72px 52px",
            gap: 0,
            fontFamily: "'Geist Mono'",
          }}
        >
          {/* URL pill — matches nav/breadcrumb style */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5a6648",
                fontWeight: 400,
                background: "rgba(90,102,72,0.07)",
                border: "0.5px solid rgba(90,102,72,0.18)",
                borderRadius: 999,
                padding: "5px 14px",
              }}
            >
              failennaselta.com
            </span>
          </div>

          {/* Name */}
          <p
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: "0 0 14px 0",
              fontFamily: "'Geist Mono'",
            }}
          >
            Failenn Aselta
          </p>

          {/* Tagline — lowercase mono, site voice */}
          <p
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "#5a6648",
              letterSpacing: "0.04em",
              margin: 0,
              fontFamily: "'Geist Mono'",
            }}
          >
            product designer + code
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist Mono", data: fontRegular, weight: 400, style: "normal" },
        { name: "Geist Mono", data: fontSemiBold, weight: 600, style: "normal" },
      ],
    }
  );
}

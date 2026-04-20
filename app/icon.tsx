import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  // Next's runtime/bundler can make `import.meta.url` non-file-like in dev.
  // Resolve from the repo root to keep this route stable.
  const iconPath = path.join(process.cwd(), "app", "icon.png");
  const iconData = await readFile(iconPath);
  const base64 = Buffer.from(iconData).toString("base64");
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        {/* Scale up to reduce white padding so the bee reads larger at 16px. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={64}
          height={64}
          style={{
            transform: "scale(1.38) translate(2px, 1px)",
          }}
        />
      </div>
    ),
    size,
  );
}


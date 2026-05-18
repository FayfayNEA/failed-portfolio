import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  // Keep outputFileTracingRoot and turbopack.root in sync to avoid the
  // "Both are set but must have the same value" warning on Vercel.
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  // Aggressive cache headers for immutable static assets (videos, images, fonts in /public)
  async headers() {
    return [
      {
        source: "/:path*\\.(mp4|webm|mov|jpg|jpeg|png|gif|webp|avif|svg|woff|woff2|ttf|otf|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/home/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
    /** Prefer AVIF then WebP for smaller payloads (Next default here was WebP-only). */
    formats: ["image/avif", "image/webp"],
    /** Longer edge cache for optimized variants (CDN + browser reuse). */
    minimumCacheTTL: 60 * 60 * 24 * 7,
    qualities: [70, 72, 75, 80, 85],
    /** Avoid oversized srcset buckets for card-sized remote thumbs. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;

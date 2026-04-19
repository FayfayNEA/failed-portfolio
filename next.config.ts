import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Next from inferring an incorrect workspace root (e.g. C:\Users\Failenn)
    root: fileURLToPath(new URL(".", import.meta.url)),
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
    qualities: [70, 75, 80, 85],
    /** Avoid oversized srcset buckets for card-sized remote thumbs. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;

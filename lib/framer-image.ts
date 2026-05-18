/** Resize Framer CDN image URLs at the source (avoids full-res downloads + /_next/image hop). */
export function framerImageSrc(src: string, maxWidth: number): string {
  if (!src.includes("framerusercontent.com/images")) return src;
  try {
    const u = new URL(src);
    u.searchParams.set("width", String(maxWidth));
    u.searchParams.delete("height");
    return u.toString();
  } catch {
    return src;
  }
}

/** Card thumbs on the home / category deck. */
export const GALLERY_FRAMER_MAX_W = 640;

export function galleryCoverSrc(src: string | undefined): string | undefined {
  if (!src) return undefined;
  return framerImageSrc(src, GALLERY_FRAMER_MAX_W);
}

/** Carousel frames: enough for ~2× retina at typical max display width. */
export function carouselFramerMaxWidth(
  frameSize: "default" | "compact" | "medium" | "phone"
): number {
  switch (frameSize) {
    case "compact":
      return 960;
    case "medium":
      return 1280;
    case "phone":
      return 1080;
    default:
      return 1200;
  }
}

export function carouselImageSrc(
  src: string,
  frameSize: "default" | "compact" | "medium" | "phone"
): string {
  return framerImageSrc(src, carouselFramerMaxWidth(frameSize));
}

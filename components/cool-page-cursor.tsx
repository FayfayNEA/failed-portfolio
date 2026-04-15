"use client";

import { useEffect } from "react";

const STYLE_ID = "cool-page-cursor-style";
/** Same asset as COOL gallery hero frame. */
const CURSOR_SOURCE =
  "https://framerusercontent.com/images/EBM2laJoBq3GCZMiebIHqU6MW18.png?width=1428&height=2072";
const CURSOR_FALLBACK_SMALL =
  "https://framerusercontent.com/images/EBM2laJoBq3GCZMiebIHqU6MW18.png?width=48&height=48";
const CURSOR_MAX_PX = 24;

function injectStyle(cursorUrl: string, hotspotX: number, hotspotY: number) {
  const safe = cursorUrl.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const css = `[data-cool-cursor-scope],[data-cool-cursor-scope] *{cursor:url("${safe}") ${hotspotX} ${hotspotY}, auto !important;}`;
  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    document.head.appendChild(el);
  }
  el.textContent = css;
}

function cursorFromImage(img: HTMLImageElement): { url: string; x: number; y: number } | null {
  const w0 = img.naturalWidth;
  const h0 = img.naturalHeight;
  if (!w0 || !h0) return null;

  const scale = Math.min(1, CURSOR_MAX_PX / Math.max(w0, h0));
  const dw = Math.max(1, Math.round(w0 * scale));
  const dh = Math.max(1, Math.round(h0 * scale));

  const canvas = document.createElement("canvas");
  canvas.width = dw;
  canvas.height = dh;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(img, 0, 0, dw, dh);

  try {
    const url = canvas.toDataURL("image/png");
    return { url, x: Math.floor(dw / 2), y: Math.floor(dh / 2) };
  } catch {
    return null;
  }
}

/**
 * COOL case study: custom cursor from Framer art. Scoped like Eidolon/Buddy.
 * `crossOrigin` + canvas → data URL when CDN allows CORS; else tiny direct `url()` fallback.
 */
export function CoolPageCursor() {
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";

    const apply = () => {
      if (cancelled) return;
      const fromCanvas = cursorFromImage(img);
      if (fromCanvas) {
        injectStyle(fromCanvas.url, fromCanvas.x, fromCanvas.y);
        return;
      }
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (w && h) {
        const x = Math.max(0, Math.min(127, Math.round(w / 2)));
        const y = Math.max(0, Math.min(127, Math.round(h / 2)));
        injectStyle(CURSOR_SOURCE, x, y);
        return;
      }
      injectStyle(CURSOR_FALLBACK_SMALL, 24, 24);
    };

    img.onload = apply;
    img.onerror = () => {
      if (cancelled) return;
      console.warn("[CoolPageCursor] could not load cursor image");
      injectStyle(CURSOR_FALLBACK_SMALL, 24, 24);
    };

    img.src = CURSOR_SOURCE;

    return () => {
      cancelled = true;
      document.getElementById(STYLE_ID)?.remove();
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

const STYLE_ID = "eidolon-page-cursor-style";
/** Source in `public/eidolon/` — filename has spaces; path must be encoded for fetch + for `url()` when used raw. */
const SOURCE_PATH = `/eidolon/${encodeURIComponent("Group 3 (2).png")}`;
/** Match Buddy (`buddy-cursor-24.png`): ~24px so OS scaling matches; still under browser max size. */
const CURSOR_MAX_PX = 24;

function injectStyle(cursorUrl: string, hotspotX: number, hotspotY: number) {
  // Quote URL so `data:image/png;base64,...` commas do not break the `cursor` grammar.
  const safe = cursorUrl.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const css = `[data-eidolon-cursor-scope],[data-eidolon-cursor-scope] *{cursor:url("${safe}") ${hotspotX} ${hotspotY}, auto !important;}`;
  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    document.head.appendChild(el);
  }
  el.textContent = css;
}

/** Draw into a small canvas so `cursor: url()` is accepted by browsers. */
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
 * Eidolon-only custom cursor. Injects scoped CSS after the asset loads.
 * Rasterizes to 24px max edge (Buddy-sized); data URL keeps `cursor: url()` reliable.
 */
export function EidolonPageCursor() {
  useEffect(() => {
    let cancelled = false;
    const img = new Image();

    const apply = () => {
      if (cancelled) return;
      const fromCanvas = cursorFromImage(img);
      if (fromCanvas) {
        injectStyle(fromCanvas.url, fromCanvas.x, fromCanvas.y);
        return;
      }
      const abs = new URL(SOURCE_PATH, window.location.origin).href;
      const x = Math.max(0, Math.min(127, Math.round(img.naturalWidth / 2)));
      const y = Math.max(0, Math.min(127, Math.round(img.naturalHeight / 2)));
      injectStyle(abs, x, y);
    };

    img.onload = apply;
    img.onerror = () => {
      if (cancelled || typeof window === "undefined") return;
      console.warn("[EidolonPageCursor] could not load cursor image:", SOURCE_PATH);
    };

    img.src = SOURCE_PATH;

    return () => {
      cancelled = true;
      document.getElementById(STYLE_ID)?.remove();
    };
  }, []);

  return null;
}

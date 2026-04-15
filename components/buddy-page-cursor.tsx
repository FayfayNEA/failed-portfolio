"use client";

import { useEffect } from "react";

const STYLE_ID = "buddy-page-cursor-style";
/** Tiny footprint; keep ≤128px for `cursor: url()` support. */
const BUDDY_CURSOR_URL = "/buddy/buddy-cursor-24.png";
/** Image center = click point (proportional corner hotspots misaligned on mascot art). */
const HOTSPOT = "12 12";

/**
 * Buddy-only custom cursor. Injects a scoped rule so Tailwind `cursor-pointer` / `cursor-zoom-in`
 * on interactive controls does not hide the asset.
 */
export function BuddyPageCursor() {
  useEffect(() => {
    const css = `[data-buddy-cursor-scope],[data-buddy-cursor-scope] *{cursor:url("${BUDDY_CURSOR_URL}") ${HOTSPOT},auto!important}`;
    let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = STYLE_ID;
      document.head.appendChild(el);
    }
    el.textContent = css;
    return () => {
      document.getElementById(STYLE_ID)?.remove();
    };
  }, []);
  return null;
}

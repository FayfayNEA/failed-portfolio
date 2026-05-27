"use client";

import { useEffect } from "react";

/**
 * Listens for postMessage events from the home collage iframe and smooth-scrolls
 * to the target element. Placed in the home page so it only runs there.
 */
export function HomeScrollListener() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== "smoothScrollTo") return;
      const el = document.getElementById(e.data.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}

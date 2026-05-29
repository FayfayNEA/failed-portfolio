"use client";

import { useEffect } from "react";

/**
 * Two jobs:
 * 1. On mount: if the URL has a hash (e.g. /#product-design navigated from another page),
 *    smooth-scroll to that element once the page is ready.
 * 2. postMessage listener: the home collage iframe sends { type: "smoothScrollTo", id }
 *    to scroll without a full page reload.
 */
export function HomeScrollListener() {
  useEffect(() => {
    // Hash scroll on arrival — rAF gives the layout a frame to settle first
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    // iframe postMessage
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

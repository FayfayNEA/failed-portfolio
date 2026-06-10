"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function CollageScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const check = () => {
      const collage = document.getElementById("home-collage");
      if (!collage) {
        setVisible(window.scrollY < 100);
        return;
      }
      const rect = collage.getBoundingClientRect();
      setVisible(rect.bottom > window.innerHeight * 0.5);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      role="note"
      aria-label="Scroll down for projects"
      className={cn(
        "pointer-events-none fixed inset-x-0 z-[85] px-4 text-center transition-opacity duration-500",
        "bottom-[max(1.25rem,env(safe-area-inset-bottom))] md:bottom-[max(3.5rem,env(safe-area-inset-bottom))]",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <p className="m-0 font-mono text-[11px] tracking-wide text-zinc-900 sm:text-[12px] [text-shadow:0_0_2px_rgba(255,255,255,0.9),0_1px_1px_rgba(0,0,0,0.08)]">
        scroll for projects or explore the collage
      </p>
      <span className="collage-hint-arrow mt-1 block text-[14px] text-zinc-800" aria-hidden>
        ↓
      </span>
    </div>
  );
}

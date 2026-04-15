"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

type ImageLightboxProps = {
  src: string;
  alt: string;
  /** Classes on the thumbnail `<img>` (e.g. CaseImg styling). */
  imgClassName?: string;
  /** Classes on the clickable wrapper. */
  wrapperClassName?: string;
  /**
   * When true the lightbox backdrop is white instead of dark — ideal for
   * diagrams or line-art that need a light background to be readable.
   */
  lightBg?: boolean;
};

export function ImageLightbox({ src, alt, imgClassName, wrapperClassName, lightBg = false }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, close]);

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              className={cn(
                "absolute inset-0 backdrop-blur-[10px] transition-opacity",
                lightBg ? "bg-white/96" : "bg-zinc-950/88"
              )}
              onClick={close}
              aria-label="Close lightbox"
            />
            <div className="relative z-[1] flex max-h-[min(92dvh,960px)] max-w-[min(96vw,1240px)] flex-col items-stretch">
              <button
                type="button"
                onClick={close}
                className={cn(
                  "mb-3 self-end rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] outline-none transition focus-visible:ring-1",
                  lightBg
                    ? "text-zinc-500 hover:text-zinc-900 focus-visible:ring-zinc-400/40"
                    : "text-white/80 hover:text-white focus-visible:ring-white/40"
                )}
                aria-label="Close"
              >
                Close
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className={cn(
                  "max-h-[min(88dvh,900px)] w-full object-contain",
                  lightBg
                    ? "shadow-[0_24px_80px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.08]"
                    : "shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
                )}
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group block w-full cursor-zoom-in overflow-hidden rounded-3xl border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          wrapperClassName
        )}
        aria-haspopup="dialog"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={imgClassName} />
      </button>
      {overlay}
    </>
  );
}

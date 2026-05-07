"use client";

import { useEffect, useState } from "react";

export function DesignerBio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const gallery = document.getElementById("product-design");
    if (!gallery) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={[
        "pointer-events-auto fixed z-[99]",
        "hidden md:block",
        "bottom-6 left-[6rem]",
        "font-mono max-w-[300px]",
        "transition-opacity duration-500 ease-in-out",
        "cursor-default select-none",
        scrolled
          ? "opacity-0 pointer-events-none"
          : "opacity-25 hover:opacity-90",
      ].join(" ")}
    >
      <p className="m-0 text-[11px] leading-[1.7] text-zinc-700">
        <span className="text-[17px] font-black text-zinc-900 leading-none">
          Designer
        </span>
        {" "}with an architecture background,<br />
        creating intuitive software experiences,<br />
        with a programmatic approach and<br />
        an exceptional command of AI tools.
      </p>
    </div>
  );
}

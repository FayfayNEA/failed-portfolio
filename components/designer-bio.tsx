"use client";

import { useEffect, useState } from "react";

export function DesignerBio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const collage = document.getElementById("home-collage");
    if (!collage) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(collage);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={[
        "pointer-events-auto fixed z-[99]",
        "hidden xl:block",
        "bottom-6 left-[6rem]",
        "font-mono max-w-[300px]",
        "transition-opacity duration-500 ease-in-out",
        "cursor-default select-none",
        visible
          ? "opacity-25 hover:opacity-90"
          : "opacity-0 pointer-events-none",
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

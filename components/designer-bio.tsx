"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { shouldShowHomeAside } from "@/lib/home-aside-visibility";

export function DesignerBio() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const check = () => {
      if (pathname !== "/") {
        setVisible(false);
        return;
      }
      setVisible(shouldShowHomeAside());
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  return (
    <div
      data-intro-bio
      className={cn(
        "fixed z-[40] hidden xl:block",
        "top-[5rem] left-[6rem]",
        "font-mono max-w-[300px]",
        "cursor-default select-none",
        "transition-opacity duration-500",
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <p className="m-0 text-[11px] leading-[1.7] text-zinc-700">
        <span className="text-[17px] font-black text-zinc-900 leading-none">
          Product Designer + Code.
        </span>
        <br />
        Trained first in code, then in buildings,
        then in the space between a person and a screen.
        Each discipline was the same problem wearing a different material.
        Now the material is AI.
        0 → 1. Designer who can solve any problem. {"<3"}
      </p>
    </div>
  );
}

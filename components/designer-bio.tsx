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
      className={cn(
        "fixed z-[40] hidden xl:block",
        "bottom-6 left-[6rem]",
        "font-mono max-w-[300px]",
        "cursor-default select-none",
        "transition-opacity duration-500",
        visible
          ? "pointer-events-auto opacity-25 hover:opacity-90"
          : "pointer-events-none opacity-0",
      )}
    >
      <p className="m-0 text-[11px] leading-[1.7] text-zinc-700">
        <span className="text-[17px] font-black text-zinc-900 leading-none">
          Product Designer who codes.
        </span>
        <br />
        Architecture background turned interface<br />
        instinct, creating intuitive software<br />
        with a programmatic approach and<br />
        an exceptional command of AI tools.
      </p>
    </div>
  );
}

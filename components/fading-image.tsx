"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Drop-in replacement for next/image that starts at opacity-0 and
 * fades in once the image is fully decoded. Prevents the jarring
 * "pop" that happens when images load after a page transition.
 */
export function FadingImage({
  className,
  onLoad,
  ...props
}: React.ComponentProps<typeof Image>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      className={cn(
        "transition-opacity duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}

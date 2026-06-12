"use client";

import { useEffect, useState } from "react";

export default function TeaTimerPage() {
  // Forward dev flags (?fast, ?mood, ?brew) into the embedded app, which reads
  // them from its own window.location.search inside the iframe.
  const [src, setSrc] = useState("/teatimer/index.html");
  useEffect(() => {
    if (window.location.search) {
      setSrc("/teatimer/index.html" + window.location.search);
    }
  }, []);

  return (
    <div className="relative min-h-[100dvh]">
      {/* iframe fills the entire background */}
      <iframe
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        title="TeaTimer"
      />
    </div>
  );
}

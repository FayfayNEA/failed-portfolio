"use client";

import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./ContactClient"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[100dvh] items-center justify-center bg-transparent px-4">
      <div className="h-9 w-9 animate-pulse rounded-full border border-black/[0.06] bg-white/30" />
    </div>
  ),
});

export function ContactGate() {
  return <ContactClient />;
}

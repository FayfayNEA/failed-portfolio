"use client";

import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./ContactClient"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[100dvh] bg-transparent" />
  ),
});

export function ContactGate() {
  return <ContactClient />;
}

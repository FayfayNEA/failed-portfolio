import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fither",
  description: "Organic dithering playground.",
};

export default function FitherWorkPage() {
  return (
    <div className="fixed inset-0" style={{ background: "#e7eddc" }}>
      {/* Iframe fills the entire screen */}
      <iframe
        src="/fither/index.html"
        className="h-full w-full border-none"
        title="Fither"
      />

      {/* Breadcrumb floats inside the fither background, top-left */}
      <div className="absolute top-5 left-6 md:left-10">
        <nav className="flex items-center gap-1 font-mono text-[11px] font-light tracking-[0.04em] text-black">
          <Link href="/" className="hover:underline underline-offset-2">home</Link>
          <span className="opacity-40">/</span>
          <Link href="/work" className="hover:underline underline-offset-2">work</Link>
          <span className="opacity-40">/</span>
          <Link href="/product-design" className="hover:underline underline-offset-2">product-design</Link>
          <span className="opacity-40">/</span>
          <span>fither</span>
        </nav>
      </div>
    </div>
  );
}

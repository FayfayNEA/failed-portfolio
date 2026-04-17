import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fither",
  description: "Organic dithering playground.",
};

export default function FitherWorkPage() {
  return (
    <div
      className="fither-page-canvas relative -mt-[4rem] flex min-h-[100dvh] flex-col pt-[4rem] md:-mt-[5rem] md:pt-[5rem]"
    >
      {/* Breadcrumb below site nav; background extends under nav via negative margin */}
      <div className="shrink-0 px-6 pt-2 pb-1 md:px-10">
        <nav className="flex items-center gap-1 font-mono text-[11px] font-light tracking-[0.04em] text-black">
          <Link href="/" className="hover:underline underline-offset-2">
            home
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/work" className="hover:underline underline-offset-2">
            work
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/product-design" className="hover:underline underline-offset-2">
            product-design
          </Link>
          <span className="opacity-40">/</span>
          <span>fither</span>
        </nav>
      </div>

      <iframe
        src="/fither/index.html"
        className="min-h-0 w-full flex-1 border-0"
        title="Fither"
      />
    </div>
  );
}

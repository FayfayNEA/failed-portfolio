import type { Metadata } from "next";
import { RetroComputerSection } from "@/components/retro-computer-section";

export const metadata: Metadata = {
  description: "Branding, product design, and architecture, retro work console.",
};

export default function WorkPage() {
  return (
    <div className="flex min-h-full flex-col overflow-x-hidden bg-transparent text-zinc-900 [font-family:var(--font-geist-mono),ui-monospace,monospace]">
      <main className="flex flex-1 flex-col px-4 py-4 md:px-8 md:py-3">
        <div className="flex w-full flex-1 flex-col items-center justify-center max-md:min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
          <RetroComputerSection productDesignHref="/#product-design" showHint />
        </div>
      </main>
    </div>
  );
}

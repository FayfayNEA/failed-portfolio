import Link from "next/link";

export function WorkCategoryPlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-full bg-transparent text-zinc-900 [font-family:var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif]">
      <main className="mx-auto max-w-xl px-6 py-10 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          Work
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-zinc-600">{description}</p>
        <Link
          href="/work"
          className="mt-10 inline-block text-sm tracking-wide text-[#5a6648] underline decoration-[#5a6648]/40 underline-offset-4 hover:text-zinc-900"
        >
          ← Back to work
        </Link>
      </main>
    </div>
  );
}

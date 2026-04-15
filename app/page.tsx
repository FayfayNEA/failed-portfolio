export default function Home() {
  return (
    <main className="flex h-[100dvh] min-h-[100dvh] w-full flex-col overflow-hidden bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
      {/* Reserve space under fixed nav (+40px breathing room) */}
      <div className="pointer-events-none h-[70px] shrink-0" aria-hidden />
      <iframe
        src="/home/index.html"
        className="block min-h-0 w-full flex-1 border-0"
        title="Failenn Aselta - Home"
      />
    </main>
  );
}

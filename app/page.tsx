export default function Home() {
  return (
    <main className="grid h-[100dvh] min-h-[100dvh] w-full grid-rows-[1fr] overflow-hidden bg-[var(--canvas)] [background-image:radial-gradient(var(--canvas-dot)_1px,transparent_1px)] [background-size:20px_20px] [background-attachment:fixed]">
      <iframe
        src="/home/index.html"
        className="block h-full w-full border-0"
        title="Failenn Aselta - Home"
      />
    </main>
  );
}

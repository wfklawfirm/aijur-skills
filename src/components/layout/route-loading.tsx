export function RouteLoading({ rows = 4 }: { rows?: number }) {
  return (
    <main className="mx-auto w-full max-w-lg px-4 py-4 app-scroll" aria-busy="true" aria-live="polite">
      <div className="skeleton mb-6 h-7 w-1/2" />
      <div className="mb-8 grid grid-cols-2 gap-3">
        <div className="skeleton h-24 rounded-[var(--radius-card)]" />
        <div className="skeleton h-24 rounded-[var(--radius-card)]" />
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="skeleton h-16 rounded-[var(--radius-card)]" />
        ))}
      </div>
    </main>
  );
}

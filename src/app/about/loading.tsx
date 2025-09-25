export default function LoadingAbout() {
  return (
    <main className="mx-auto w-full motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading about">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10 rounded-2xl border bg-white/50 p-8 shadow-sm dark:bg-neutral-900/50">
          <div className="max-w-3xl space-y-3">
            <div className="h-8 w-64 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-4 flex gap-3">
              <div className="h-9 w-28 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-9 w-28 animate-pulse rounded border bg-transparent dark:border-neutral-800" />
            </div>
          </div>
        </section>

        <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
              <div className="h-5 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="mt-2 h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="mt-1 h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <div className="h-6 w-40 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="h-4 w-40 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <div className="h-6 w-40 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="h-4 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-1 h-4 w-4/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border bg-white/50 p-6 text-center shadow-sm dark:bg-neutral-900/50">
          <div className="mx-auto h-6 w-56 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mx-auto mt-2 h-4 w-80 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-5 mx-auto h-9 w-40 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        </section>
      </div>
    </main>
  );
}



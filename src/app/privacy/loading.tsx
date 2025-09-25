export default function LoadingPrivacy() {
  return (
    <main className="mx-auto w-full motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading privacy">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10 rounded-2xl border bg-white/50 p-8 shadow-sm dark:bg-neutral-900/50">
          <div className="max-w-3xl space-y-3">
            <div className="h-8 w-56 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </section>

        {Array.from({ length: 3 }).map((_, i) => (
          <section key={i} className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
            <div className="h-6 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-3 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
          </section>
        ))}

        <section className="rounded-2xl border bg-white/50 p-6 text-center shadow-sm dark:bg-neutral-900/50">
          <div className="mx-auto h-6 w-60 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mx-auto mt-2 h-4 w-72 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-5 mx-auto h-9 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        </section>
      </div>
    </main>
  );
}



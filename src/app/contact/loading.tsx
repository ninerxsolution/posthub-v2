export default function LoadingContact() {
  return (
    <main className="mx-auto w-full motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading contact">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10 rounded-2xl border bg-white/50 p-8 shadow-sm dark:bg-neutral-900/50">
          <div className="max-w-3xl space-y-3">
            <div className="h-8 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </section>

        <section className="rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="h-12 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800 sm:col-span-1" />
            <div className="h-12 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800 sm:col-span-1" />
            <div className="h-12 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800 sm:col-span-2" />
            <div className="h-32 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800 sm:col-span-2" />
            <div className="h-9 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800 sm:col-span-2" />
          </div>
        </section>
      </div>
    </main>
  );
}



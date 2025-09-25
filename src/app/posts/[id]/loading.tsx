export default function LoadingPostDetail() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8 motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading post">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="h-4 w-20 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="flex items-center gap-3">
          <div className="h-4 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-9 w-20 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-9 w-9 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-9 w-9 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>

      <div className="mb-6">
        <div className="h-8 w-3/4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div className="h-4 w-20 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-4 w-4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex gap-2">
            <div className="h-4 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </div>

      <div className="mb-8 h-64 w-full animate-pulse rounded-xl border bg-neutral-200 dark:bg-neutral-800" />

      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <div className="h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-4 w-4/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-6 h-6 w-1/3 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  );
}



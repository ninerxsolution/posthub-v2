import FeedListSkeleton from "@/components/skeletons/FeedListSkeleton";

export default function LoadingPosts() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading posts">
      <div className="mb-6 h-8 w-32 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border bg-background shadow-sm">
            <div className="h-40 w-full animate-pulse bg-neutral-200 dark:bg-neutral-800" />
            <div className="p-4 space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-5 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="h-5 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                </div>
                <div className="h-4 w-10 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



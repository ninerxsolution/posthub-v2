import { LeftSidebarSkeleton, RightSidebarSkeleton } from "@/components/skeletons/SidebarsSkeleton";

export default function LoadingSearch() {
  return (
    <main className="mx-auto w-full motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading search">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <LeftSidebarSkeleton />
        <section className="lg:col-span-6">
          <div className="px-4 sm:px-6 lg:px-0 py-8">
            <div className="mb-6 h-8 w-24 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-xl border p-4">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="mt-2 h-4 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="mt-1 h-4 w-5/6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <RightSidebarSkeleton />
      </div>
    </main>
  );
}



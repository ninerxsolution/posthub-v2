//
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LeftSidebarSkeleton, RightSidebarSkeleton } from "@/components/skeletons/SidebarsSkeleton";
import ResultsList from "@/components/search/ResultsList";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
};

const MOCK: Post[] = Array.from({ length: 24 }).map((_, i) => ({
  id: String(i + 1),
  title: `Sample Post Title ${i + 1}`,
  excerpt:
    "This is a short excerpt for the post. It provides a quick overview of the content.",
  tags: ["react", i % 2 ? "nextjs" : "design", i % 3 ? "tailwind" : "ui"],
}));

const LeftSidebar = dynamic(() => import("@/components/LeftSidebar"), { suspense: true });
const RightSidebar = dynamic(() => import("@/components/RightSidebar"), { suspense: true });

export default function SearchPage({ searchParams }: { searchParams: { q?: string; page?: string } }) {
  const q = (searchParams.q ?? "").trim();
  // client-side load-more; no pagination

  const filtered = q
    ? MOCK.filter((p) =>
        [p.title, p.excerpt, p.tags.join(" ")].some((f) => f.toLowerCase().includes(q.toLowerCase()))
      )
    : MOCK;

  const total = filtered.length;
  const items = filtered;

  return (
    <main className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Suspense fallback={<LeftSidebarSkeleton />}>
          <LeftSidebar />
        </Suspense>
        <section className="lg:col-span-6">
          <div className="px-4 sm:px-6 lg:px-0 py-8">
            <header className="mb-6">
              <h1 className="text-2xl font-bold">Search</h1>
              {q ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  Showing {total} result{total === 1 ? "" : "s"} for “{q}”.
                </p>
              ) : (
                <p className="mt-1 text-sm text-muted-foreground">Type in the search bar to find posts.</p>
              )}
            </header>

            <ResultsList items={items} initialCount={9} step={6} />

            {total === 0 && (
              <div className="mt-16 text-center text-sm text-muted-foreground">No results found.</div>
            )}

            {/* Load more handles showing additional items; no pagination */}
          </div>
        </section>
        <Suspense fallback={<RightSidebarSkeleton />}>
          <RightSidebar />
        </Suspense>
      </div>
    </main>
  );
}



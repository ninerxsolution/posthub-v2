"use client";
import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  cover?: string;
  tags: string[];
  author: string;
  minutes: number;
};

const MOCK_POSTS: Post[] = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `Sample Post Title ${i + 1}`,
  excerpt:
    "This is a short excerpt for the post. It provides a quick overview of the content to invite readers to click and read more.",
  cover:
    i % 2 === 0
      ? `https://picsum.photos/seed/${i + 1}/600/400`
      : undefined,
  tags: ["react", "nextjs", i % 2 ? "design" : "tailwind"],
  author: i % 2 ? "Jane Doe" : "John Smith",
  minutes: 5 + (i % 6),
}));

export default function PostsPage() {
  const params = useSearchParams();
  const q = params.get("search")?.toLowerCase().trim() || "";

  const posts = useMemo(() => {
    if (!q) return MOCK_POSTS;
    return MOCK_POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [q]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Posts</h1>
          {q ? (
            <p className="mt-1 text-sm text-muted-foreground">
              Showing results for <span className="font-medium">“{q}”</span>
            </p>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">Latest community posts</p>
          )}
        </div>
        <Link
          href="/posts/create"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Create post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-xl border p-8 text-center text-sm text-muted-foreground">
          No posts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-md">
              {post.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-40 w-full object-cover object-center"
                />
              ) : (
                <div className="h-40 w-full bg-muted" />
              )}
              <div className="p-4">
                <h2 className="line-clamp-2 text-base font-semibold group-hover:underline">
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-xs">
                    {post.tags.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-1">#{t}</span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{post.minutes} min</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}



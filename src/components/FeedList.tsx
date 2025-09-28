"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  cover?: string;
  tags: string[];
  author: string;
  minutes: number;
  publishedAt: string;
};

export default function FeedList() {
  const router = useRouter();
  const [visible, setVisible] = useState(6);

  const handleCreatePost = () => {
    router.push("/posts/create");
  };

  const TOTAL = 30;
  const items: Post[] = Array.from({ length: TOTAL }).map((_, idx) => ({
    id: String(idx + 1),
    title: `Sample blog post title ${idx + 1}`,
    excerpt: "This is a short excerpt of the content to give readers a quick idea of what the post is about. It should be enticing enough to click through and read more.",
    cover: idx % 3 === 0 ? `https://picsum.photos/seed/${idx + 1}/800/400` : undefined,
    tags: ["react", "nextjs", idx % 2 ? "design" : "tailwind"],
    author: idx % 2 ? "Jane Doe" : "John Smith",
    minutes: 5 + (idx % 6),
    publishedAt: `${idx + 1}h ago`,
  }));

  const canLoadMore = visible < items.length;

  return (
    <section className="lg:col-span-6">
      <div className="space-y-4">
        {/* Create a post section */}
        <div className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
            <button
              onClick={handleCreatePost}
              className="flex-1 rounded-full border border-neutral-200 px-4 py-3 text-left text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              Write your story.
            </button>
          </div>
          
        </div>

        {items.slice(0, visible).map((post) => (
          <article key={post.id} className="group overflow-hidden rounded-xl border bg-white/50 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50">
            {post.cover && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-5">
              <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  {post.author}
                </span>
                <span>·</span>
                <time dateTime="2025-09-23">{post.publishedAt}</time>
                <span>·</span>
                <span>{post.minutes} min read</span>
              </div>
              <h2 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-neutral-100 px-2 py-1 dark:bg-neutral-800">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity" 
                  onClick={() => router.push(`/posts/${post.id}`)}
                >
                  Read
                </button>
              </div>
            </div>
          </article>
        ))}

        {canLoadMore && (
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + 6, items.length))}
              className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}



import Link from "next/link";

export default function RightSidebar() {
  return (
    <aside className="hidden lg:col-span-3 lg:block">
      <div className="sticky space-y-4 top-20">
        <section className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <h3 className="mb-3 text-sm font-semibold">Hot Topics</h3>
          <ul className="space-y-2 text-sm">
            {[
              { tag: "nextjs", count: "1.2k" },
              { tag: "react", count: "2.1k" },
              { tag: "typescript", count: "980" },
              { tag: "ai", count: "3.4k" },
              { tag: "design", count: "760" },
            ].map((t) => (
              <li key={t.tag} className="flex items-center justify-between">
                <Link 
                  href={`/search?q=${encodeURIComponent(t.tag)}`}
                  className="text-primary hover:underline"
                >
                  #{t.tag}
                </Link>
                <span className="text-xs text-muted-foreground">{t.count}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <h3 className="mb-3 text-sm font-semibold">Recommended</h3>
          <ul className="space-y-3 text-sm">
            {[
              { id: "1", title: "Building Scalable React Applications", author: "Jane Doe", minutes: 8 },
              { id: "2", title: "Next.js 14 Performance Optimization", author: "John Smith", minutes: 12 },
              { id: "3", title: "TypeScript Best Practices Guide", author: "Sarah Wilson", minutes: 6 },
            ].map((post) => (
              <li key={post.id} className="group">
                <Link href={`/posts/${post.id}`} className="block">
                  <div className="font-medium group-hover:underline">{post.title}</div>
                  <div className="text-xs text-muted-foreground">by {post.author} · {post.minutes} min</div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}



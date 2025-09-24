"use client";
import Link from "next/link";
import { useState } from "react";

type Item = {
  id: string;
  title: string;
  cover?: string;
  excerpt: string;
  minutes: number;
};

export default function ProfileTabs({
  posts,
  bookmarks,
  archive,
}: {
  posts: Item[];
  bookmarks: Item[];
  archive: Item[];
}) {
  const [tab, setTab] = useState<"posts" | "bookmarks" | "archive">("posts");

  return (
    <div>
      <div className="mt-6 flex items-center gap-4 border-b text-sm">
        <button
          className={`px-2 py-3 font-medium ${
            tab === "posts"
              ? "-mb-px border-b-2 border-foreground"
              : "text-muted-foreground hover:text-foreground transition-colors"
          }`}
          onClick={() => setTab("posts")}
        >
          Posts
        </button>
        <button
          className={`px-2 py-3 ${
            tab === "bookmarks"
              ? "-mb-px border-b-2 border-foreground font-medium"
              : "text-muted-foreground hover:text-foreground transition-colors"
          }`}
          onClick={() => setTab("bookmarks")}
        >
          Bookmarks
        </button>
        <button
          className={`px-2 py-3 ${
            tab === "archive"
              ? "-mb-px border-b-2 border-foreground font-medium"
              : "text-muted-foreground hover:text-foreground transition-colors"
          }`}
          onClick={() => setTab("archive")}
        >
          Archive
        </button>
      </div>

      {tab === "posts" && (
        <Grid items={posts} />
      )}
      {tab === "bookmarks" && (
        <section className="mt-6">
          <Grid items={bookmarks} />
        </section>
      )}
      {tab === "archive" && (
        <section className="mt-6">
          <Grid items={archive} />
        </section>
      )}
    </div>
  );
}

function Grid({ items }: { items: Item[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article key={p.id} className="group overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-md">
          {p.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.cover} alt="" className="h-40 w-full object-cover object-center" />
          ) : (
            <div className="h-40 w-full bg-muted" />
          )}
          <div className="p-4">
            <h3 className="line-clamp-2 text-base font-semibold group-hover:underline">
              <Link href={`/post/${p.id}`}>{p.title}</Link>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.minutes} min</span>
              <Link href={`/post/${p.id}`} className="rounded-md border px-2 py-1 hover:bg-accent">Read</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}



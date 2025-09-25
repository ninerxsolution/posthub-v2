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
  drafts,
  initialTab = "posts",
}: {
  posts: Item[];
  bookmarks: Item[];
  archive: Item[];
  drafts: Item[];
  initialTab?: "posts" | "bookmarks" | "archive" | "drafts";
}) {
  const [tab, setTab] = useState<"posts" | "bookmarks" | "archive" | "drafts">(initialTab);

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
        <button
          className={`px-2 py-3 ${
            tab === "drafts"
              ? "-mb-px border-b-2 border-foreground font-medium"
              : "text-muted-foreground hover:text-foreground transition-colors"
          }`}
          onClick={() => setTab("drafts")}
        >
          Drafts
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
      {tab === "drafts" && (
        <section className="mt-6">
          <DraftGrid items={drafts} />
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
            <img src={p.cover} alt="" className="h-56 w-full object-cover object-center" />
          ) : (
            <div className="h-56 w-full bg-muted" />
          )}
          <div className="p-5">
            <h3 className="line-clamp-2 text-lg font-semibold group-hover:underline">
              <Link href={`/posts/${p.id}`}>{p.title}</Link>
            </h3>
            <p className="mt-2 line-clamp-4 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{p.minutes} min read</span>
              <Link href={`/posts/${p.id}`} className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent">Read</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function DraftGrid({ items }: { items: Item[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article key={p.id} className="group overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-md">
          {p.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.cover} alt="" className="h-56 w-full object-cover object-center" />
          ) : (
            <div className="h-56 w-full bg-muted" />
          )}
          <div className="p-5">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="line-clamp-2 text-lg font-semibold group-hover:underline">
                <Link href={`/posts/${p.id}/edit`}>{p.title}</Link>
              </h3>
              <span className="rounded-md border px-2 py-0.5 text-xs">Draft</span>
            </div>
            <p className="mt-2 line-clamp-4 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">~ {p.minutes} min</span>
              <Link href={`/posts/${p.id}/edit`} className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent">Continue editing</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}



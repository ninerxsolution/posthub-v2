"use client";
import Link from "next/link";
import { useState } from "react";

export type ResultItem = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
};

export default function ResultCard({ item }: { item: ResultItem }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.excerpt.length > 180;
  const shown = expanded || !isLong ? item.excerpt : item.excerpt.slice(0, 180) + "…";

  return (
    <article className="rounded-xl border bg-background p-5 shadow-sm transition hover:shadow-md">
      <h2 className="text-base font-semibold leading-snug hover:underline">
        <Link href={`/posts/${item.id}`}>{item.title}</Link>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{shown}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs text-primary hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2 text-xs">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-md bg-muted px-2 py-1">#{t}</span>
          ))}
        </div>
        <Link href={`/posts/${item.id}`} className="rounded-md border px-2 py-1 text-xs hover:bg-accent">Read</Link>
      </div>
    </article>
  );
}



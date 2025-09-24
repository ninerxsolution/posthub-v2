"use client";
import { useState } from "react";
import ResultCard, { ResultItem } from "@/components/search/ResultCard";

export default function ResultsList({ items, initialCount = 9, step = 6 }: { items: ResultItem[]; initialCount?: number; step?: number; }) {
  const [visible, setVisible] = useState(Math.min(initialCount, items.length));
  const canLoadMore = visible < items.length;

  const onLoadMore = () => {
    setVisible((v) => Math.min(v + step, items.length));
  };

  return (
    <div>
      <div className="space-y-4">
        {items.slice(0, visible).map((p) => (
          <ResultCard key={p.id} item={p} />
        ))}
      </div>
      {canLoadMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onLoadMore}
            className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}



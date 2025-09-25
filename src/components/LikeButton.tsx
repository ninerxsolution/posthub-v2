"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton({ initialLiked = false, initialCount = 0 }: { initialLiked?: boolean; initialCount?: number; }) {
  const [liked, setLiked] = useState<boolean>(initialLiked);
  const [count, setCount] = useState<number>(initialCount);

  const toggle = () => {
    setLiked((v) => !v);
    setCount((c) => (liked ? Math.max(0, c - 1) : c + 1));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={liked}
      className={`inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent ${liked ? "text-red-500" : "text-foreground"}`}
    >
      <Heart className={`h-4 w-4 ${liked ? "fill-red-500" : ""}`} />
      <span>{count}</span>
    </button>
  );
}



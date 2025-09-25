"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Share2 } from "lucide-react";

export default function ShareButtons({ id, title }: { id: string; title: string }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const shareTo = (platform: "twitter" | "facebook" | "linkedin") => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = encodeURIComponent(`${origin}/posts/${id}`);
    const text = encodeURIComponent(title);
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <Button type="button" variant="outline" className="inline-flex items-center gap-2" onClick={() => setOpen((v) => !v)}>
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-44 rounded-md border bg-background p-2 shadow-lg">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
            onClick={() => shareTo("twitter")}
          >
            <Twitter className="h-4 w-4" />
            X / Twitter
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
            onClick={() => shareTo("facebook")}
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
            onClick={() => shareTo("linkedin")}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </button>
        </div>
      )}
    </div>
  );
}



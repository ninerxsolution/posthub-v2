"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type RedirectOverlayProps = {
  to: string;
  label?: string;
  delayMs?: number;
};

export default function RedirectOverlay({ to, label = "Redirecting…", delayMs = 0 }: RedirectOverlayProps) {
  const router = useRouter();
  const [active] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      router.replace(to);
    }, delayMs);
    return () => clearTimeout(id);
  }, [router, to, delayMs]);

  if (!active) return null;
  return (
    <div
      role="alert"
      aria-busy="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-lg">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}



export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800 motion-safe:animate-in motion-safe:fade-in-50 ${className}`} />
  );
}

export function TextLine({ width = "w-full", className = "" }: { width?: string; className?: string }) {
  return <Skeleton className={`${width} h-4 ${className}`} />;
}

export function AvatarSkeleton({ size = 40, className = "" }: { size?: number; className?: string }) {
  const style = { width: size, height: size } as React.CSSProperties;
  return <div style={style} className={`animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800 motion-safe:animate-in motion-safe:fade-in-50 ${className}`} />;
}

export function CardSkeleton({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50 motion-safe:animate-in motion-safe:fade-in-50 ${className}`}>
      {children}
    </div>
  );
}



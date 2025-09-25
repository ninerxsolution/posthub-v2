"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideChrome = pathname === "/welcome";
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Start a subtle top progress indicator on path changes
    setShowProgress(true);
    setProgress(10);

    // Simulate progress until content settles
    const start = performance.now();
    const step = () => {
      setProgress((p) => (p < 90 ? p + Math.random() * 10 : p));
      timerRef.current = window.setTimeout(step, 120);
    };
    timerRef.current = window.setTimeout(step, 120);

    // Ensure a minimum visible time to avoid flicker
    const MIN_MS = 350;
    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_MS - elapsed);
      window.setTimeout(() => {
        setProgress(100);
        window.setTimeout(() => setShowProgress(false), 150);
      }, remaining);
    };

    // Finish once this effect cleans up (route stabilized)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      finish();
    };
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {showProgress && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {!hideChrome && <Navbar />}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      {<Footer />}
    </div>
  );
}



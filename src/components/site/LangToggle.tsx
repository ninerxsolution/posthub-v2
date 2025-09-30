"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";

export default function LangToggle() {
  const { lang, setLang, isHydrated } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const selectLang = (value: "th" | "en") => {
    setLang(value);
    setOpen(false);
  };

  const flagFor = (value: "th" | "en") => (value === "th" ? "🇹🇭" : "🇺🇸");

  return (
    <div
      ref={containerRef}
      className="relative text-xs"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Button
        type="button"
        variant="outline"
        className="h-9 px-1.5"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mr-1" aria-hidden>
          {isHydrated ? flagFor(lang) : "🇹🇭"}
        </span>
        {isHydrated ? lang.toUpperCase() : "TH"}
      </Button>
      <div
        role="menu"
        className={`flex flex-col gap-1 absolute right-0 z-20 mt-2 w-20 rounded-md border bg-background p-1 shadow-lg origin-top-right transform transition ease-out duration-150 ${
          open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <button
          type="button"
          className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent ${
            lang === "th" ? "bg-accent" : ""
          }`}
          onClick={() => selectLang("th")}
        >
          <span aria-hidden>🇹🇭</span>
          <span>TH</span>
        </button>
        <button
          type="button"
          className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent ${
            lang === "en" ? "bg-accent" : ""
          }`}
          onClick={() => selectLang("en")}
        >
          <span aria-hidden>🇺🇸</span>
          <span>EN</span>
        </button>
      </div>
    </div>
  );
}

"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "./dictionaries/en";
import { th } from "./dictionaries/th";

type Lang = "th" | "en";
type Dict = typeof en | typeof th;

type LanguageContextValue = {
  lang: Lang;
  dict: Dict;
  setLang: (l: Lang) => void;
  isHydrated: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with "th" to match server-side rendering
  const [lang, setLang] = useState<Lang>("th");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved language preference after hydration
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved !== lang) {
      setLang(saved);
    }
    setIsHydrated(true);
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    if (isHydrated) {
      try { 
        localStorage.setItem("lang", lang); 
      } catch {}
    }
  }, [lang, isHydrated]);

  const dict = useMemo(() => (lang === "th" ? th : en), [lang]);

  const value = useMemo(() => ({ lang, dict, setLang, isHydrated }), [lang, dict, isHydrated]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}



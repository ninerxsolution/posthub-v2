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
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const dict = useMemo(() => (lang === "th" ? th : en), [lang]);

  const value = useMemo(() => ({ lang, dict, setLang }), [lang, dict]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}



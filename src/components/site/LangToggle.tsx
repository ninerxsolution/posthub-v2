"use client";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2 text-xs">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        value={lang}
        onChange={(e) => setLang(e.target.value as "th" | "en")}
        className="h-9 rounded-md border bg-background px-2 text-sm shadow-sm focus:outline-none"
      >
        <option value="th">TH</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
}

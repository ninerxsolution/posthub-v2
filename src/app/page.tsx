
"use client";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Home() {
  const { dict } = useLanguage();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] font-bold items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {dict.home.hello}
    </div>
  );
}

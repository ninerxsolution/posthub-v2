"use client";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutPage() {
  const { dict } = useLanguage();
  return (
    <div className="py-8">{dict.about.hello}</div>
  );
}



"use client";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactPage() {
  const { dict } = useLanguage();
  return (
    <div className="py-8">{dict.contact.hello}</div>
  );
}



"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function NotFound() {
  const { dict } = useLanguage();
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-2 text-sm text-muted-foreground">{dict.notFound.code}</p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{dict.notFound.title}</h1>
      <p className="mt-2 max-w-md text-pretty text-sm text-muted-foreground">
        {dict.notFound.description}
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
        >
          {dict.notFound.backHome}
        </Link>
      </div>
    </section>
  );
}



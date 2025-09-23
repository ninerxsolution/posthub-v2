"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import LangToggle from "./LangToggle";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const { dict } = useLanguage();
  const pathname = usePathname();
  const hideChrome = pathname === "/welcome";

  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} PostHub. {dict.footer.copyright}</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy" className="text-foreground/80 hover:text-foreground">{dict.footer.privacy}</Link>
            <Link href="/terms" className="text-foreground/80 hover:text-foreground">{dict.footer.terms}</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground">{dict.footer.contact}</Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">{dict.footer.about}</Link>
            {hideChrome && <LangToggle />}
            {hideChrome && <ThemeToggle />}
          </nav>
        </div>
      </div>
    </footer>
  );
}



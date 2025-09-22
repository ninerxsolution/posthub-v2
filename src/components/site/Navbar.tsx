"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const { dict } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">PostHub</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {[{href:"/",label:dict.nav.home},{href:"/posts",label:dict.nav.posts},{href:"/about",label:dict.nav.about},{href:"/contact",label:dict.nav.contact}].map((item) => (
              <Link key={item.href} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
            <LangToggle />
            <ThemeToggle />
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background hover:bg-accent"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} grid transition-all duration-200 ease-out md:hidden`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 pb-4 pt-2">
              <div className="px-3 pb-2 flex items-center gap-3">
                <LangToggle />
                <ThemeToggle />
              </div>
              {[{href:"/",label:dict.nav.home},{href:"/posts",label:dict.nav.posts},{href:"/about",label:dict.nav.about},{href:"/contact",label:dict.nav.contact}].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-base text-foreground/90 hover:bg-accent hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import { useLanguage } from "@/i18n/LanguageProvider";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  // { href: "/posts", label: "Posts" },
];

export default function Navbar() {
  const { dict } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">PostHub</span>
            </Link>
          </div>

          

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Search post content */}
          <form onSubmit={onSearchSubmit} className="hidden md:block flex-1 max-w-md mx-6">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-full border bg-background pl-9 pr-3 py-2 text-sm transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </form>
            {navItems.map((item) => (
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
            <span className="relative inline-block h-5 w-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transform transition-all duration-200 ease-out ${
                  isOpen ? "opacity-0 scale-75 -rotate-90" : "opacity-100 scale-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transform transition-all duration-200 ease-out ${
                  isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu (overlay) */}
        <div
          className={`w-full md:hidden fixed inset-x-0 top-16 z-50 origin-top transform transition-all duration-200 ease-out ${
            isOpen ? "max-h-full opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="border border-t-0 bg-background shadow-lg">
              <div className="flex flex-col gap-2 pb-4 pt-2">
                <form onSubmit={onSearchSubmit} className="px-3">
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
                      <Search className="h-4 w-4" />
                    </span>
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search posts..."
                      className="w-full rounded-md border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </form>
                <div className="px-3 pb-2 flex items-center gap-3">
                  <LangToggle />
                  <ThemeToggle />
                </div>
                {navItems.map((item) => (
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
      </div>
    </header>
  );
}



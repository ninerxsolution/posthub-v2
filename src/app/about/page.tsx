"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-8 shadow-sm dark:bg-neutral-900/50">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight">About PostHub</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              PostHub is a modern space to write, share, and discover ideas. We focus on a clean
              reading experience, fast performance, and a friendly community for builders and
              creators.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/posts/create" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                Start writing
              </Link>
              <Link href="/search" className="rounded-md border px-4 py-2 text-sm hover:bg-accent">
                Explore posts
              </Link>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              title: "For writers",
              body:
                "A distraction‑free editor, drafts, and simple publishing so you can focus on your ideas.",
            },
            {
              title: "For readers",
              body:
                "Clean typography, topics you love, and tools to bookmark, react, and join the discussion.",
            },
            {
              title: "For everyone",
              body:
                "Fast by default, accessible, and built with a thoughtful design system for great UX.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border bg-white/50 p-6 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50">
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Features</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Hot topics & search", desc: "Discover content via tags and full‑text search." },
              { title: "Notifications", desc: "Stay updated when people like, comment, or mention you." },
              { title: "Comments & replies", desc: "Threaded conversations with @mentions." },
              { title: "Drafts & editing", desc: "Save drafts and continue editing anytime." },
              { title: "Profiles", desc: "Showcase your work and follow other creators." },
              { title: "Light & dark themes", desc: "Comfortable reading in any environment." },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border p-4">
                <div className="font-medium">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech & principles */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Built with care</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="font-medium">Tech stack</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Next.js 14 & TypeScript</li>
                <li>Tailwind CSS</li>
                <li>App Router & React Server Components</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <div className="font-medium">Design principles</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Performance first</li>
                <li>Accessible & inclusive</li>
                <li>Clear, calm interfaces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team (mock) */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">The team</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border p-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
                <div>
                  <div className="font-medium">Teammate #{i + 1}</div>
                  <div className="text-sm text-muted-foreground">Product & Engineering</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border bg-white/50 p-6 text-center shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Ready to share your ideas?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Join the community of designers, developers, and writers publishing on PostHub.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link href="/posts/create" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Create your first post
            </Link>
            <Link href="/contact" className="rounded-md border px-4 py-2 text-sm hover:bg-accent">
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function RightSidebar() {
  return (
    <aside className="hidden lg:col-span-3 lg:block">
      <div className="sticky top-4 space-y-4 top-[100px]">
        <section className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <h3 className="mb-3 text-sm font-semibold">Hot Topics</h3>
          <ul className="space-y-2 text-sm">
            {[
              { tag: "nextjs", count: "1.2k" },
              { tag: "react", count: "2.1k" },
              { tag: "typescript", count: "980" },
              { tag: "ai", count: "3.4k" },
              { tag: "design", count: "760" },
            ].map((t) => (
              <li key={t.tag} className="flex items-center justify-between">
                <a className="text-primary hover:underline" href="#">#{t.tag}</a>
                <span className="text-xs text-muted-foreground">{t.count}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <h3 className="mb-3 text-sm font-semibold">Recommended</h3>
          <ul className="space-y-3 text-sm">
            {[1, 2, 3].map((id) => (
              <li key={id} className="group">
                <a href="#" className="block">
                  <div className="font-medium group-hover:underline">A great read about performance</div>
                  <div className="text-xs text-muted-foreground">by Jane Doe · 8 min</div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}



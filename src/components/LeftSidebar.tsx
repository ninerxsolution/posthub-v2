export default function LeftSidebar() {
  return (
    <aside className="hidden lg:col-span-3 lg:block ">
      <div className="sticky top-4 space-y-4 top-[90px]">
        <section className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
            <div>
              <h2 className="text-base font-semibold">Your Name</h2>
              <p className="text-xs text-muted-foreground">@username</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-md bg-neutral-50 p-2 dark:bg-neutral-800">
              <div className="text-sm font-semibold">128</div>
              <div className="text-muted-foreground">Posts</div>
            </div>
            <div className="rounded-md bg-neutral-50 p-2 dark:bg-neutral-800">
              <div className="text-sm font-semibold">2.4k</div>
              <div className="text-muted-foreground">Followers</div>
            </div>
            <div className="rounded-md bg-neutral-50 p-2 dark:bg-neutral-800">
              <div className="text-sm font-semibold">318</div>
              <div className="text-muted-foreground">Following</div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <h3 className="mb-3 text-sm font-semibold">Shortcuts</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="text-primary hover:underline" href="/jane">Profile</a></li>
            <li><a className="text-primary hover:underline" href="#">New post</a></li>
            <li><a className="text-primary hover:underline" href="#">Drafts</a></li>
            <li><a className="text-primary hover:underline" href="#">Bookmarks</a></li>
          </ul>
        </section>
      </div>
    </aside>
  );
}



"use client";
import { useRouter } from "next/navigation";

export default function FeedList() {
  const router = useRouter();

  const handleCreatePost = () => {
    router.push("/post/create");
  };

  return (
    <section className="lg:col-span-6">
      <div className="space-y-4">
        {/* Create a post section */}
        <div className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
            <button
              onClick={handleCreatePost}
              className="flex-1 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              Write your story.
            </button>
          </div>
          
        </div>

        {[...Array(6)].map((_, idx) => (
          <article key={idx} className="rounded-xl border bg-white/50 p-5 shadow-sm transition hover:shadow-md dark:bg-neutral-900/50">
            <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-neutral-300 dark:bg-neutral-700" />Author Name</span>
              <span>·</span>
              <time dateTime="2025-09-23">2h ago</time>
            </div>
            <h2 className="text-lg font-semibold leading-snug">Sample blog post title {idx + 1}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              This is a short excerpt of the content to give readers a quick idea of what the post is about. It should be enticing enough to click through and read more.
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2 text-xs">
                <span className="rounded-md bg-neutral-100 px-2 py-1 dark:bg-neutral-800">#react</span>
                <span className="rounded-md bg-neutral-100 px-2 py-1 dark:bg-neutral-800">#nextjs</span>
                <span className="rounded-md bg-neutral-100 px-2 py-1 dark:bg-neutral-800">#tailwind</span>
              </div>
              <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:opacity-90">Read</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



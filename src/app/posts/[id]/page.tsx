import Link from "next/link";
import { notFound } from "next/navigation";
import { Bookmark, Edit, Share2, EyeOff, Flag } from "lucide-react";
import LikeButton from "@/components/LikeButton";
import CommentsSection from "@/components/CommentsSection";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  cover?: string;
  tags: string[];
  author: string;
  minutes: number;
};

const MOCK_POSTS: Post[] = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `Sample Post Title ${i + 1}`,
  excerpt:
    "This is a short excerpt for the post. It provides a quick overview of the content to invite readers to click and read more.",
  cover:
    i % 2 === 0
      ? `https://picsum.photos/seed/${i + 1}/1200/800`
      : undefined,
  tags: ["react", "nextjs", i % 2 ? "design" : "tailwind"],
  author: i % 2 ? "Jane Doe" : "John Smith",
  minutes: 5 + (i % 6),
}));

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const post = MOCK_POSTS.find((p) => p.id === params.id);
  if (!post) {
    return notFound();
  }
  const isOwner = params.id === "1";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link href="/posts" className="text-sm text-primary hover:underline">
          ← All posts
        </Link>
        {isOwner ? (
          <div className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground">{post.minutes} min read</div>
            <Link
              href={`/posts/${post.id}/edit`}
              className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent"
            >
              <Edit className="h-4 w-4" />
              Edit
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent"
              title="Unpublish"
              aria-label="Unpublish"
            >
              <EyeOff className="h-4 w-4" />
              Unpublish
            </button>
            <LikeButton initialLiked={false} initialCount={23} />
            <Link
              href={`/report?type=post&postId=${post.id}`}
              className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent"
            >
              <Flag className="h-4 w-4" />
              Report
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground">{post.minutes} min read</div>
            <button
              type="button"
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Follow
            </button>
            <button
              type="button"
              aria-label="Share"
              title="Share"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground shadow-sm transition-colors hover:bg-accent"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Bookmark post"
              title="Bookmark"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground shadow-sm transition-colors hover:bg-accent"
            >
              <Bookmark className="h-4 w-4" />
            </button>
            <LikeButton initialLiked={false} initialCount={23} />
            <Link
              href={`/report?type=post&postId=${post.id}`}
              className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent"
            >
              <Flag className="h-4 w-4" />
              Report
            </Link>
          </div>
        )}
      </div>

      <header className="mb-6">
        <h1 className="text-3xl font-bold leading-tight">{post.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>By {post.author}</span>
          <span>•</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {post.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover}
          alt={post.title}
          className="mb-8 h-auto w-full rounded-xl border object-cover"
        />
      ) : null}

      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ultricies, sapien at iaculis efficitur, arcu mi gravida nibh, sed
          laoreet lectus augue ut nunc. Integer ac ex id lorem tincidunt
          convallis. Nunc vitae bibendum nisl. Integer a justo vitae justo
          pulvinar tempus.
        </p>
        <p>
          Curabitur iaculis, urna non cursus dignissim, leo risus tristique
          purus, ut ultricies magna purus et ipsum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <h2>Subheading example</h2>
        <p>
          Quisque posuere, nibh id hendrerit lacinia, libero nisi sollicitudin
          ligula, vitae pharetra ligula mauris sed mi. Mauris id posuere augue.
          Duis sed posuere mauris, a pulvinar turpis.
        </p>
        <blockquote>
          Great stories are not written. They are rewritten.
        </blockquote>
        <p>
          Aliquam erat volutpat. Vivamus rhoncus arcu nec neque accumsan, in
          euismod lacus accumsan. Phasellus laoreet bibendum velit, at luctus
          velit ultrices non. Sed nec tellus nec augue vehicula porttitor.
        </p>
        <ul>
          <li>Key idea number one for this post</li>
          <li>Another helpful takeaway</li>
          <li>Final point to remember</li>
        </ul>
        <p>
          Donec non vehicula nisi. Cras a sapien congue, porttitor arcu sit amet,
          lacinia massa. Suspendisse potenti. Integer ultricies dictum mauris,
          a volutpat tortor viverra in.
        </p>
      </article>

      <CommentsSection />

      <hr className="my-10" />

      <section>
        <h3 className="mb-3 text-base font-semibold">Related posts</h3>
        <div className="grid grid-cols-1 gap-4">
          {MOCK_POSTS.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/posts/${p.id}`}
              className="group rounded-lg border p-4 hover:bg-accent"
            >
              <div className="flex items-start gap-3">
                <div className="h-14 w-20 overflow-hidden rounded bg-muted">
                  {p.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.cover} alt="" className="h-full w-full object-cover" />
                  ) : null}
                </div>
                <div>
                  <div className="line-clamp-2 font-medium group-hover:underline">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.minutes} min · {p.author}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}



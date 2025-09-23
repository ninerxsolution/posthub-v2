import Link from "next/link";
import { notFound } from "next/navigation";
type User = {
  username: string;
  name: string;
  bio?: string;
  avatar?: string;
  followers: number;
  following: number;
  posts: number;
};

const MOCK_USERS: User[] = [
  {
    username: "jane",
    name: "Jane Doe",
    bio: "Product designer and writer. I share ideas about UX and front‑end.",
    avatar: "https://i.pravatar.cc/150?img=5",
    followers: 2410,
    following: 318,
    posts: 42,
  },
  {
    username: "john",
    name: "John Smith",
    bio: "Full‑stack dev • TypeScript, Next.js, DX nerd.",
    avatar: "https://i.pravatar.cc/150?img=12",
    followers: 1530,
    following: 201,
    posts: 27,
  },
];

const MOCK_POSTS = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i + 1),
  title: `A thoughtful post #${i + 1}`,
  cover: i % 2 === 0 ? `https://picsum.photos/seed/profile-${i}/800/500` : undefined,
  excerpt:
    "Short excerpt of this article to tease the content and invite readers to click through.",
  minutes: 4 + (i % 5),
}));

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = MOCK_USERS.find((u) => u.username.toLowerCase() === params.username.toLowerCase());
  if (!user) return notFound();
  const isOwner = user.username.toLowerCase() === "jane"; // mock: jane is the signed-in user
  
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border p-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="h-20 w-20 overflow-hidden rounded-full border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold leading-tight">{user.name}</h1>
              {isOwner && (
                <span className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground">You</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
            {user.bio ? (
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{user.bio}</p>
            ) : null}
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span><span className="font-semibold text-foreground">{user.posts}</span> posts</span>
              <Link href={`/${user.username}/followers`} className="hover:underline">
                <span className="font-semibold text-foreground">{user.followers.toLocaleString()}</span> followers
              </Link>
              <Link href={`/${user.username}/following`} className="hover:underline">
                <span className="font-semibold text-foreground">{user.following}</span> following
              </Link>
            </div>
          </div>
          <div className="flex gap-2 self-stretch sm:self-auto">
            {isOwner ? (
              <>
                <button className="rounded-md border px-4 py-2 text-sm hover:bg-accent">Edit profile</button>
                <Link href="/posts/create" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">New post</Link>
              </>
            ) : (
              <>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Follow</button>
                <button className="rounded-md border px-4 py-2 text-sm hover:bg-accent">Share</button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tabs (static for mock) */}
      <div className="mt-6 flex items-center gap-4 border-b text-sm">
        <button className="-mb-px border-b-2 border-foreground px-2 py-3 font-medium">Posts</button>
        <button className="-mb-px border-b-2 border-transparent px-2 py-3 text-muted-foreground hover:border-foreground/30">About</button>
      </div>

      {/* Posts grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_POSTS.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-md">
            {p.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.cover} alt="" className="h-40 w-full object-cover object-center" />
            ) : (
              <div className="h-40 w-full bg-muted" />
            )}
            <div className="p-4">
              <h2 className="line-clamp-2 text-base font-semibold group-hover:underline">
                <Link href={`/post/${p.id}`}>{p.title}</Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.minutes} min</span>
                <Link href={`/post/${p.id}`} className="rounded-md border px-2 py-1 hover:bg-accent">Read</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}



"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { useRouter } from "next/navigation";
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

const MOCK_BOOKMARKS = Array.from({ length: 4 }).map((_, i) => ({
  id: String(i + 101),
  title: `Saved post #${i + 1}`,
  cover: i % 2 === 1 ? `https://picsum.photos/seed/bookmark-${i}/800/500` : undefined,
  excerpt:
    "A saved article you bookmarked to read later.",
  minutes: 3 + (i % 4),
}));

const MOCK_ARCHIVE = Array.from({ length: 3 }).map((_, i) => ({
  id: String(i + 201),
  title: `Archived post #${i + 1}`,
  cover: i % 2 === 0 ? `https://picsum.photos/seed/archive-${i}/800/500` : undefined,
  excerpt:
    "An older post that has been archived.",
  minutes: 5 + (i % 6),
}));

const MOCK_DRAFTS = Array.from({ length: 4 }).map((_, i) => ({
  id: String(i + 301),
  title: `Draft post #${i + 1}`,
  cover: i % 2 === 1 ? `https://picsum.photos/seed/draft-${i}/800/500` : undefined,
  excerpt:
    "This draft is not published yet. Continue writing when you're ready.",
  minutes: 3 + (i % 5),
}));

export default function ProfilePage({ params }: { params: { username: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = (searchParams.get("tab") || "posts").toLowerCase();
  const initialTab = ["posts", "bookmarks", "archive", "drafts"].includes(tabParam)
    ? (tabParam as "posts" | "bookmarks" | "archive" | "drafts")
    : "posts";
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
                <button className="rounded-md border px-4 py-2 text-sm hover:bg-accent" onClick={() => router.push(`/${user.username}/edit`)}>Edit profile</button>
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

      <ProfileTabs posts={MOCK_POSTS} bookmarks={MOCK_BOOKMARKS} archive={MOCK_ARCHIVE} drafts={MOCK_DRAFTS} initialTab={initialTab} />
    </div>
  );
}



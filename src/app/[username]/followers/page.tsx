import Link from "next/link";
import { notFound } from "next/navigation";

type User = {
  username: string;
  name: string;
  avatar?: string;
  bio?: string;
};

const MOCK_USERS: Record<string, User[]> = {
  jane: [
    { username: "john", name: "John Smith", avatar: "https://i.pravatar.cc/150?img=12", bio: "Full‑stack dev" },
    { username: "amy", name: "Amy Wong", avatar: "https://i.pravatar.cc/150?img=32", bio: "Writer" },
    { username: "mike", name: "Mike Ross", avatar: "https://i.pravatar.cc/150?img=3", bio: "Law enthusiast" },
  ],
  john: [
    { username: "jane", name: "Jane Doe", avatar: "https://i.pravatar.cc/150?img=5", bio: "Designer" },
    { username: "sara", name: "Sara Lee", avatar: "https://i.pravatar.cc/150?img=25", bio: "Frontend" },
  ],
};

export default function FollowersPage({ params }: { params: { username: string } }) {
  const list = MOCK_USERS[params.username.toLowerCase()];
  if (!list) return notFound();
  const isOwner = params.username.toLowerCase() === "jane";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Toggle followers/following */}
        <div className="mb-4 flex items-center gap-4 border-b text-sm">
          <Link
            href={`/${params.username}/followers`}
            className="-mb-px border-b-2 border-foreground px-2 py-3 font-medium"
          >
            Followers
          </Link>
          <Link
            href={`/${params.username}/following`}
            className="-mb-px border-b-2 border-transparent px-2 py-3 text-muted-foreground hover:border-foreground/30"
          >
            Following
          </Link>
        </div>

        {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Followers</h1>
        <Link href={`/${params.username}`} className="text-sm text-primary hover:underline">← Back to profile</Link>
      </div>

      <ul className="divide-y rounded-xl border bg-background">
        {list.map((u) => (
          <li key={u.username} className="flex items-center gap-4 p-4">
            <div className="h-12 w-12 overflow-hidden rounded-full border bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={u.avatar} alt={u.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <Link href={`/${u.username}`} className="font-medium hover:underline">{u.name}</Link>
              <div className="text-xs text-muted-foreground">@{u.username} · {u.bio}</div>
            </div>
            <div className="flex items-center gap-2">
              {isOwner ? (
                <button className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent">Remove</button>
              ) : (
                <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90">Follow</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

type Comment = {
  id: string;
  author: string;
  avatar?: string;
  time: string;
  content: string;
  replies?: Comment[];
};

const initialComments: Comment[] = [
  {
    id: "1",
    author: "Jane Doe",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    time: "1h ago",
    content:
      "Great read! I especially liked the part about performance profiling. @johnsmith what do you think?",
    replies: [
      {
        id: "1-1",
        author: "Author",
        time: "45m ago",
        content: "Thanks Jane! Totally agree — profiling first saves time later.",
      },
    ],
  },
  {
    id: "2",
    author: "John Smith",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    time: "2h ago",
    content: "Thanks for sharing. Would love to see a follow-up with examples.",
  },
];

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [text, setText] = useState("");
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const mentionRegex = useMemo(() => /@([A-Za-z0-9_\.\-]+)/g, []);

  const renderWithMentions = (content: string) => {
    const parts: Array<string | { mention: string }> = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = mentionRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.slice(lastIndex, match.index));
      }
      parts.push({ mention: match[1] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }
    return (
      <>
        {parts.map((p, i) =>
          typeof p === "string" ? (
            <span key={i}>{p}</span>
          ) : (
            <Link key={i} href={`/${p.mention}`} className="text-primary hover:underline">
              @{p.mention}
            </Link>
          )
        )}
      </>
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const content = text.trim();
    if (!content) return;
    setComments((prev) => [
      {
        id: String(prev.length + 1),
        author: "You",
        time: "just now",
        content,
      },
      ...prev,
    ]);
    setText("");
  };

  const onReplySubmit = (e: React.FormEvent, parentId: string) => {
    e.preventDefault();
    const content = replyText.trim();
    if (!content) return;
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === parentId) {
          const nextReplies = [...(c.replies ?? []), {
            id: `${parentId}-${(c.replies?.length ?? 0) + 1}`,
            author: "You",
            time: "just now",
            content,
          }];
          return { ...c, replies: nextReplies };
        }
        return c;
      })
    );
    setReplyText("");
    setReplyingToId(null);
  };

  return (
    <section aria-labelledby="comments-title" className="mt-10">
      <div className="mb-4 flex items-center gap-2">
        <MessageCircle className="h-5 w-5" />
        <h3 id="comments-title" className="text-base font-semibold">
          Comments
        </h3>
      </div>

      <form onSubmit={onSubmit} className="mb-6 flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            rows={3}
            className="w-full resize-none rounded-md border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>

      <ul className="space-y-4">
        {comments.map((c) => (
          <li key={c.id} className="rounded-xl border bg-background p-4">
            <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
              {c.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.avatar}
                  alt={c.author}
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <div className="h-6 w-6 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              )}
              <span className="inline-flex items-center gap-1">
                <Link href="#" className="hover:underline">
                  {c.author}
                </Link>
              </span>
              <span>·</span>
              <time>{c.time}</time>
            </div>
            <p className="text-sm leading-relaxed">{renderWithMentions(c.content)}</p>

            <div className="mt-3">
              <button
                type="button"
                className="text-xs text-primary hover:underline"
                onClick={() => setReplyingToId((v) => (v === c.id ? null : c.id))}
              >
                {replyingToId === c.id ? "Cancel" : "Reply"}
              </button>
            </div>

            {replyingToId === c.id && (
              <form onSubmit={(e) => onReplySubmit(e, c.id)} className="mt-3 flex items-start gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={`Reply to ${c.author}...`}
                    rows={2}
                    className="w-full resize-none rounded-md border bg-background p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                    >
                      Post reply
                    </button>
                  </div>
                </div>
              </form>
            )}

            {c.replies && c.replies.length > 0 && (
              <ul className="mt-4 space-y-3 border-l pl-4">
                {c.replies.map((r) => (
                  <li key={r.id} className="rounded-lg border bg-background p-3">
                    <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Link href="#" className="hover:underline">
                          {r.author}
                        </Link>
                      </span>
                      <span>·</span>
                      <time>{r.time}</time>
                    </div>
                    <p className="text-sm leading-relaxed">{renderWithMentions(r.content)}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}



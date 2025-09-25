"use client";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ReportPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const subjectType = searchParams.get("type") ?? "post"; // "post" | "comment"
  const postId = searchParams.get("postId") ?? "";
  const commentId = searchParams.get("commentId") ?? "";

  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const subjectLabel = useMemo(() => {
    if (subjectType === "comment") {
      return `Comment #${commentId || "?"}`;
    }
    return `Post #${postId || "?"}`;
  }, [subjectType, postId, commentId]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit behavior
    setSubmitted(true);
    setTimeout(() => {
      router.push("/posts");
    }, 1200);
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="mb-2 text-2xl font-bold">Report {subjectLabel}</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Help us keep the community safe. Provide a short reason and optional details.
      </p>

      <form onSubmit={onSubmit} className="space-y-4 rounded-xl border bg-background p-5">
        <div>
          <label htmlFor="reason" className="mb-1 block text-sm font-medium">Reason</label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            required
          >
            <option value="" disabled>Select a reason</option>
            <option value="spam">Spam</option>
            <option value="abuse">Harassment or hate</option>
            <option value="misinfo">Misinformation</option>
            <option value="illegal">Illegal content</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="details" className="mb-1 block text-sm font-medium">Details (optional)</label>
          <textarea
            id="details"
            rows={5}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Add any context or timestamps..."
            className="w-full resize-y rounded-md border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-md border bg-background px-3 py-2 text-sm shadow-sm hover:bg-accent"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            disabled={submitted}
          >
            {submitted ? "Submitted" : "Submit report"}
          </button>
        </div>

        <input type="hidden" name="type" value={subjectType} />
        <input type="hidden" name="postId" value={postId} />
        <input type="hidden" name="commentId" value={commentId} />
      </form>
    </div>
  );
}



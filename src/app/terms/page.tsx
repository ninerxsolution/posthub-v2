"use client";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-8 shadow-sm dark:bg-neutral-900/50">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight">Terms of Service</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              These mock terms outline the basic rules for using PostHub. The real
              service terms will be finalized before production.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Using PostHub</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
            <li>Be respectful. Don’t harass or abuse others.</li>
            <li>Don’t post illegal or harmful content.</li>
            <li>Respect intellectual property and attribution.</li>
          </ul>
        </section>

        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Your content</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You retain rights to your content. By publishing, you grant PostHub a license to display
            and distribute it within the service. You are responsible for the content you post.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Limitations</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            PostHub is provided “as is” during this mock phase. We are not liable for losses
            arising from use, interruption, or data issues in this demo environment.
          </p>
        </section>

        {/* Footer note */}
        <section className="rounded-2xl border bg-white/50 p-6 text-center shadow-sm dark:bg-neutral-900/50">
          <p className="text-sm text-muted-foreground">
            By using PostHub, you agree to these terms. These mock terms are subject to change.
          </p>
        </section>
      </div>
    </main>
  );
}



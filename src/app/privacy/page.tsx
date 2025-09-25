"use client";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-8 shadow-sm dark:bg-neutral-900/50">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Your privacy matters. This mock policy describes how PostHub might collect, use,
              and protect your information in a future production version.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Information we may collect</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
            <li>Account details such as name, username, and email.</li>
            <li>Content you create: posts, comments, reactions.</li>
            <li>Technical data for performance and security (IP, device, logs).</li>
          </ul>
        </section>

        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">How we may use information</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
            <li>Provide and improve the service experience.</li>
            <li>Personalize content like topics and recommendations.</li>
            <li>Maintain safety, prevent abuse, and debug issues.</li>
          </ul>
        </section>

        <section className="mb-10 rounded-2xl border bg-white/50 p-6 shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Your controls</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
            <li>Update profile information or delete content you own.</li>
            <li>Manage notifications and email preferences.</li>
            <li>Request data export or deletion (mock for now).</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border bg-white/50 p-6 text-center shadow-sm dark:bg-neutral-900/50">
          <h2 className="text-xl font-semibold">Questions about privacy?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out to our team and we’ll be happy to help.
          </p>
          <div className="mt-5">
            <Link href="/contact" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}



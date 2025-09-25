"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileEditPage({ params }: { params: { username: string } }) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);

  const onImageSelect = (file: File, setter: (url: string) => void) => {
    const url = URL.createObjectURL(file);
    setter(url);
  };

  const onCancel = () => {
    router.push(`/${params.username}`);
  };

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    // mock save
    router.push(`/${params.username}`);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Edit profile</h1>
        <div className="flex items-center gap-2">
          <button onClick={onCancel} className="rounded-md border px-3 py-2 text-sm hover:bg-accent">Cancel</button>
          <button onClick={onSave} className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Save</button>
        </div>
      </header>

      {/* Banner */}
      <div className="mb-6 overflow-hidden rounded-xl border">
        <div className="relative h-40 w-full bg-muted">
          {banner && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={banner} alt="Banner" className="h-full w-full object-cover" />
          )}
          <label className="absolute right-3 top-3 cursor-pointer rounded-md border bg-background px-3 py-1.5 text-xs hover:bg-accent">
            Change banner
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onImageSelect(f, (u) => setBanner(u));
              }}
            />
          </label>
        </div>
        <div className="-mt-8 px-4 pb-4">
          <div className="relative inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-background bg-muted">
            {avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
            )}
          </div>
          <label className="ml-4 cursor-pointer rounded-md border bg-background px-3 py-1.5 text-xs hover:bg-accent">
            Change avatar
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onImageSelect(f, (u) => setAvatar(u));
              }}
            />
          </label>
        </div>
      </div>

      <form onSubmit={onSave} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium">Display name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full rounded-md border bg-background p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-md border bg-background p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="Tell people about yourself"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Website</label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full rounded-md border bg-background p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-md border bg-background p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="City, Country"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="rounded-md border px-3 py-2 text-sm hover:bg-accent">Cancel</button>
          <button type="submit" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Save</button>
        </div>
      </form>
    </div>
  );
}



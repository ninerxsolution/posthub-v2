"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Post = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  cover?: string;
};

function getMockPost(id: string): Post | null {
  const idx = Number(id);
  if (Number.isNaN(idx)) return null;
  return {
    id,
    title: `Sample Post Title ${id}`,
    content:
      "This is editable mock content for the post. Replace with your own data when wired to an API.",
    tags: idx % 2 ? ["react", "nextjs"] : ["tailwind", "design"],
    cover: idx % 2 === 0 ? `https://picsum.photos/seed/edit-${id}/1200/800` : undefined,
  };
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const initial = useMemo(() => getMockPost(params.id), [params.id]);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [coverPreview, setCoverPreview] = useState<string>("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  type ContentBlock = {
    id: string;
    type: "text" | "image";
    text?: string;
    file?: File | null;
    previewUrl?: string;
  };
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);

  useEffect(() => {
    if (!initial) return;
    setTitle(initial.title);
    setTags(initial.tags.join(", "));
    setCoverPreview(initial.cover ?? "");
    // Seed blocks: text, image (from URL), text
    setBlocks([
      { id: crypto.randomUUID(), type: "text", text: initial.content },
      {
        id: crypto.randomUUID(),
        type: "image",
        file: null,
        previewUrl:
          "https://i.etsystatic.com/45893541/r/il/545bc4/6453954482/il_570xN.6453954482_q062.jpg",
      },
      {
        id: crypto.randomUUID(),
        type: "text",
        text:
          "This is another paragraph after the image. You can continue editing or rearrange blocks.",
      },
    ]);
  }, [initial]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setCoverFile(null);
      setCoverPreview("");
      return;
    }
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const addTextBlock = () => {
    setBlocks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "text", text: "" },
    ]);
  };

  const addImageBlock = () => {
    setBlocks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "image", file: null, previewUrl: "" },
    ]);
  };

  const updateTextBlock = (id: string, text: string) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, text } : b)));
  };

  const updateImageBlock = (id: string, file: File | null) => {
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== id) return b;
        if (!file) return { ...b, file: null, previewUrl: "" };
        const url = URL.createObjectURL(file);
        return { ...b, file, previewUrl: url };
      })
    );
  };

  const moveBlock = (id: string, direction: -1 | 1) => {
    setBlocks((prev) => {
      const index = prev.findIndex((b) => b.id === id);
      if (index < 0) return prev;
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      const copy = [...prev];
      const [item] = copy.splice(index, 1);
      copy.splice(newIndex, 0, item);
      return copy;
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const combinedText = blocks
      .filter((b) => b.type === "text")
      .map((b) => (b.text ?? "").trim())
      .filter(Boolean)
      .join("\n\n");
    if (!title.trim() || !combinedText.trim()) return;
    setSaving(true);
    try {
      // Replace with API call
      console.log("Update post", {
        id: params.id,
        title,
        content: combinedText,
        contentBlocks: blocks.map((b) => ({
          type: b.type,
          text: b.text ?? "",
          imageName: b.file?.name ?? null,
        })),
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        coverFileName: coverFile?.name ?? null,
      });
      router.push(`/posts/${params.id}`);
    } finally {
      setSaving(false);
    }
  };

  if (!initial) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-muted-foreground">Post not found.</p>
        <Link href="/posts" className="mt-3 inline-block text-sm text-primary hover:underline">
          ← Back to posts
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Edit post</h1>
          <p className="mt-1 text-sm text-muted-foreground">Update your post details.</p>
        </div>
        <Link href={`/posts/${params.id}`} className="text-sm text-primary hover:underline">
          Cancel
        </Link>
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="Write an engaging title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Content</label>
            <div className="mt-2 space-y-4">
              {blocks.map((block, idx) => (
                <div key={block.id} className="rounded-lg border bg-background p-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {block.type === "text" ? "Text block" : "Image block"} · #{idx + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => moveBlock(block.id, -1)} className="rounded border px-2 py-1 hover:bg-accent">Up</button>
                      <button type="button" onClick={() => moveBlock(block.id, 1)} className="rounded border px-2 py-1 hover:bg-accent">Down</button>
                      <button type="button" onClick={() => removeBlock(block.id)} className="rounded border px-2 py-1 hover:bg-accent">Remove</button>
                    </div>
                  </div>
                  {block.type === "text" ? (
                    <textarea
                      value={block.text ?? ""}
                      onChange={(e) => updateTextBlock(block.id, e.target.value)}
                      placeholder="Write text..."
                      rows={6}
                      className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  ) : (
                    <div>
                      <div className="relative w-full overflow-hidden rounded-lg border bg-muted/30 p-5">
                        {block.previewUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={block.previewUrl} alt="Block preview" className="h-full w-full object-cover object-center" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">No image selected</div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => updateImageBlock(block.id, e.target.files ? e.target.files[0] : null)}
                        className="mt-2 block w-full transition-all duration-200 ease-out file:transition-all file:duration-200 file:ease-out file:mr-3 file:rounded-md file:border file:border-primary/10 file:bg-background file:px-3 file:py-2 file:text-sm file:hover:bg-accent"
                      />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={addTextBlock} className="rounded-md border px-3 py-2 text-sm hover:bg-accent">Add text</button>
                <button type="button" onClick={addImageBlock} className="rounded-md border px-3 py-2 text-sm hover:bg-accent">Add image</button>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div>
              <label className="block text-sm font-medium">Feature image</label>
              <div className="mt-1 flex flex-col">
                {coverPreview ? (
                  <div className="relative w-full overflow-hidden rounded-lg border bg-muted/30 aspect-[4/3] mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={coverPreview} alt="Cover preview" className="h-full w-full object-cover object-center" />
                  </div>
                ) : ""}
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="block w-full text-sm transition-all duration-200 ease-out file:transition-all file:duration-200 file:ease-out file:mr-3 file:rounded-md file:border file:border-primary/10 file:bg-background file:px-3 file:py-2 file:text-sm file:hover:bg-accent"
                />
                {coverPreview && (
                  <button
                    type="button"
                    onClick={() => { setCoverFile(null); setCoverPreview(""); }}
                    className="mt-2 w-full rounded-md border px-3 py-2 text-xs hover:bg-accent"
                  >
                    Remove image
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Tags (comma separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="react, nextjs, tailwind"
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-end gap-3">
              <Link
                href={`/posts/${params.id}`}
                className="rounded-md bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80 w-full text-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60 w-full"
              >
                {saving ? "Saving..." : "Save changes"}
              </button>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}



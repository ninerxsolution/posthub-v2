"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
    coverUrl: "",
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");
  type ContentBlock = {
    id: string;
    type: "text" | "image";
    text?: string;
    file?: File | null;
    previewUrl?: string;
  };
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    setSubmitting(true);
    try {
      // TODO: integrate with API
      console.log("Create post payload", {
        ...form,
        coverFileName: coverFile?.name ?? null,
        contentBlocks: blocks.map((b) => ({
          type: b.type,
          text: b.text ?? "",
          // In real impl you would upload image and store URL
          imageName: b.file?.name ?? null,
        })),
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      });
      router.push("/");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setCoverFile(null);
      setCoverPreview("");
      return;
    }
    setCoverFile(file);
    const url = URL.createObjectURL(file);
    setCoverPreview(url);
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

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create a new post</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Share your story with the community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Main column */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Write an engaging title"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div>
              <label htmlFor="cover" className="block text-sm font-medium">
                Feature image (optional)
              </label>
              <div className="mt-1 flex flex-col">
                {coverPreview ? (
                  <div className="relative w-full overflow-hidden rounded-lg border bg-muted/30 aspect-[4/3] mb-5">
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : ''}
                <div>
                  <input
                    id="cover"
                    name="cover"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-sm transition-all duration-200 ease-out file:transition-all file:duration-200 file:ease-out file:mr-3 file:rounded-md file:border file:border-primary/10 file:bg-background file:px-3 file:py-2 file:text-sm file:hover:bg-accent"
                  />
                  {coverPreview && (
                    <button
                      type="button"
                      onClick={() => {
                        setCoverFile(null);
                        setCoverPreview("");
                      }}
                      className="mt-2 w-full rounded-md border px-3 py-2 text-xs hover:bg-accent"
                    >
                      Remove image
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium">
                Tags (comma separated)
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={form.tags}
                onChange={handleChange}
                placeholder="react, nextjs, tailwind"
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60 w-full"
              >
                {submitting ? "Publishing..." : "Publish"}
              </button>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}



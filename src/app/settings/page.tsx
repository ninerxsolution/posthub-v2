import ThemeToggle from "@/components/site/ThemeToggle";
import LangToggle from "@/components/site/LangToggle";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your preferences.</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-medium">Appearance</h2>
              <p className="text-sm text-muted-foreground">Switch between light and dark themes.</p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-medium">Language</h2>
              <p className="text-sm text-muted-foreground">Choose your display language.</p>
            </div>
            <LangToggle />
          </div>
        </div>
      </section>
    </div>
  );
}



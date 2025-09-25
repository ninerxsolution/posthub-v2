import { CardSkeleton, AvatarSkeleton, TextLine } from "./Primitives";

export function LeftSidebarSkeleton() {
  return (
    <aside className="hidden lg:col-span-3 lg:block motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading left sidebar">
      <div className="sticky top-[90px] space-y-4">
        <CardSkeleton>
          <div className="flex items-center gap-3">
            <AvatarSkeleton size={48} />
            <div className="flex-1 space-y-2">
              <TextLine width="w-28" />
              <TextLine width="w-20" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-md bg-neutral-50 p-2 dark:bg-neutral-800">
                <TextLine width="w-8" className="mx-auto" />
                <TextLine width="w-12" className="mx-auto mt-1" />
              </div>
            ))}
          </div>
        </CardSkeleton>

        <CardSkeleton>
          <TextLine width="w-24" />
          <ul className="mt-3 space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}><TextLine width="w-32" /></li>
            ))}
          </ul>
        </CardSkeleton>
      </div>
    </aside>
  );
}

export function RightSidebarSkeleton() {
  return (
    <aside className="hidden lg:col-span-3 lg:block motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading right sidebar">
      <div className="sticky top-[90px] space-y-4">
        <CardSkeleton>
          <TextLine width="w-24" />
          <ul className="mt-3 space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="flex items-center justify-between">
                <TextLine width="w-24" />
                <TextLine width="w-10" />
              </li>
            ))}
          </ul>
        </CardSkeleton>

        <CardSkeleton>
          <TextLine width="w-28" />
          <ul className="mt-3 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i}>
                <div className="space-y-2">
                  <TextLine width="w-48" />
                  <TextLine width="w-24" />
                </div>
              </li>
            ))}
          </ul>
        </CardSkeleton>
      </div>
    </aside>
  );
}



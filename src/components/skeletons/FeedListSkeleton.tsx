import { AvatarSkeleton, CardSkeleton, Skeleton, TextLine } from "./Primitives";

export default function FeedListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <section className="lg:col-span-6 motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading feed">
      <div className="space-y-4">
        <CardSkeleton>
          <div className="flex items-center gap-3">
            <AvatarSkeleton size={40} />
            <Skeleton className="h-10 flex-1 rounded-full" />
          </div>
        </CardSkeleton>

        {Array.from({ length: count }).map((_, i) => (
          <CardSkeleton key={i}>
            <div className="mb-2 flex items-center gap-3">
              <AvatarSkeleton size={24} />
              <TextLine width="w-24" className="h-3" />
              <TextLine width="w-16" className="h-3" />
            </div>
            <TextLine width="w-3/4" className="h-5" />
            <TextLine width="w-full" className="mt-2" />
            <TextLine width="w-5/6" className="mt-1" />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16 rounded-md" />
                <Skeleton className="h-5 w-16 rounded-md" />
                <Skeleton className="h-5 w-16 rounded-md" />
              </div>
              <Skeleton className="h-7 w-16 rounded-md" />
            </div>
          </CardSkeleton>
        ))}
      </div>
    </section>
  );
}



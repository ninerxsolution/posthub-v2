import { CardSkeleton, AvatarSkeleton, TextLine, Skeleton } from "./Primitives";

export default function ProfileHeaderSkeleton() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 motion-safe:animate-in motion-safe:fade-in-50" aria-busy="true" aria-label="Loading profile">
      <CardSkeleton className="p-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <AvatarSkeleton size={80} className="border" />
          <div className="flex-1 space-y-2">
            <TextLine width="w-48" className="h-6" />
            <TextLine width="w-32" />
            <TextLine width="w-2/3" />
            <div className="mt-2 flex gap-4">
              <TextLine width="w-24" />
              <TextLine width="w-24" />
              <TextLine width="w-24" />
            </div>
          </div>
          <div className="flex gap-2 self-stretch sm:self-auto">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      </CardSkeleton>
    </div>
  );
}



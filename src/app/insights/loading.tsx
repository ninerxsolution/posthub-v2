import { FeedListSkeleton } from "@/components/skeletons/FeedListSkeleton";

export default function InsightsLoading() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-muted animate-pulse rounded" />
          <div className="h-4 w-96 bg-muted animate-pulse rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-9 w-32 bg-muted animate-pulse rounded" />
          <div className="h-9 w-24 bg-muted animate-pulse rounded" />
        </div>
      </div>

      {/* Overview Cards Skeleton */}
      <section className="space-y-6">
        <div className="h-7 w-32 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                  <div className="h-8 w-16 bg-muted animate-pulse rounded" />
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                    <div className="h-5 w-20 bg-muted animate-pulse rounded" />
                  </div>
                </div>
                <div className="h-12 w-12 bg-muted animate-pulse rounded-full" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Chart Skeleton */}
        <div className="bg-card p-6 rounded-lg border">
          <div className="h-6 w-48 bg-muted animate-pulse rounded mb-4" />
          <div className="h-64 bg-muted animate-pulse rounded" />
        </div>
      </section>

      {/* Post Performance Skeleton */}
      <section className="space-y-6">
        <div className="h-7 w-40 bg-muted animate-pulse rounded" />
        <div className="bg-card p-6 rounded-lg border">
          <div className="h-6 w-48 bg-muted animate-pulse rounded mb-4" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-64 bg-muted animate-pulse rounded" />
                  <div className="flex items-center gap-4">
                    <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center space-y-1">
                    <div className="h-5 w-12 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                  </div>
                  <div className="text-center space-y-1">
                    <div className="h-5 w-8 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-8 bg-muted animate-pulse rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Insights Skeleton */}
      <section className="space-y-6">
        <div className="h-7 w-36 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border">
              <div className="h-6 w-32 bg-muted animate-pulse rounded mb-4" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted animate-pulse rounded-full" />
                      <div className="h-4 w-8 bg-muted animate-pulse rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Channel Insights Skeleton */}
      <section className="space-y-6">
        <div className="h-7 w-40 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border">
              <div className="h-6 w-48 bg-muted animate-pulse rounded mb-4" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-16 bg-muted animate-pulse rounded" />
                      <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center space-y-1">
                        <div className="h-5 w-12 bg-muted animate-pulse rounded" />
                        <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                      </div>
                      <div className="text-center space-y-1">
                        <div className="h-5 w-12 bg-muted animate-pulse rounded" />
                        <div className="h-4 w-12 bg-muted animate-pulse rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Skeleton */}
      <section className="space-y-6">
        <div className="h-7 w-56 bg-muted animate-pulse rounded" />
        <div className="bg-card p-6 rounded-lg border">
          <div className="h-6 w-48 bg-muted animate-pulse rounded mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <div className="h-6 w-6 bg-muted animate-pulse rounded-full flex-shrink-0 mt-0.5" />
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Steps Skeleton */}
      <section className="space-y-6">
        <div className="h-7 w-48 bg-muted animate-pulse rounded" />
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="h-6 w-80 bg-muted animate-pulse rounded" />
              <div className="h-4 w-96 bg-muted animate-pulse rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-32 bg-muted animate-pulse rounded" />
              <div className="h-9 w-28 bg-muted animate-pulse rounded" />
              <div className="h-9 w-24 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

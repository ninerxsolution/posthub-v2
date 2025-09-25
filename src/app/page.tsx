
"use client";
// import { useLanguage } from "@/i18n/LanguageProvider";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LeftSidebarSkeleton, RightSidebarSkeleton } from "@/components/skeletons/SidebarsSkeleton";
import FeedListSkeleton from "@/components/skeletons/FeedListSkeleton";

const LeftSidebar = dynamic(() => import("@/components/LeftSidebar"), { suspense: true });
const FeedList = dynamic(() => import("@/components/FeedList"), { suspense: true });
const RightSidebar = dynamic(() => import("@/components/RightSidebar"), { suspense: true });

export default function Home() {
  // const { dict } = useLanguage();
  return (
    <main className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Suspense fallback={<LeftSidebarSkeleton />}>
          <LeftSidebar />
        </Suspense>
        <Suspense fallback={<FeedListSkeleton />}>
          <FeedList />
        </Suspense>
        <Suspense fallback={<RightSidebarSkeleton />}>
          <RightSidebar />
        </Suspense>
      </div>
    </main>
  );
}

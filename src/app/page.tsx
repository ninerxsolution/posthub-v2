
"use client";
import { useLanguage } from "@/i18n/LanguageProvider";
import LeftSidebar from "@/components/LeftSidebar";
import FeedList from "@/components/FeedList";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  const { dict } = useLanguage();
  return (
    <main className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <LeftSidebar />
        <FeedList />
        <RightSidebar />
      </div>
    </main>
  );
}

"use client";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import NotificationList from "@/components/NotificationList";

export default function NotificationsPage() {
  return (
    <main className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <LeftSidebar />
        <NotificationList />
        <RightSidebar />
      </div>
    </main>
  );
}

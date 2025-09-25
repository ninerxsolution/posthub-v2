"use client";
import Link from "next/link";
import { useState } from "react";
import { Heart, MessageCircle, UserPlus, Check, Bell, Filter, CheckCheck } from "lucide-react";

type Notification = {
  id: string;
  type: "like" | "comment" | "follow" | "mention" | "system";
  message: string;
  user: string;
  userAvatar?: string;
  time: string;
  read: boolean;
  href: string;
  postTitle?: string;
};

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    message: "liked your post",
    user: "Sarah Wilson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    time: "2 minutes ago",
    read: false,
    href: "/posts/1",
    postTitle: "Building Scalable React Applications"
  },
  {
    id: "2",
    type: "comment",
    message: "commented on your post",
    user: "John Smith",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    time: "15 minutes ago",
    read: false,
    href: "/posts/2",
    postTitle: "Next.js 14 Performance Optimization"
  },
  {
    id: "3",
    type: "follow",
    message: "started following you",
    user: "Alex Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    time: "1 hour ago",
    read: true,
    href: "/alexchen"
  },
  {
    id: "4",
    type: "mention",
    message: "mentioned you in a post",
    user: "Emma Davis",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    time: "3 hours ago",
    read: true,
    href: "/posts/3",
    postTitle: "TypeScript Best Practices Guide"
  },
  {
    id: "5",
    type: "like",
    message: "liked your post",
    user: "Mike Johnson",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    time: "5 hours ago",
    read: true,
    href: "/posts/4",
    postTitle: "Advanced CSS Techniques"
  },
  {
    id: "6",
    type: "comment",
    message: "commented on your post",
    user: "Lisa Wang",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    time: "1 day ago",
    read: true,
    href: "/posts/5",
    postTitle: "Web Development Trends 2024"
  },
  {
    id: "7",
    type: "system",
    message: "Welcome to PostHub! Start by creating your first post.",
    user: "PostHub Team",
    time: "2 days ago",
    read: true,
    href: "/posts/create"
  },
  {
    id: "8",
    type: "follow",
    message: "started following you",
    user: "David Kim",
    userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    time: "3 days ago",
    read: true,
    href: "/davidkim"
  }
];

export default function NotificationList() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [visible, setVisible] = useState(8);

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />;
      case "comment":
        return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case "follow":
        return <UserPlus className="h-4 w-4 text-green-500" />;
      case "mention":
        return <Check className="h-4 w-4 text-purple-500" />;
      case "system":
        return <Bell className="h-4 w-4 text-orange-500" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const canLoadMore = visible < filteredNotifications.length;

  return (
    <section className="lg:col-span-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Notifications</h1>
              <p className="text-sm text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent transition-colors"
              >
                <CheckCheck className="h-4 w-4" />
                Mark all as read
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="rounded-xl border bg-white/50 p-4 shadow-sm dark:bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter:</span>
            <div className="flex gap-1">
              {[
                { key: "all", label: "All" },
                { key: "unread", label: "Unread" },
                { key: "read", label: "Read" }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as typeof filter)}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    filter === key
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.slice(0, visible).map((notification) => (
            <Link
              key={notification.id}
              href={notification.href}
              onClick={() => markAsRead(notification.id)}
              className={`block rounded-xl border bg-white/50 p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-neutral-900/50 ${
                !notification.read ? "border-l-4 border-l-blue-500 bg-blue-50/30 dark:bg-blue-950/20" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {notification.userAvatar ? (
                    <img
                      src={notification.userAvatar}
                      alt={notification.user}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {notification.user.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground">
                          {notification.user}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {notification.message}
                        </span>
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      {notification.postTitle && (
                        <p className="text-sm text-primary hover:underline mb-1">
                          &ldquo;{notification.postTitle}&rdquo;
                        </p>
                      )}
                      
                      <time className="text-xs text-muted-foreground">
                        {notification.time}
                      </time>
                    </div>
                    
                    {!notification.read && (
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        {canLoadMore && (
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + 8, filteredNotifications.length))}
              className="rounded-md border px-4 py-2 text-sm hover:bg-accent transition-colors"
            >
              Show more notifications
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="rounded-xl border bg-white/50 p-8 text-center shadow-sm dark:bg-neutral-900/50">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">
              {filter === "unread" ? "No unread notifications" : "No notifications yet"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filter === "unread" 
                ? "You're all caught up! Check back later for new notifications."
                : "When people interact with your posts, you'll see notifications here."
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

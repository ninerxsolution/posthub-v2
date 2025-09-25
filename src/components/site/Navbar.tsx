"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, Bell, Heart, MessageCircle, UserPlus, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
// import { useLanguage } from "@/i18n/LanguageProvider";

type NavItem = {
  href: string;
  label: string;
};

type Notification = {
  id: string;
  type: "like" | "comment" | "follow" | "mention";
  message: string;
  user: string;
  time: string;
  read: boolean;
  href: string;
};

const navItems: NavItem[] = [
  // { href: "/posts", label: "Posts" },
];

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    message: "liked your post",
    user: "Sarah Wilson",
    time: "2m ago",
    read: false,
    href: "/posts/1"
  },
  {
    id: "2",
    type: "comment",
    message: "commented on your post",
    user: "John Smith",
    time: "15m ago",
    read: false,
    href: "/posts/2"
  },
  {
    id: "3",
    type: "follow",
    message: "started following you",
    user: "Alex Chen",
    time: "1h ago",
    read: true,
    href: "/alexchen"
  },
  {
    id: "4",
    type: "mention",
    message: "mentioned you in a post",
    user: "Emma Davis",
    time: "3h ago",
    read: true,
    href: "/posts/3"
  },
];

export default function Navbar() {
  // const { dict } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const router = useRouter();
  const notificationRef = useRef<HTMLDivElement>(null);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setIsOpen(false);
  };

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">PostHub</span>
            </Link>
          </div>

          

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Search post content */}
          <form onSubmit={onSearchSubmit} className="hidden md:block flex-1 max-w-md mx-6">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-full border bg-background pl-9 pr-3 py-2 text-sm transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </form>

            {/* notification */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background hover:bg-accent"
              >
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white animate-in zoom-in-50 duration-200">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              <div 
                className={`absolute right-0 top-12 w-80 rounded-lg border bg-background shadow-lg z-50 transition-all duration-200 ease-out transform origin-top-right ${
                  notificationsOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-3 border-b">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-sm text-muted-foreground">
                      No notifications yet
                    </div>
                  ) : (
                    notifications.map((notification, index) => (
                      <Link
                        key={notification.id}
                        href={notification.href}
                        onClick={() => {
                          markAsRead(notification.id);
                          setNotificationsOpen(false);
                        }}
                        className={`flex items-start gap-3 p-3 hover:bg-accent transition-all duration-200 ease-out transform ${
                          !notification.read ? "bg-blue-50/50 dark:bg-blue-950/20" : ""
                        }`}
                        style={{
                          animationDelay: `${index * 75}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5 transition-transform duration-150 hover:scale-110">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground">
                              {notification.user}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {notification.message}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                        )}
                      </Link>
                    ))
                  )}
                </div>
                  {notifications.length > 0 && (
                    <div className="p-3 border-t">
                      <Link 
                        href="/notifications"
                        onClick={() => setNotificationsOpen(false)}
                        className="block w-full text-center text-sm text-primary hover:underline transition-colors duration-150"
                      >
                        View all notifications
                      </Link>
                    </div>
                  )}
              </div>
            </div>

            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
            <LangToggle />
            <ThemeToggle />
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background hover:bg-accent"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="relative inline-block h-5 w-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transform transition-all duration-200 ease-out ${
                  isOpen ? "opacity-0 scale-75 -rotate-90" : "opacity-100 scale-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transform transition-all duration-200 ease-out ${
                  isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu (overlay) */}
        <div
          className={`w-full md:hidden fixed inset-x-0 top-16 z-50 origin-top transform transition-all duration-200 ease-out ${
            isOpen ? "max-h-full opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="border border-t-0 bg-background shadow-lg">
              <div className="flex flex-col gap-2 pb-4 pt-2">
                <form onSubmit={onSearchSubmit} className="px-3">
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
                      <Search className="h-4 w-4" />
                    </span>
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search posts..."
                      className="w-full rounded-md border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </form>
                <div className="px-3 pb-2 flex items-center gap-3">
                  <LangToggle />
                  <ThemeToggle />
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-base text-foreground/90 hover:bg-accent hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



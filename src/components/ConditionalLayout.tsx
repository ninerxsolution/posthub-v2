"use client";

import { usePathname } from "next/navigation";
import AppShell from "@/components/site/AppShell";

type ConditionalLayoutProps = {
  children: React.ReactNode;
};

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if we're on a backoffice route
  const isBackofficeRoute = pathname.startsWith("/backoffice");
  
  // For backoffice routes, render children directly without AppShell
  if (isBackofficeRoute) {
    return <>{children}</>;
  }
  
  // For all other routes, use the normal AppShell
  return <AppShell>{children}</AppShell>;
}

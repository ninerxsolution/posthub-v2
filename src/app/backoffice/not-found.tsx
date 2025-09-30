"use client";

import BackofficeLeftSidebar from "@/components/backoffice/LeftSidebar";
import BackofficeNavbar from "@/components/backoffice/Navbar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function BackofficeNotFound() {
  return (
    <SidebarProvider>
      <BackofficeLeftSidebar />
      <SidebarInset>
        {/* Top Navbar */}
        <BackofficeNavbar />
        
        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-md mx-auto">
              {/* 404 Icon */}
              <div className="mb-8">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto bg-muted/50 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                </div>
              </div>

              {/* Error Message */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Page Not Found
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                  The page you&apos;re looking for doesn&apos;t exist in the backoffice.
                </p>
                <p className="text-sm text-muted-foreground">
                  It might have been moved, deleted, or you entered the wrong URL.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="flex items-center gap-2">
                  <Link href="/backoffice">
                    <Home className="h-4 w-4" />
                    Back to Dashboard
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
              </div>

              {/* Helpful Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Popular Backoffice Sections
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <Link 
                    href="/backoffice/analytics/overview" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Search className="h-3 w-3" />
                    Analytics Overview
                  </Link>
                  <Link 
                    href="/backoffice/users" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Search className="h-3 w-3" />
                    User Management
                  </Link>
                  <Link 
                    href="/backoffice/content" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Search className="h-3 w-3" />
                    Content Moderation
                  </Link>
                  <Link 
                    href="/backoffice/settings" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Search className="h-3 w-3" />
                    Settings
                  </Link>
                </div>
              </div>

              {/* Error Details */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Error Code: 404 | Backoffice Not Found
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  If you believe this is an error, please contact the system administrator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

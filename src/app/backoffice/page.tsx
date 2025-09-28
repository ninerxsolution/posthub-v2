"use client";

import BackofficeLeftSidebar from "@/components/backoffice/LeftSidebar";
import BackofficeNavbar from "@/components/backoffice/Navbar";
import { BarChart3, Users, FileText, TrendingUp, Settings, Bot, BookOpen } from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function BackofficePage() {
  return (
    <SidebarProvider>
      <BackofficeLeftSidebar />
      <SidebarInset>
        {/* Top Navbar */}
        <BackofficeNavbar />
        
        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Dashboard Grid */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Analytics</p>
              </div>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Users</p>
              </div>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Content</p>
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min p-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Welcome to PostHub Backoffice
                </h1>
                <p className="text-muted-foreground">
                  Manage your platform with powerful admin tools
                </p>
              </div>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Analytics Dashboard</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    View comprehensive analytics and key performance metrics for your platform.
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    View Analytics →
                  </button>
                </div>
                
                <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">User Management</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage users, roles, and permissions across your platform.
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Manage Users →
                  </button>
                </div>
                
                <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Content Moderation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Review and moderate posts, comments, and user-generated content.
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Review Content →
                  </button>
                </div>
                
                <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">AI Models</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Configure and manage AI models for content generation and moderation.
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Manage Models →
                  </button>
                </div>
                
                <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Documentation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access API documentation and guides for developers.
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    View Docs →
                  </button>
                </div>
                
                <div className="bg-background border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Settings</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Configure platform settings, billing, and team management.
                  </p>
                  <button className="text-sm text-primary hover:underline">
                    Open Settings →
                  </button>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-background border rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Platform Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1,234</div>
                    <div className="text-sm text-muted-foreground">Total Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5,678</div>
                    <div className="text-sm text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">12,345</div>
                    <div className="text-sm text-muted-foreground">Comments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98.5%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

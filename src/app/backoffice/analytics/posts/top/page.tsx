"use client";

import BackofficeLeftSidebar from "@/components/backoffice/LeftSidebar";
import BackofficeNavbar from "@/components/backoffice/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TrendingUp, Eye, Heart, Share2, MousePointer, Calendar } from "lucide-react";

export default function TopPerformingPostsPage() {
  const topPosts = [
    {
      id: 1,
      title: "10 Tips for Better Social Media Engagement",
      engagement: 1250,
      reach: 15600,
      likes: 890,
      shares: 234,
      clicks: 156,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "The Future of Content Marketing",
      engagement: 1180,
      reach: 14200,
      likes: 756,
      shares: 198,
      clicks: 134,
      date: "2024-01-12"
    },
    {
      id: 3,
      title: "Building Your Personal Brand Online",
      engagement: 980,
      reach: 12800,
      likes: 634,
      shares: 167,
      clicks: 98,
      date: "2024-01-10"
    }
  ];

  return (
    <SidebarProvider>
      <BackofficeLeftSidebar />
      <SidebarInset>
        <BackofficeNavbar />
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Top Performing Posts</h1>
              <p className="text-muted-foreground">
                Your best-performing content based on engagement metrics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-input bg-background rounded-lg hover:bg-accent transition-colors">
                <Calendar className="h-4 w-4 mr-2 inline" />
                Filter by Date
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={post.id} className="bg-background border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">Posted on {post.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Top Performer</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Eye className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-muted-foreground">Reach</span>
                    </div>
                    <p className="text-lg font-semibold">{post.reach.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Heart className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-muted-foreground">Likes</span>
                    </div>
                    <p className="text-lg font-semibold">{post.likes.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Share2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Shares</span>
                    </div>
                    <p className="text-lg font-semibold">{post.shares.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MousePointer className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-muted-foreground">Clicks</span>
                    </div>
                    <p className="text-lg font-semibold">{post.clicks.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-muted-foreground">Engagement</span>
                    </div>
                    <p className="text-lg font-semibold">{post.engagement.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

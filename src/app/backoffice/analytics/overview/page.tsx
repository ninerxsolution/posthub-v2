"use client";

import BackofficeLeftSidebar from "@/components/backoffice/LeftSidebar";
import BackofficeNavbar from "@/components/backoffice/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  Share2, 
  MousePointer,
  Calendar,
  Clock,
  Globe,
  Target,
  Lightbulb,
  Zap
} from "lucide-react";

export default function AnalyticsOverviewPage() {
  return (
    <SidebarProvider>
      <BackofficeLeftSidebar />
      <SidebarInset>
        <BackofficeNavbar />
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Analytics Overview</h1>
              <p className="text-muted-foreground">
                Comprehensive insights into your platform performance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Zap className="h-4 w-4 mr-2 inline" />
                Create Post
              </button>
              <button className="px-4 py-2 border border-input bg-background rounded-lg hover:bg-accent transition-colors">
                <Calendar className="h-4 w-4 mr-2 inline" />
                Export Report
              </button>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Posts</p>
                  <p className="text-2xl font-bold">1,234</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% this month
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Reach & Impressions</p>
                  <p className="text-2xl font-bold">45.6K</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% this week
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Engagement</p>
                  <p className="text-2xl font-bold">8,912</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15% this month
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Click-Through Rate</p>
                  <p className="text-2xl font-bold">3.2%</p>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                    -2% this week
                  </p>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <MousePointer className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Growth Trends</h3>
              <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Growth chart visualization</p>
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Engagement Breakdown</h3>
              <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Engagement pie chart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-background border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border border-input rounded-lg hover:bg-accent transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Top Performing Posts</p>
                    <p className="text-sm text-muted-foreground">View your best content</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-input rounded-lg hover:bg-accent transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Audience Insights</p>
                    <p className="text-sm text-muted-foreground">Demographics & behavior</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-input rounded-lg hover:bg-accent transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Smart Recommendations</p>
                    <p className="text-sm text-muted-foreground">AI-powered suggestions</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

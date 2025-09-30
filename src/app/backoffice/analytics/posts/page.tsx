"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Eye,
  MessageCircle,
} from "lucide-react";

export default function TotalPostsAnalyticsPage() {
  const postStats = [
    {
      period: "This Month",
      total: 47,
      published: 45,
      scheduled: 2,
      draft: 0,
      change: "+12.5%"
    },
    {
      period: "Last Month",
      total: 42,
      published: 40,
      scheduled: 1,
      draft: 1,
      change: "+8.2%"
    },
    {
      period: "This Year",
      total: 487,
      published: 475,
      scheduled: 8,
      draft: 4,
      change: "+15.3%"
    }
  ];

  const recentPosts = [
    {
      title: "How to Build Better User Experiences",
      status: "published",
      date: "2024-01-15",
      views: "12.4K",
      engagement: "8.2%",
      type: "Article"
    },
    {
      title: "10 Tips for Content Marketing",
      status: "published",
      date: "2024-01-14",
      views: "9.8K",
      engagement: "7.5%",
      type: "Guide"
    },
    {
      title: "The Future of Social Media",
      status: "scheduled",
      date: "2024-01-16",
      views: "-",
      engagement: "-",
      type: "Article"
    },
    {
      title: "Weekly Newsletter Draft",
      status: "draft",
      date: "2024-01-15",
      views: "-",
      engagement: "-",
      type: "Newsletter"
    }
  ];

  const contentTypes = [
    { type: "Articles", count: 23, percentage: 48.9 },
    { type: "Guides", count: 12, percentage: 25.5 },
    { type: "Newsletters", count: 8, percentage: 17.0 },
    { type: "Updates", count: 4, percentage: 8.5 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Total Posts</h1>
          <p className="text-muted-foreground">
            Track your content creation and publishing activity
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <FileText className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {/* Post Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        {postStats.map((stat) => (
          <Card key={stat.period}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{stat.period}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.total}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge variant="default" className="text-xs">
                  {stat.change}
                </Badge>
                <span>vs previous period</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                <div className="text-center">
                  <div className="font-medium text-green-600">{stat.published}</div>
                  <div className="text-muted-foreground">Published</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-blue-600">{stat.scheduled}</div>
                  <div className="text-muted-foreground">Scheduled</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-orange-600">{stat.draft}</div>
                  <div className="text-muted-foreground">Draft</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Type Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Content Type Distribution</CardTitle>
          <CardDescription>
            Breakdown of your posts by content type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentTypes.map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-medium">{item.type}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.count}
                  </span>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
          <CardDescription>
            Your latest content and their performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge 
                      variant={
                        post.status === "published" ? "default" :
                        post.status === "scheduled" ? "secondary" : "outline"
                      }
                    >
                      {post.status}
                    </Badge>
                    <Badge variant="outline">{post.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    {post.views !== "-" && (
                      <>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {post.engagement}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Publishing Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Publishing Frequency</CardTitle>
            <CardDescription>
              Your posting patterns over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Chart coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>
              Average performance by content type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "Articles", avgViews: "8.2K", avgEngagement: "6.8%" },
                { type: "Guides", avgViews: "12.1K", avgEngagement: "9.2%" },
                { type: "Newsletters", avgViews: "5.4K", avgEngagement: "4.1%" },
                { type: "Updates", avgViews: "3.2K", avgEngagement: "2.9%" }
              ].map((item) => (
                <div key={item.type} className="flex items-center justify-between p-3 border rounded">
                  <span className="font-medium">{item.type}</span>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{item.avgViews} views</span>
                    <span>{item.avgEngagement} engagement</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

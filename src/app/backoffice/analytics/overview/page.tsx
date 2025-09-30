"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Calendar,
  Target,
  Zap
} from "lucide-react";

export default function AnalyticsOverviewPage() {
  const metrics = [
    {
      title: "Total Posts",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: BarChart3,
      description: "Posts published this month"
    },
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
      description: "Unique users reached"
    },
    {
      title: "Total Engagement",
      value: "45.2K",
      change: "+15.3%",
      trend: "up",
      icon: Heart,
      description: "Likes, comments, shares"
    },
    {
      title: "Active Followers",
      value: "12.8K",
      change: "+5.7%",
      trend: "up",
      icon: Users,
      description: "Engaged followers"
    }
  ];

  const recentActivity = [
    {
      type: "post",
      title: "New post published",
      description: "How to Build Better User Experiences",
      time: "2 hours ago",
      engagement: "1.2K views"
    },
    {
      type: "engagement",
      title: "High engagement post",
      description: "10 Tips for Content Marketing",
      time: "5 hours ago",
      engagement: "850 likes"
    },
    {
      type: "follower",
      title: "New follower milestone",
      description: "Reached 12,800 followers",
      time: "1 day ago",
      engagement: "+127 new followers"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
          <p className="text-muted-foreground">
            Comprehensive view of your content performance and audience insights
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button size="sm">
            <Target className="h-4 w-4 mr-2" />
            Set Goals
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge 
                  variant={metric.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
                <span>vs last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>
              Your content performance over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Chart visualization coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Content */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>
              Your best performing posts this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "How to Build Better User Experiences", views: "12.4K", engagement: "8.2%" },
                { title: "10 Tips for Content Marketing", views: "9.8K", engagement: "7.5%" },
                { title: "The Future of Social Media", views: "8.1K", engagement: "6.9%" }
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{post.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {post.engagement}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary">#{index + 1}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest updates and milestones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  {activity.type === "post" && <BarChart3 className="h-5 w-5 text-blue-500" />}
                  {activity.type === "engagement" && <Heart className="h-5 w-5 text-red-500" />}
                  {activity.type === "follower" && <Users className="h-5 w-5 text-green-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>{activity.time}</span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {activity.engagement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and next steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <BarChart3 className="h-5 w-5 mb-2" />
              <span className="font-medium">View Detailed Reports</span>
              <span className="text-xs text-muted-foreground">Deep dive into analytics</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Target className="h-5 w-5 mb-2" />
              <span className="font-medium">Set Performance Goals</span>
              <span className="text-xs text-muted-foreground">Track your progress</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Share2 className="h-5 w-5 mb-2" />
              <span className="font-medium">Export Data</span>
              <span className="text-xs text-muted-foreground">Download reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
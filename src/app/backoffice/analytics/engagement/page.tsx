"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MessageCircle, 
  Share2,
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Target,
  ThumbsUp,
  Reply
} from "lucide-react";

export default function TotalEngagementPage() {
  const engagementMetrics = [
    {
      title: "Total Engagement",
      value: "45.2K",
      change: "+15.3%",
      trend: "up",
      icon: Heart,
      description: "Likes, comments, shares"
    },
    {
      title: "Engagement Rate",
      value: "8.7%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Engagement per impression"
    },
    {
      title: "Likes",
      value: "28.4K",
      change: "+12.8%",
      trend: "up",
      icon: ThumbsUp,
      description: "Total likes received"
    },
    {
      title: "Comments",
      value: "8.9K",
      change: "+18.2%",
      trend: "up",
      icon: MessageCircle,
      description: "Comments and replies"
    },
    {
      title: "Shares",
      value: "7.9K",
      change: "+9.4%",
      trend: "up",
      icon: Share2,
      description: "Content shares"
    }
  ];

  const topEngagementPosts = [
    {
      title: "How to Build Better User Experiences",
      engagement: "3.2K",
      rate: "12.4%",
      likes: "2.1K",
      comments: "680",
      shares: "420",
      date: "2024-01-15"
    },
    {
      title: "10 Tips for Content Marketing",
      engagement: "2.8K",
      rate: "11.2%",
      likes: "1.9K",
      comments: "520",
      shares: "380",
      date: "2024-01-14"
    },
    {
      title: "The Future of Social Media",
      engagement: "2.1K",
      rate: "9.8%",
      likes: "1.4K",
      comments: "420",
      shares: "280",
      date: "2024-01-13"
    }
  ];

  const engagementBreakdown = [
    { type: "Likes", count: "28.4K", percentage: 62.8, color: "bg-red-500" },
    { type: "Comments", count: "8.9K", percentage: 19.7, color: "bg-blue-500" },
    { type: "Shares", count: "7.9K", percentage: 17.5, color: "bg-green-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Total Engagement</h1>
          <p className="text-muted-foreground">
            Track likes, comments, shares, and overall engagement performance
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
            <Target className="h-4 w-4 mr-2" />
            Set Goals
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {engagementMetrics.map((metric) => (
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

      {/* Engagement Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>
              Your engagement performance over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Chart visualization coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Breakdown</CardTitle>
            <CardDescription>
              Distribution of engagement types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementBreakdown.map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="font-medium">{item.type}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
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
      </div>

      {/* Top Performing Posts by Engagement */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts by Engagement</CardTitle>
          <CardDescription>
            Your posts with the highest engagement rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topEngagementPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge variant="secondary">#{index + 1}</Badge>
                    <Badge variant="outline">{post.rate} rate</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.engagement} total
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {post.likes} likes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {post.comments} comments
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      {post.shares} shares
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Engagement Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Insights</CardTitle>
            <CardDescription>
              Key insights about your content engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Peak Engagement Time</h4>
                <p className="text-sm text-muted-foreground">
                  Your content gets the most engagement on <strong>Wednesday at 3 PM</strong>
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Best Content Type</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>How-to guides</strong> have the highest engagement rate at 12.4%
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Engagement Trend</h4>
                <p className="text-sm text-muted-foreground">
                  Comments are growing faster than likes (+18.2% vs +12.8%)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Goals</CardTitle>
            <CardDescription>
              Track your progress towards engagement objectives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Engagement Goal</span>
                  <span>45.2K / 60K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Engagement Rate Goal</span>
                  <span>8.7% / 12%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "73%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Comments Goal</span>
                  <span>8.9K / 12K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "74%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

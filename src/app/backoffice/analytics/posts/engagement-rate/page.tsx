"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Heart, 
  Eye,
  MessageCircle,
  Share2,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3
} from "lucide-react";

export default function EngagementRatePage() {
  const engagementRateMetrics = [
    {
      title: "Average Engagement Rate",
      value: "8.7%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Overall engagement rate"
    },
    {
      title: "Best Performing Post",
      value: "12.4%",
      change: "+1.8%",
      trend: "up",
      icon: Heart,
      description: "Highest engagement rate"
    },
    {
      title: "Industry Average",
      value: "5.2%",
      change: "+0.3%",
      trend: "up",
      icon: BarChart3,
      description: "Benchmark comparison"
    },
    {
      title: "Engagement Quality Score",
      value: "8.2/10",
      change: "+0.5",
      trend: "up",
      icon: Target,
      description: "Quality of interactions"
    }
  ];

  const topEngagementRatePosts = [
    {
      title: "How to Build Better User Experiences",
      engagementRate: "12.4%",
      totalEngagement: "3.2K",
      impressions: "25.8K",
      date: "2024-01-15",
      type: "Guide"
    },
    {
      title: "10 Tips for Content Marketing",
      engagementRate: "11.2%",
      totalEngagement: "2.8K",
      impressions: "25.0K",
      date: "2024-01-14",
      type: "Tips"
    },
    {
      title: "The Future of Social Media",
      engagementRate: "9.8%",
      totalEngagement: "2.1K",
      impressions: "21.4K",
      date: "2024-01-13",
      type: "Article"
    },
    {
      title: "Weekly Design Inspiration",
      engagementRate: "9.2%",
      totalEngagement: "1.8K",
      impressions: "19.6K",
      date: "2024-01-12",
      type: "Inspiration"
    }
  ];

  const engagementBreakdown = [
    { type: "Likes", rate: "6.2%", count: "28.4K", color: "bg-red-500" },
    { type: "Comments", rate: "1.8%", count: "8.9K", color: "bg-blue-500" },
    { type: "Shares", rate: "0.7%", count: "7.9K", color: "bg-green-500" }
  ];

  const engagementFactors = [
    {
      factor: "Posting Time",
      impact: "High",
      current: "8.7%",
      optimal: "12.3%",
      improvement: "+3.6%"
    },
    {
      factor: "Content Type",
      impact: "High",
      current: "8.7%",
      optimal: "11.8%",
      improvement: "+3.1%"
    },
    {
      factor: "Hashtag Usage",
      impact: "Medium",
      current: "8.7%",
      optimal: "9.4%",
      improvement: "+0.7%"
    },
    {
      factor: "Visual Content",
      impact: "Medium",
      current: "8.7%",
      optimal: "9.8%",
      improvement: "+1.1%"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Engagement Rate</h1>
          <p className="text-muted-foreground">
            Track and optimize your content engagement performance
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {engagementRateMetrics.map((metric) => (
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

      {/* Engagement Rate Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Rate Trends</CardTitle>
            <CardDescription>
              Your engagement rate performance over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Engagement rate chart coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Breakdown</CardTitle>
            <CardDescription>
              Distribution of engagement types and their rates
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
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${parseFloat(item.rate) * 10}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {item.rate}
                    </span>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Posts by Engagement Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts by Engagement Rate</CardTitle>
          <CardDescription>
            Your posts with the highest engagement rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topEngagementRatePosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge variant="secondary">#{index + 1}</Badge>
                    <Badge variant="outline">{post.type}</Badge>
                    <Badge variant="default">{post.engagementRate}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.totalEngagement} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.impressions} impressions
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

      {/* Engagement Optimization Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Optimization Factors</CardTitle>
          <CardDescription>
            Factors that can improve your engagement rate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {engagementFactors.map((factor) => (
              <div key={factor.factor} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-medium text-sm">{factor.factor}</h4>
                    <Badge 
                      variant={factor.impact === "High" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {factor.impact} Impact
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Current: {factor.current}</span>
                    <span>Optimal: {factor.optimal}</span>
                    <span className="text-green-600">+{factor.improvement} potential</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Optimize
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Engagement Rate Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Rate Goals</CardTitle>
          <CardDescription>
            Track your progress towards engagement rate objectives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Average Goal</span>
                  <span>8.7% / 12%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "73%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Best Post Goal</span>
                  <span>12.4% / 15%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "83%" }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Industry Benchmark</span>
                  <span>8.7% / 5.2%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <p className="text-xs text-green-600">Exceeding industry average!</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Quality Score Goal</span>
                  <span>8.2 / 9.0</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "91%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

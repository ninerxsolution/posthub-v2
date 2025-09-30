"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Eye,
  Heart,
  Calendar,
  Filter,
  Download,
  Target,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

export default function GrowthTrendsPage() {
  const growthMetrics = [
    {
      title: "Follower Growth",
      value: "+1,247",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      description: "New followers this month"
    },
    {
      title: "Reach Growth",
      value: "+12.5%",
      change: "+2.1%",
      trend: "up",
      icon: Eye,
      description: "Reach increase vs last month"
    },
    {
      title: "Engagement Growth",
      value: "+15.3%",
      change: "+3.2%",
      trend: "up",
      icon: Heart,
      description: "Engagement increase"
    },
    {
      title: "Content Growth",
      value: "+12.5%",
      change: "+1.8%",
      trend: "up",
      icon: TrendingUp,
      description: "Posts published increase"
    }
  ];

  const growthTrends = [
    {
      period: "This Week",
      followers: "+312",
      reach: "+3.2%",
      engagement: "+4.1%",
      trend: "up"
    },
    {
      period: "This Month",
      followers: "+1,247",
      reach: "+12.5%",
      engagement: "+15.3%",
      trend: "up"
    },
    {
      period: "Last Month",
      followers: "+1,156",
      reach: "+10.4%",
      engagement: "+12.1%",
      trend: "up"
    },
    {
      period: "This Quarter",
      followers: "+3,421",
      reach: "+28.7%",
      engagement: "+35.2%",
      trend: "up"
    }
  ];

  const topGrowthPosts = [
    {
      title: "How to Build Better User Experiences",
      followerGain: "+89",
      reachGain: "+2.1K",
      engagementGain: "+340",
      date: "2024-01-15"
    },
    {
      title: "10 Tips for Content Marketing",
      followerGain: "+67",
      reachGain: "+1.8K",
      engagementGain: "+280",
      date: "2024-01-14"
    },
    {
      title: "The Future of Social Media",
      followerGain: "+54",
      reachGain: "+1.5K",
      engagementGain: "+220",
      date: "2024-01-13"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Growth Trends</h1>
          <p className="text-muted-foreground">
            Track your account growth and performance trends over time
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
        {growthMetrics.map((metric) => (
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
                <span>vs last period</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Growth Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Growth Trends</CardTitle>
          <CardDescription>
            Your growth performance over the last 12 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Growth chart visualization coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth by Period */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Growth by Period</CardTitle>
            <CardDescription>
              Compare growth across different time periods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {growthTrends.map((trend) => (
                <div key={trend.period} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{trend.period}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {trend.followers} followers
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {trend.reach} reach
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {trend.engagement} engagement
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {trend.trend === "up" && <ArrowUp className="h-4 w-4 text-green-500" />}
                    {trend.trend === "down" && <ArrowDown className="h-4 w-4 text-red-500" />}
                    {trend.trend === "stable" && <Minus className="h-4 w-4 text-gray-500" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Insights</CardTitle>
            <CardDescription>
              Key insights about your growth patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Fastest Growing Metric</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Engagement</strong> is growing fastest at +15.3% this month
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Growth Pattern</h4>
                <p className="text-sm text-muted-foreground">
                  Consistent growth across all metrics with <strong>quarterly acceleration</strong>
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Growth Opportunity</h4>
                <p className="text-sm text-muted-foreground">
                  Focus on <strong>content consistency</strong> to maintain growth momentum
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Growth Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Top Growth Posts</CardTitle>
          <CardDescription>
            Posts that contributed most to your growth this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topGrowthPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge variant="secondary">#{index + 1}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 text-green-600">
                      <Users className="h-3 w-3" />
                      {post.followerGain} followers
                    </span>
                    <span className="flex items-center gap-1 text-blue-600">
                      <Eye className="h-3 w-3" />
                      {post.reachGain} reach
                    </span>
                    <span className="flex items-center gap-1 text-red-600">
                      <Heart className="h-3 w-3" />
                      {post.engagementGain} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <TrendingUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Growth Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Growth Goals</CardTitle>
          <CardDescription>
            Track your progress towards growth objectives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Follower Goal</span>
                  <span>1,247 / 2,000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Reach Growth Goal</span>
                  <span>12.5% / 20%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "63%" }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Engagement Growth Goal</span>
                  <span>15.3% / 25%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "61%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Content Growth Goal</span>
                  <span>12.5% / 18%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "69%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  TrendingUp, 
  Users,
  Eye,
  Heart,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react";

export default function PlatformPerformancePage() {
  const platformMetrics = [
    {
      title: "Total Platforms",
      value: "4",
      change: "+1",
      trend: "up",
      icon: Globe,
      description: "Active platforms"
    },
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      description: "Cross-platform reach"
    },
    {
      title: "Total Engagement",
      value: "45.2K",
      change: "+15.3%",
      trend: "up",
      icon: Heart,
      description: "Cross-platform engagement"
    },
    {
      title: "Best Platform",
      value: "Instagram",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
      description: "Highest performing platform"
    }
  ];

  const platformPerformance = [
    {
      platform: "Instagram",
      followers: "8.2K",
      reach: "1.2M",
      engagement: "18.4K",
      engagementRate: "9.2%",
      posts: 23,
      growth: "+12.5%",
      icon: "📷",
      color: "bg-pink-500"
    },
    {
      platform: "Twitter",
      followers: "3.1K",
      reach: "680K",
      engagement: "12.8K",
      engagementRate: "8.7%",
      posts: 31,
      growth: "+8.2%",
      icon: "🐦",
      color: "bg-blue-500"
    },
    {
      platform: "LinkedIn",
      followers: "1.2K",
      reach: "420K",
      engagement: "8.9K",
      engagementRate: "7.1%",
      posts: 15,
      growth: "+15.3%",
      icon: "💼",
      color: "bg-blue-600"
    },
    {
      platform: "TikTok",
      followers: "300",
      reach: "100K",
      engagement: "5.1K",
      engagementRate: "12.4%",
      posts: 8,
      growth: "+25.8%",
      icon: "🎵",
      color: "bg-black"
    }
  ];

  const deviceBreakdown = [
    { device: "Mobile", percentage: 75.2, icon: Smartphone, color: "bg-green-500" },
    { device: "Desktop", percentage: 18.7, icon: Monitor, color: "bg-blue-500" },
    { device: "Tablet", percentage: 6.1, icon: Tablet, color: "bg-purple-500" }
  ];

  const crossPlatformInsights = [
    {
      insight: "Content Repurposing",
      impact: "High",
      description: "Instagram posts perform 40% better when repurposed for Twitter",
      platforms: ["Instagram", "Twitter"]
    },
    {
      insight: "Video Content",
      impact: "High",
      description: "TikTok videos get 3x more engagement than static posts",
      platforms: ["TikTok", "Instagram"]
    },
    {
      insight: "Professional Content",
      impact: "Medium",
      description: "LinkedIn posts about industry insights perform best",
      platforms: ["LinkedIn"]
    },
    {
      insight: "Timing Optimization",
      impact: "Medium",
      description: "Different platforms have different optimal posting times",
      platforms: ["All Platforms"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Platform Performance</h1>
          <p className="text-muted-foreground">
            Compare performance across all your social media platforms
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
        {platformMetrics.map((metric) => (
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

      {/* Platform Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Performance Comparison</CardTitle>
          <CardDescription>
            Detailed performance metrics for each platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platformPerformance.map((platform) => (
              <div key={platform.platform} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <h4 className="font-medium">{platform.platform}</h4>
                    <Badge variant="outline">{platform.growth}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">{platform.followers}</span>
                      <div className="text-xs">Followers</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.reach}</span>
                      <div className="text-xs">Reach</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.engagement}</span>
                      <div className="text-xs">Engagement</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.engagementRate}</span>
                      <div className="text-xs">Engagement Rate</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Platform Growth Trends</CardTitle>
            <CardDescription>
              Growth performance across platforms over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Platform trends chart coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>
              Audience device usage across platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deviceBreakdown.map((item) => (
                <div key={item.device} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{item.device}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
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

      {/* Cross-Platform Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Cross-Platform Insights</CardTitle>
          <CardDescription>
            Key insights for optimizing content across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {crossPlatformInsights.map((insight) => (
              <div key={insight.insight} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{insight.insight}</h4>
                    <Badge 
                      variant={insight.impact === "High" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {insight.impact} Impact
                    </Badge>
                    <div className="flex items-center gap-1">
                      {insight.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
                <Button variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Goals</CardTitle>
          <CardDescription>
            Track your progress towards platform-specific objectives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Instagram Followers</span>
                  <span>8.2K / 15K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: "55%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Twitter Engagement</span>
                  <span>8.7% / 12%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "73%" }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>LinkedIn Growth</span>
                  <span>15.3% / 20%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "77%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>TikTok Reach</span>
                  <span>100K / 500K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

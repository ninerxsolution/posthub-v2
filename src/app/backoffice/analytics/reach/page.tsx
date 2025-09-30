"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  TrendingUp, 
  Users,
  Calendar,
  Filter,
  Download,
  Target,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";

export default function ReachImpressionsPage() {
  const reachMetrics = [
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
      description: "Unique users reached"
    },
    {
      title: "Total Impressions",
      value: "4.7M",
      change: "+12.5%",
      trend: "up",
      icon: Target,
      description: "Total content views"
    },
    {
      title: "Reach Rate",
      value: "18.7%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Reach vs followers"
    },
    {
      title: "Impressions per Post",
      value: "12.3K",
      change: "+5.4%",
      trend: "up",
      icon: Users,
      description: "Average impressions"
    }
  ];

  const topReachPosts = [
    {
      title: "How to Build Better User Experiences",
      reach: "45.2K",
      impressions: "89.1K",
      reachRate: "22.3%",
      date: "2024-01-15"
    },
    {
      title: "10 Tips for Content Marketing",
      reach: "38.7K",
      impressions: "76.4K",
      reachRate: "19.1%",
      date: "2024-01-14"
    },
    {
      title: "The Future of Social Media",
      reach: "32.1K",
      impressions: "64.8K",
      reachRate: "15.8%",
      date: "2024-01-13"
    }
  ];

  const deviceBreakdown = [
    { device: "Mobile", reach: "1.8M", percentage: 75.0, icon: Smartphone },
    { device: "Desktop", reach: "480K", percentage: 20.0, icon: Monitor },
    { device: "Tablet", reach: "120K", percentage: 5.0, icon: Globe }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reach & Impressions</h1>
          <p className="text-muted-foreground">
            Track how far your content spreads and how many times it's seen
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
        {reachMetrics.map((metric) => (
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

      {/* Reach Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reach Trends</CardTitle>
            <CardDescription>
              Your reach performance over the last 30 days
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
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>
              Reach distribution by device type
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
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {item.reach}
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

      {/* Top Performing Posts by Reach */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts by Reach</CardTitle>
          <CardDescription>
            Your posts with the highest reach and impressions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topReachPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge variant="secondary">#{index + 1}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.reach} reach
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {post.impressions} impressions
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {post.reachRate} reach rate
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reach Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reach Insights</CardTitle>
            <CardDescription>
              Key insights about your content reach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Peak Reach Time</h4>
                <p className="text-sm text-muted-foreground">
                  Your content reaches the most people on <strong>Tuesday at 2 PM</strong>
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Best Content Type</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Guides</strong> have the highest reach rate at 24.3%
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Growth Opportunity</h4>
                <p className="text-sm text-muted-foreground">
                  Increase posting frequency to boost reach by 15-20%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reach Goals</CardTitle>
            <CardDescription>
              Track your progress towards reach objectives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Reach Goal</span>
                  <span>2.4M / 3.0M</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Impressions Goal</span>
                  <span>4.7M / 6.0M</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Reach Rate Goal</span>
                  <span>18.7% / 25%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

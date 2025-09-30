"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MousePointer, 
  TrendingUp, 
  Eye,
  ExternalLink,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3,
  Link
} from "lucide-react";

export default function ClickThroughRatePage() {
  const ctrMetrics = [
    {
      title: "Average CTR",
      value: "3.2%",
      change: "+0.8%",
      trend: "up",
      icon: MousePointer,
      description: "Overall click-through rate"
    },
    {
      title: "Best Performing Post",
      value: "7.8%",
      change: "+1.2%",
      trend: "up",
      icon: TrendingUp,
      description: "Highest CTR this month"
    },
    {
      title: "Industry Average",
      value: "2.1%",
      change: "+0.2%",
      trend: "up",
      icon: BarChart3,
      description: "Benchmark comparison"
    },
    {
      title: "Total Clicks",
      value: "12.4K",
      change: "+15.3%",
      trend: "up",
      icon: ExternalLink,
      description: "Total clicks generated"
    }
  ];

  const topCtrPosts = [
    {
      title: "How to Build Better User Experiences",
      ctr: "7.8%",
      clicks: "2.1K",
      impressions: "26.9K",
      date: "2024-01-15",
      type: "Guide",
      link: "Read More"
    },
    {
      title: "10 Tips for Content Marketing",
      ctr: "6.4%",
      clicks: "1.6K",
      impressions: "25.0K",
      date: "2024-01-14",
      type: "Tips",
      link: "Learn More"
    },
    {
      title: "The Future of Social Media",
      ctr: "5.2%",
      clicks: "1.1K",
      impressions: "21.2K",
      date: "2024-01-13",
      type: "Article",
      link: "Read Article"
    },
    {
      title: "Weekly Design Inspiration",
      ctr: "4.8%",
      clicks: "940",
      impressions: "19.6K",
      date: "2024-01-12",
      type: "Inspiration",
      link: "View Gallery"
    }
  ];

  const ctrBreakdown = [
    { type: "External Links", ctr: "4.2%", clicks: "8.1K", color: "bg-blue-500" },
    { type: "Profile Clicks", ctr: "2.8%", clicks: "2.4K", color: "bg-green-500" },
    { type: "Hashtag Clicks", ctr: "1.9%", clicks: "1.9K", color: "bg-purple-500" }
  ];

  const ctrFactors = [
    {
      factor: "Call-to-Action",
      impact: "High",
      current: "3.2%",
      optimal: "5.8%",
      improvement: "+2.6%"
    },
    {
      factor: "Link Placement",
      impact: "High",
      current: "3.2%",
      optimal: "4.9%",
      improvement: "+1.7%"
    },
    {
      factor: "Headline Quality",
      impact: "Medium",
      current: "3.2%",
      optimal: "4.1%",
      improvement: "+0.9%"
    },
    {
      factor: "Visual Appeal",
      impact: "Medium",
      current: "3.2%",
      optimal: "3.8%",
      improvement: "+0.6%"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Click-Through Rate</h1>
          <p className="text-muted-foreground">
            Track and optimize your content's click-through performance
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
        {ctrMetrics.map((metric) => (
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

      {/* CTR Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>CTR Trends</CardTitle>
            <CardDescription>
              Your click-through rate performance over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <MousePointer className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">CTR trend chart coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CTR Breakdown</CardTitle>
            <CardDescription>
              Distribution of clicks by type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ctrBreakdown.map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="font-medium">{item.type}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${parseFloat(item.ctr) * 20}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {item.ctr}
                    </span>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {item.clicks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Posts by CTR */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts by CTR</CardTitle>
          <CardDescription>
            Your posts with the highest click-through rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCtrPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge variant="secondary">#{index + 1}</Badge>
                    <Badge variant="outline">{post.type}</Badge>
                    <Badge variant="default">{post.ctr}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MousePointer className="h-3 w-3" />
                      {post.clicks} clicks
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.impressions} impressions
                    </span>
                    <span className="flex items-center gap-1">
                      <Link className="h-3 w-3" />
                      {post.link}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTR Optimization Factors */}
      <Card>
        <CardHeader>
          <CardTitle>CTR Optimization Factors</CardTitle>
          <CardDescription>
            Factors that can improve your click-through rate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ctrFactors.map((factor) => (
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

      {/* CTR Goals */}
      <Card>
        <CardHeader>
          <CardTitle>CTR Goals</CardTitle>
          <CardDescription>
            Track your progress towards click-through rate objectives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Average Goal</span>
                  <span>3.2% / 5.0%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "64%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Best Post Goal</span>
                  <span>7.8% / 10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Industry Benchmark</span>
                  <span>3.2% / 2.1%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <p className="text-xs text-green-600">Exceeding industry average!</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Clicks Goal</span>
                  <span>12.4K / 20K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Optimize your content for better click-through rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Link className="h-5 w-5 mb-2" />
              <span className="font-medium">Add Call-to-Actions</span>
              <span className="text-xs text-muted-foreground">Improve link placement</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <MousePointer className="h-5 w-5 mb-2" />
              <span className="font-medium">Optimize Headlines</span>
              <span className="text-xs text-muted-foreground">Make them more clickable</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <ExternalLink className="h-5 w-5 mb-2" />
              <span className="font-medium">Test Link Types</span>
              <span className="text-xs text-muted-foreground">A/B test different links</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

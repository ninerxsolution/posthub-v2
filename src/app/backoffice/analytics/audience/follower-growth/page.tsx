"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3,
  UserPlus,
  UserMinus
} from "lucide-react";

export default function FollowerGrowthPage() {
  const followerMetrics = [
    {
      title: "Total Followers",
      value: "12.8K",
      change: "+1,247",
      trend: "up",
      icon: Users,
      description: "Current follower count"
    },
    {
      title: "New Followers",
      value: "+1,247",
      change: "+12.5%",
      trend: "up",
      icon: UserPlus,
      description: "This month"
    },
    {
      title: "Unfollowers",
      value: "-89",
      change: "-5.2%",
      trend: "down",
      icon: UserMinus,
      description: "This month"
    },
    {
      title: "Net Growth",
      value: "+1,158",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
      description: "Net follower change"
    }
  ];

  const growthTrends = [
    {
      period: "This Week",
      newFollowers: "+312",
      unfollowers: "-23",
      netGrowth: "+289",
      growthRate: "+2.3%"
    },
    {
      period: "This Month",
      newFollowers: "+1,247",
      unfollowers: "-89",
      netGrowth: "+1,158",
      growthRate: "+8.2%"
    },
    {
      period: "Last Month",
      newFollowers: "+1,156",
      unfollowers: "-78",
      netGrowth: "+1,078",
      growthRate: "+7.8%"
    },
    {
      period: "This Quarter",
      newFollowers: "+3,421",
      unfollowers: "-234",
      netGrowth: "+3,187",
      growthRate: "+22.1%"
    }
  ];

  const topGrowthPosts = [
    {
      title: "How to Build Better User Experiences",
      newFollowers: "+89",
      unfollowers: "-3",
      netGrowth: "+86",
      date: "2024-01-15",
      type: "Guide"
    },
    {
      title: "10 Tips for Content Marketing",
      newFollowers: "+67",
      unfollowers: "-2",
      netGrowth: "+65",
      date: "2024-01-14",
      type: "Tips"
    },
    {
      title: "The Future of Social Media",
      newFollowers: "+54",
      unfollowers: "-1",
      netGrowth: "+53",
      date: "2024-01-13",
      type: "Article"
    },
    {
      title: "Weekly Design Inspiration",
      newFollowers: "+43",
      unfollowers: "-2",
      netGrowth: "+41",
      date: "2024-01-12",
      type: "Inspiration"
    }
  ];

  const followerSources = [
    { source: "Content Discovery", followers: "4.2K", percentage: "32.8%", color: "bg-blue-500" },
    { source: "Hashtag Search", followers: "3.1K", percentage: "24.2%", color: "bg-green-500" },
    { source: "Profile Visits", followers: "2.8K", percentage: "21.9%", color: "bg-purple-500" },
    { source: "Recommendations", followers: "1.9K", percentage: "14.8%", color: "bg-orange-500" },
    { source: "Other", followers: "800", percentage: "6.3%", color: "bg-gray-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Follower Growth</h1>
          <p className="text-muted-foreground">
            Track your follower growth and understand what drives new follows
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
        {followerMetrics.map((metric) => (
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

      {/* Growth Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Follower Growth Trends</CardTitle>
          <CardDescription>
            Your follower growth over the last 12 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Follower growth chart coming soon</p>
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
              Compare follower growth across different time periods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {growthTrends.map((trend) => (
                <div key={trend.period} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{trend.period}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1 text-green-600">
                        <UserPlus className="h-3 w-3" />
                        {trend.newFollowers}
                      </span>
                      <span className="flex items-center gap-1 text-red-600">
                        <UserMinus className="h-3 w-3" />
                        {trend.unfollowers}
                      </span>
                      <span className="flex items-center gap-1 text-blue-600">
                        <TrendingUp className="h-3 w-3" />
                        {trend.netGrowth}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary">{trend.growthRate}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follower Sources</CardTitle>
            <CardDescription>
              Where your new followers are coming from
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {followerSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                    <span className="font-medium">{source.source}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${source.color}`}
                        style={{ width: `${source.percentage}` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {source.followers}
                    </span>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {source.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Growth Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Top Growth Posts</CardTitle>
          <CardDescription>
            Posts that contributed most to follower growth this month
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
                    <Badge variant="outline">{post.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 text-green-600">
                      <UserPlus className="h-3 w-3" />
                      {post.newFollowers} new
                    </span>
                    <span className="flex items-center gap-1 text-red-600">
                      <UserMinus className="h-3 w-3" />
                      {post.unfollowers} lost
                    </span>
                    <span className="flex items-center gap-1 text-blue-600">
                      <TrendingUp className="h-3 w-3" />
                      {post.netGrowth} net
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Growth Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Growth Insights</CardTitle>
            <CardDescription>
              Key insights about your follower growth patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Best Content Type</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>How-to guides</strong> generate the most new followers (+89 avg)
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Peak Growth Time</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Tuesday afternoons</strong> see the highest follower growth
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Growth Trend</h4>
                <p className="text-sm text-muted-foreground">
                  Consistent growth with <strong>8.2% monthly increase</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Goals</CardTitle>
            <CardDescription>
              Track your progress towards follower growth objectives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Growth Goal</span>
                  <span>1,158 / 2,000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "58%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Followers Goal</span>
                  <span>12.8K / 20K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "64%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Retention Rate Goal</span>
                  <span>92.8% / 95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  TrendingUp, 
  Globe,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3,
  Users,
  Eye,
  MessageCircle,
  Share2
} from "lucide-react";

export default function EngagementSharePage() {
  const engagementMetrics = [
    {
      title: "Total Engagement",
      value: "45.2K",
      change: "+15.3%",
      trend: "up",
      icon: Heart,
      description: "Cross-platform engagement"
    },
    {
      title: "Engagement Rate",
      value: "8.7%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Average engagement rate"
    },
    {
      title: "Best Platform",
      value: "Instagram",
      change: "+12.5%",
      trend: "up",
      icon: Globe,
      description: "Highest engagement platform"
    },
    {
      title: "Engagement Share",
      value: "42.3%",
      change: "+3.2%",
      trend: "up",
      icon: BarChart3,
      description: "Instagram engagement share"
    }
  ];

  const platformEngagement = [
    {
      platform: "Instagram",
      engagement: "18.4K",
      rate: "9.2%",
      share: "42.3%",
      posts: 23,
      growth: "+12.5%",
      icon: "📷",
      color: "bg-pink-500"
    },
    {
      platform: "Twitter",
      engagement: "12.8K",
      rate: "8.7%",
      share: "29.5%",
      posts: 31,
      growth: "+8.2%",
      icon: "🐦",
      color: "bg-blue-500"
    },
    {
      platform: "LinkedIn",
      engagement: "8.9K",
      rate: "7.1%",
      share: "20.5%",
      posts: 15,
      growth: "+15.3%",
      icon: "💼",
      color: "bg-blue-600"
    },
    {
      platform: "TikTok",
      engagement: "3.1K",
      rate: "12.4%",
      share: "7.7%",
      posts: 8,
      growth: "+25.8%",
      icon: "🎵",
      color: "bg-black"
    }
  ];

  const engagementBreakdown = [
    { type: "Likes", count: "28.4K", percentage: 62.8, color: "bg-red-500" },
    { type: "Comments", count: "8.9K", percentage: 19.7, color: "bg-blue-500" },
    { type: "Shares", count: "7.9K", percentage: 17.5, color: "bg-green-500" }
  ];

  const topEngagementPosts = [
    {
      title: "How to Build Better User Experiences",
      platform: "Instagram",
      engagement: "3.2K",
      rate: "12.4%",
      likes: "2.1K",
      comments: "680",
      shares: "420",
      date: "2024-01-15"
    },
    {
      title: "10 Tips for Content Marketing",
      platform: "Twitter",
      engagement: "2.8K",
      rate: "11.2%",
      likes: "1.9K",
      comments: "520",
      shares: "380",
      date: "2024-01-14"
    },
    {
      title: "The Future of Social Media",
      platform: "LinkedIn",
      engagement: "2.1K",
      rate: "9.8%",
      likes: "1.4K",
      comments: "420",
      shares: "280",
      date: "2024-01-13"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Engagement Share</h1>
          <p className="text-muted-foreground">
            Track engagement distribution across different platforms and channels
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

      {/* Platform Engagement Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Engagement Distribution</CardTitle>
          <CardDescription>
            Engagement share across different platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Engagement distribution chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Engagement Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Engagement Breakdown</CardTitle>
          <CardDescription>
            Detailed engagement metrics for each platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platformEngagement.map((platform) => (
              <div key={platform.platform} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <h4 className="font-medium">{platform.platform}</h4>
                    <Badge variant="outline">{platform.growth}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">{platform.engagement}</span>
                      <div className="text-xs">Engagement</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.rate}</span>
                      <div className="text-xs">Engagement Rate</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.share}</span>
                      <div className="text-xs">Engagement Share</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.posts}</span>
                      <div className="text-xs">Posts</div>
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

      {/* Engagement Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Type Breakdown</CardTitle>
            <CardDescription>
              Distribution of engagement types across all platforms
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

        <Card>
          <CardHeader>
            <CardTitle>Top Engagement Posts</CardTitle>
            <CardDescription>
              Posts with highest engagement across platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topEngagementPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-sm">{post.title}</h4>
                      <Badge variant="outline">{post.platform}</Badge>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.engagement} total
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {post.rate} rate
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
      </div>

      {/* Engagement Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Insights</CardTitle>
          <CardDescription>
            Key insights about engagement distribution and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950">
              <h4 className="font-medium text-sm mb-1 text-green-800 dark:text-green-200">Top Performer</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Instagram leads with 42.3% engagement share and 9.2% engagement rate.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="font-medium text-sm mb-1 text-blue-800 dark:text-blue-200">Growth Opportunity</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                TikTok shows 25.8% growth with highest engagement rate at 12.4%.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950">
              <h4 className="font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200">Content Strategy</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Focus on visual content for Instagram and professional content for LinkedIn.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Engagement Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Goals</CardTitle>
          <CardDescription>
            Track progress towards engagement objectives across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Engagement Goal</span>
                  <span>45.2K / 60K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Instagram Engagement</span>
                  <span>18.4K / 25K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: "74%" }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Twitter Engagement</span>
                  <span>12.8K / 18K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "71%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>LinkedIn Engagement</span>
                  <span>8.9K / 12K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "74%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Filter,
  Download,
  Target,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

export default function PeriodComparisonPage() {
  const comparisonMetrics = [
    {
      metric: "Total Posts",
      current: "47",
      previous: "42",
      change: "+11.9%",
      trend: "up",
      icon: BarChart3
    },
    {
      metric: "Total Reach",
      current: "2.4M",
      previous: "2.1M",
      change: "+14.3%",
      trend: "up",
      icon: Eye
    },
    {
      metric: "Total Engagement",
      current: "45.2K",
      previous: "38.7K",
      change: "+16.8%",
      trend: "up",
      icon: Heart
    },
    {
      metric: "Follower Growth",
      current: "+1,247",
      previous: "+1,156",
      change: "+7.9%",
      trend: "up",
      icon: Users
    }
  ];

  const periodComparison = [
    {
      period: "This Month vs Last Month",
      current: "January 2024",
      previous: "December 2023",
      posts: { current: 47, previous: 42, change: "+11.9%" },
      reach: { current: "2.4M", previous: "2.1M", change: "+14.3%" },
      engagement: { current: "45.2K", previous: "38.7K", change: "+16.8%" },
      followers: { current: "+1,247", previous: "+1,156", change: "+7.9%" }
    },
    {
      period: "This Quarter vs Last Quarter",
      current: "Q4 2023",
      previous: "Q3 2023",
      posts: { current: 142, previous: 128, change: "+10.9%" },
      reach: { current: "7.2M", previous: "6.4M", change: "+12.5%" },
      engagement: { current: "128.4K", previous: "112.3K", change: "+14.3%" },
      followers: { current: "+3,421", previous: "+2,987", change: "+14.5%" }
    },
    {
      period: "This Year vs Last Year",
      current: "2023",
      previous: "2022",
      posts: { current: 487, previous: 423, change: "+15.1%" },
      reach: { current: "28.7M", previous: "24.1M", change: "+19.1%" },
      engagement: { current: "542.8K", previous: "456.2K", change: "+19.0%" },
      followers: { current: "+12,847", previous: "+10,234", change: "+25.5%" }
    }
  ];

  const topPerformingChanges = [
    {
      metric: "Engagement Rate",
      change: "+2.1%",
      trend: "up",
      description: "Engagement rate improved significantly",
      impact: "High"
    },
    {
      metric: "Reach per Post",
      change: "+8.7%",
      trend: "up",
      description: "Each post is reaching more people",
      impact: "High"
    },
    {
      metric: "Share Rate",
      change: "+15.3%",
      trend: "up",
      description: "Content is being shared more frequently",
      impact: "Medium"
    },
    {
      metric: "Click-through Rate",
      change: "-1.2%",
      trend: "down",
      description: "CTR decreased slightly",
      impact: "Low"
    }
  ];

  const contentTypeComparison = [
    {
      type: "Articles",
      current: { posts: 23, engagement: "8.7%", reach: "1.2M" },
      previous: { posts: 21, engagement: "7.9%", reach: "1.1M" },
      change: { posts: "+9.5%", engagement: "+10.1%", reach: "+9.1%" }
    },
    {
      type: "Videos",
      current: { posts: 12, engagement: "12.4%", reach: "980K" },
      previous: { posts: 10, engagement: "11.2%", reach: "850K" },
      change: { posts: "+20.0%", engagement: "+10.7%", reach: "+15.3%" }
    },
    {
      type: "Images",
      current: { posts: 8, engagement: "9.8%", reach: "650K" },
      previous: { posts: 7, engagement: "8.4%", reach: "580K" },
      change: { posts: "+14.3%", engagement: "+16.7%", reach: "+12.1%" }
    },
    {
      type: "Links",
      current: { posts: 4, engagement: "6.4%", reach: "420K" },
      previous: { posts: 4, engagement: "6.8%", reach: "450K" },
      change: { posts: "0%", engagement: "-5.9%", reach: "-6.7%" }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Period Comparison</h1>
          <p className="text-muted-foreground">
            Compare performance across different time periods to identify trends
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Select Periods
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics Comparison */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {comparisonMetrics.map((metric) => (
          <Card key={metric.metric}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.metric}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.current}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge 
                  variant={metric.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
                <span>vs previous period</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Previous: {metric.previous}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Period Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Period Comparison Trends</CardTitle>
          <CardDescription>
            Visual comparison of key metrics across different periods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Comparison chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Period Comparisons */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Period Comparisons</CardTitle>
          <CardDescription>
            Comprehensive comparison across different time periods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {periodComparison.map((comparison) => (
              <div key={comparison.period} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">{comparison.period}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{comparison.current}</Badge>
                    <span className="text-muted-foreground">vs</span>
                    <Badge variant="secondary">{comparison.previous}</Badge>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{comparison.posts.current}</div>
                    <div className="text-sm text-muted-foreground">Posts</div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      {comparison.posts.change.startsWith('+') ? (
                        <ArrowUp className="h-3 w-3 text-green-600" />
                      ) : comparison.posts.change.startsWith('-') ? (
                        <ArrowDown className="h-3 w-3 text-red-600" />
                      ) : (
                        <Minus className="h-3 w-3 text-gray-600" />
                      )}
                      <span className={comparison.posts.change.startsWith('+') ? 'text-green-600' : comparison.posts.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>
                        {comparison.posts.change}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{comparison.reach.current}</div>
                    <div className="text-sm text-muted-foreground">Reach</div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      {comparison.reach.change.startsWith('+') ? (
                        <ArrowUp className="h-3 w-3 text-green-600" />
                      ) : comparison.reach.change.startsWith('-') ? (
                        <ArrowDown className="h-3 w-3 text-red-600" />
                      ) : (
                        <Minus className="h-3 w-3 text-gray-600" />
                      )}
                      <span className={comparison.reach.change.startsWith('+') ? 'text-green-600' : comparison.reach.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>
                        {comparison.reach.change}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{comparison.engagement.current}</div>
                    <div className="text-sm text-muted-foreground">Engagement</div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      {comparison.engagement.change.startsWith('+') ? (
                        <ArrowUp className="h-3 w-3 text-green-600" />
                      ) : comparison.engagement.change.startsWith('-') ? (
                        <ArrowDown className="h-3 w-3 text-red-600" />
                      ) : (
                        <Minus className="h-3 w-3 text-gray-600" />
                      )}
                      <span className={comparison.engagement.change.startsWith('+') ? 'text-green-600' : comparison.engagement.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>
                        {comparison.engagement.change}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{comparison.followers.current}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      {comparison.followers.change.startsWith('+') ? (
                        <ArrowUp className="h-3 w-3 text-green-600" />
                      ) : comparison.followers.change.startsWith('-') ? (
                        <ArrowDown className="h-3 w-3 text-red-600" />
                      ) : (
                        <Minus className="h-3 w-3 text-gray-600" />
                      )}
                      <span className={comparison.followers.change.startsWith('+') ? 'text-green-600' : comparison.followers.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>
                        {comparison.followers.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Changes */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Changes</CardTitle>
            <CardDescription>
              Most significant changes in performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingChanges.map((change) => (
                <div key={change.metric} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-sm">{change.metric}</h4>
                      <Badge 
                        variant={change.impact === "High" ? "default" : change.impact === "Medium" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {change.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{change.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {change.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 text-green-600" />
                    ) : change.trend === "down" ? (
                      <ArrowDown className="h-4 w-4 text-red-600" />
                    ) : (
                      <Minus className="h-4 w-4 text-gray-600" />
                    )}
                    <span className={`font-medium ${
                      change.trend === "up" ? "text-green-600" : 
                      change.trend === "down" ? "text-red-600" : "text-gray-600"
                    }`}>
                      {change.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Type Comparison</CardTitle>
            <CardDescription>
              Performance changes by content type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentTypeComparison.map((type) => (
                <div key={type.type} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{type.type}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{type.current.posts} posts</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="font-medium">{type.current.engagement}</div>
                      <div className="text-xs text-muted-foreground">Engagement</div>
                      <div className={`text-xs ${type.change.engagement.startsWith('+') ? 'text-green-600' : type.change.engagement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                        {type.change.engagement}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{type.current.reach}</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                      <div className={`text-xs ${type.change.reach.startsWith('+') ? 'text-green-600' : type.change.reach.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                        {type.change.reach}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{type.change.posts}</div>
                      <div className="text-xs text-muted-foreground">Posts Change</div>
                      <div className={`text-xs ${type.change.posts.startsWith('+') ? 'text-green-600' : type.change.posts.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                        vs previous
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Comparison Insights</CardTitle>
          <CardDescription>
            Key insights and recommendations based on period comparisons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950">
              <h4 className="font-medium text-sm mb-1 text-green-800 dark:text-green-200">Positive Trend</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Engagement rate increased by 2.1% this month, indicating better content quality.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="font-medium text-sm mb-1 text-blue-800 dark:text-blue-200">Growth Opportunity</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Video content shows 20% growth in posts with 10.7% engagement increase.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950">
              <h4 className="font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200">Area for Improvement</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Click-through rate decreased by 1.2%, consider optimizing call-to-actions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

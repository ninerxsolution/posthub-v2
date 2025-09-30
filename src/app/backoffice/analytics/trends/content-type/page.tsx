"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  TrendingUp, 
  BarChart3,
  Filter,
  Download,
  Target,
  Image,
  Video,
  Music,
  Link,
  Calendar
} from "lucide-react";

export default function ContentPreferencesPage() {
  const contentMetrics = [
    {
      title: "Most Popular Type",
      value: "Articles",
      change: "+5.2%",
      trend: "up",
      icon: FileText,
      description: "Highest performing content"
    },
    {
      title: "Best Engagement",
      value: "Videos",
      change: "+8.1%",
      trend: "up",
      icon: Video,
      description: "Highest engagement rate"
    },
    {
      title: "Fastest Growing",
      value: "Infographics",
      change: "+15.3%",
      trend: "up",
      icon: Image,
      description: "Growing content type"
    },
    {
      title: "Total Content",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: BarChart3,
      description: "All content types"
    }
  ];

  const contentPerformance = [
    {
      type: "Articles",
      count: 324,
      engagement: "8.7%",
      reach: "2.1M",
      shares: "1.2K",
      avgTime: "3.2 min",
      icon: FileText,
      color: "bg-blue-500",
      trend: "+5.2%"
    },
    {
      type: "Videos",
      count: 156,
      engagement: "12.4%",
      reach: "1.8M",
      shares: "2.1K",
      avgTime: "2.1 min",
      icon: Video,
      color: "bg-red-500",
      trend: "+8.1%"
    },
    {
      type: "Images",
      count: 423,
      engagement: "9.8%",
      reach: "1.5M",
      shares: "1.8K",
      avgTime: "0.8 min",
      icon: Image,
      color: "bg-green-500",
      trend: "+3.7%"
    },
    {
      type: "Infographics",
      count: 89,
      engagement: "11.2%",
      reach: "980K",
      shares: "1.5K",
      avgTime: "1.5 min",
      icon: BarChart3,
      color: "bg-purple-500",
      trend: "+15.3%"
    },
    {
      type: "Links",
      count: 198,
      engagement: "6.4%",
      reach: "1.2M",
      shares: "890",
      avgTime: "0.3 min",
      icon: Link,
      color: "bg-orange-500",
      trend: "+2.1%"
    },
    {
      type: "Audio",
      count: 67,
      engagement: "7.8%",
      reach: "650K",
      shares: "420",
      avgTime: "4.2 min",
      icon: Music,
      color: "bg-pink-500",
      trend: "+4.5%"
    }
  ];

  const audiencePreferences = [
    {
      demographic: "18-24",
      preferred: "Videos",
      engagement: "14.2%",
      percentage: "25.3%"
    },
    {
      demographic: "25-34",
      preferred: "Articles",
      engagement: "9.8%",
      percentage: "32.1%"
    },
    {
      demographic: "35-44",
      preferred: "Infographics",
      engagement: "11.4%",
      percentage: "28.7%"
    },
    {
      demographic: "45+",
      preferred: "Articles",
      engagement: "7.2%",
      percentage: "13.9%"
    }
  ];

  const contentTrends = [
    {
      trend: "Video Content Growth",
      description: "Video content is growing 8.1% faster than other types",
      impact: "High",
      recommendation: "Increase video production by 25%"
    },
    {
      trend: "Infographic Popularity",
      description: "Infographics have the highest engagement growth at 15.3%",
      impact: "High",
      recommendation: "Create more visual data content"
    },
    {
      trend: "Article Engagement",
      description: "Long-form articles maintain steady engagement",
      impact: "Medium",
      recommendation: "Continue current article strategy"
    },
    {
      trend: "Audio Content Rise",
      description: "Audio content is gaining traction with younger audiences",
      impact: "Medium",
      recommendation: "Experiment with podcast-style content"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Preferences</h1>
          <p className="text-muted-foreground">
            Understand what content types your audience prefers most
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
        {contentMetrics.map((metric) => (
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

      {/* Content Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Content Performance Trends</CardTitle>
          <CardDescription>
            Performance of different content types over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Content performance chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Type Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Content Type Performance</CardTitle>
          <CardDescription>
            Detailed performance metrics for each content type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentPerformance.map((content) => (
              <div key={content.type} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <content.icon className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-medium">{content.type}</h4>
                    <Badge variant="outline">{content.count} posts</Badge>
                    <Badge variant="secondary">{content.trend}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">{content.engagement}</span>
                      <div className="text-xs">Engagement</div>
                    </div>
                    <div>
                      <span className="font-medium">{content.reach}</span>
                      <div className="text-xs">Reach</div>
                    </div>
                    <div>
                      <span className="font-medium">{content.shares}</span>
                      <div className="text-xs">Shares</div>
                    </div>
                    <div>
                      <span className="font-medium">{content.avgTime}</span>
                      <div className="text-xs">Avg. Time</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audience Preferences */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Audience Preferences by Age</CardTitle>
            <CardDescription>
              Content preferences across different age groups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {audiencePreferences.map((pref) => (
                <div key={pref.demographic} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium">{pref.demographic}</h4>
                      <Badge variant="outline">{pref.preferred}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{pref.engagement} engagement</span>
                      <span>{pref.percentage} of audience</span>
                    </div>
                  </div>
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${parseFloat(pref.percentage)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Trends & Insights</CardTitle>
            <CardDescription>
              Key trends and recommendations for content strategy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentTrends.map((trend) => (
                <div key={trend.trend} className="p-3 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-sm">{trend.trend}</h4>
                    <Badge 
                      variant={trend.impact === "High" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {trend.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{trend.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{trend.recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Strategy Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Content Strategy Recommendations</CardTitle>
          <CardDescription>
            Actionable recommendations based on content performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Video className="h-5 w-5 mb-2" />
              <span className="font-medium">Increase Video Content</span>
              <span className="text-xs text-muted-foreground">Videos have 12.4% engagement</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <BarChart3 className="h-5 w-5 mb-2" />
              <span className="font-medium">Create More Infographics</span>
              <span className="text-xs text-muted-foreground">15.3% growth trend</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <FileText className="h-5 w-5 mb-2" />
              <span className="font-medium">Optimize Articles</span>
              <span className="text-xs text-muted-foreground">Maintain steady performance</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

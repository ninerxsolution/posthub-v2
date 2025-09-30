"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3,
  Sun,
  Moon,
  Zap
} from "lucide-react";

export default function BestTimeToPostPage() {
  const timeMetrics = [
    {
      title: "Best Day",
      value: "Tuesday",
      change: "Same",
      trend: "stable",
      icon: Calendar,
      description: "Highest engagement day"
    },
    {
      title: "Best Hour",
      value: "2:00 PM",
      change: "+1 hour",
      trend: "up",
      icon: Clock,
      description: "Peak engagement time"
    },
    {
      title: "Peak Engagement",
      value: "12.4%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Best time engagement rate"
    },
    {
      title: "Optimal Posts",
      value: "3-4",
      change: "Same",
      trend: "stable",
      icon: Zap,
      description: "Posts per day"
    }
  ];

  const hourlyPerformance = [
    { hour: "6 AM", engagement: 2.1, reach: 15, posts: 2 },
    { hour: "7 AM", engagement: 3.2, reach: 28, posts: 3 },
    { hour: "8 AM", engagement: 4.8, reach: 45, posts: 5 },
    { hour: "9 AM", engagement: 6.1, reach: 62, posts: 8 },
    { hour: "10 AM", engagement: 7.3, reach: 78, posts: 12 },
    { hour: "11 AM", engagement: 8.2, reach: 85, posts: 15 },
    { hour: "12 PM", engagement: 9.1, reach: 92, posts: 18 },
    { hour: "1 PM", engagement: 8.7, reach: 88, posts: 16 },
    { hour: "2 PM", engagement: 12.4, reach: 100, posts: 22 },
    { hour: "3 PM", engagement: 11.2, reach: 95, posts: 20 },
    { hour: "4 PM", engagement: 9.8, reach: 82, posts: 17 },
    { hour: "5 PM", engagement: 8.1, reach: 68, posts: 14 },
    { hour: "6 PM", engagement: 6.9, reach: 55, posts: 11 },
    { hour: "7 PM", engagement: 5.2, reach: 42, posts: 8 },
    { hour: "8 PM", engagement: 4.7, reach: 38, posts: 6 },
    { hour: "9 PM", engagement: 4.1, reach: 35, posts: 5 },
    { hour: "10 PM", engagement: 3.3, reach: 28, posts: 3 },
    { hour: "11 PM", engagement: 2.8, reach: 22, posts: 2 }
  ];

  const weeklyPerformance = [
    { day: "Monday", engagement: 7.2, reach: 78, posts: 12 },
    { day: "Tuesday", engagement: 9.8, reach: 100, posts: 18 },
    { day: "Wednesday", engagement: 8.9, reach: 92, posts: 16 },
    { day: "Thursday", engagement: 8.4, reach: 88, posts: 15 },
    { day: "Friday", engagement: 8.1, reach: 85, posts: 14 },
    { day: "Saturday", engagement: 6.2, reach: 65, posts: 8 },
    { day: "Sunday", engagement: 5.5, reach: 58, posts: 6 }
  ];

  const timezoneRecommendations = [
    {
      timezone: "EST (Eastern)",
      bestTime: "2:00 PM",
      engagement: "12.4%",
      audience: "39.0%",
      icon: Sun
    },
    {
      timezone: "PST (Pacific)",
      bestTime: "11:00 AM",
      engagement: "10.8%",
      audience: "25.6%",
      icon: Sun
    },
    {
      timezone: "CST (Central)",
      bestTime: "1:00 PM",
      engagement: "11.2%",
      audience: "22.0%",
      icon: Sun
    },
    {
      timezone: "MST (Mountain)",
      bestTime: "12:00 PM",
      engagement: "9.8%",
      audience: "13.4%",
      icon: Sun
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Best Time to Post</h1>
          <p className="text-muted-foreground">
            Discover the optimal times to post for maximum engagement
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
            Set Schedule
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {timeMetrics.map((metric) => (
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
                  variant={metric.trend === "up" ? "default" : metric.trend === "stable" ? "secondary" : "destructive"}
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

      {/* Hourly Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Hourly Performance</CardTitle>
          <CardDescription>
            Engagement rates throughout the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Hourly performance chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hourly Breakdown</CardTitle>
            <CardDescription>
              Detailed hourly engagement and reach data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {hourlyPerformance.map((hour) => (
                <div key={hour.hour} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium w-12">{hour.hour}</span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${hour.engagement * 8}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{hour.engagement}% engagement</span>
                    <span>{hour.reach}% reach</span>
                    <span>{hour.posts} posts</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>
              Best days of the week for posting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyPerformance.map((day) => (
                <div key={day.day} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium w-20">{day.day}</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${day.engagement * 10}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{day.engagement}% engagement</span>
                    <span>{day.reach}% reach</span>
                    <span>{day.posts} posts</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timezone Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Timezone Recommendations</CardTitle>
          <CardDescription>
            Optimal posting times for different timezones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timezoneRecommendations.map((tz) => (
              <div key={tz.timezone} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <tz.icon className="h-5 w-5 text-yellow-500" />
                    <h4 className="font-medium">{tz.timezone}</h4>
                    <Badge variant="outline">{tz.bestTime}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {tz.engagement} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {tz.audience} of audience
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Target className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Posting Schedule Recommendations */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Optimal Posting Schedule</CardTitle>
            <CardDescription>
              Recommended posting times for maximum engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950">
                <h4 className="font-medium text-sm mb-1 text-green-800 dark:text-green-200">Peak Time</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Tuesday at 2:00 PM EST</strong> - 12.4% engagement rate
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950">
                <h4 className="font-medium text-sm mb-1 text-blue-800 dark:text-blue-200">Good Time</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Wednesday at 3:00 PM EST</strong> - 11.2% engagement rate
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-950">
                <h4 className="font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200">Decent Time</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>Thursday at 1:00 PM EST</strong> - 8.4% engagement rate
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Actions</CardTitle>
            <CardDescription>
              Set up automated posting based on optimal times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Set Optimal Posting Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Create Content Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Zap className="h-4 w-4 mr-2" />
                Enable Auto-Posting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

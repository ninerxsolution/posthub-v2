"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  TrendingUp, 
  Users,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3,
  Sun,
  Moon
} from "lucide-react";

export default function AudienceActiveTimesPage() {
  const activeTimeMetrics = [
    {
      title: "Peak Activity Hour",
      value: "2:00 PM",
      change: "+1 hour",
      trend: "up",
      icon: Clock,
      description: "Most active time"
    },
    {
      title: "Peak Activity Day",
      value: "Tuesday",
      change: "Same",
      trend: "stable",
      icon: Calendar,
      description: "Most active day"
    },
    {
      title: "Active Users",
      value: "8.2K",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Users active during peak"
    },
    {
      title: "Engagement Rate",
      value: "12.4%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      description: "Peak time engagement"
    }
  ];

  const hourlyActivity = [
    { hour: "6 AM", activity: 15, engagement: 2.1 },
    { hour: "7 AM", activity: 28, engagement: 3.2 },
    { hour: "8 AM", activity: 45, engagement: 4.8 },
    { hour: "9 AM", activity: 62, engagement: 6.1 },
    { hour: "10 AM", activity: 78, engagement: 7.3 },
    { hour: "11 AM", activity: 85, engagement: 8.2 },
    { hour: "12 PM", activity: 92, engagement: 9.1 },
    { hour: "1 PM", activity: 88, engagement: 8.7 },
    { hour: "2 PM", activity: 100, engagement: 12.4 },
    { hour: "3 PM", activity: 95, engagement: 11.2 },
    { hour: "4 PM", activity: 82, engagement: 9.8 },
    { hour: "5 PM", activity: 68, engagement: 8.1 },
    { hour: "6 PM", activity: 55, engagement: 6.9 },
    { hour: "7 PM", activity: 42, engagement: 5.2 },
    { hour: "8 PM", activity: 38, engagement: 4.7 },
    { hour: "9 PM", activity: 35, engagement: 4.1 },
    { hour: "10 PM", activity: 28, engagement: 3.3 },
    { hour: "11 PM", activity: 22, engagement: 2.8 }
  ];

  const weeklyActivity = [
    { day: "Monday", activity: 78, engagement: 7.2 },
    { day: "Tuesday", activity: 100, engagement: 9.8 },
    { day: "Wednesday", activity: 92, engagement: 8.9 },
    { day: "Thursday", activity: 88, engagement: 8.4 },
    { day: "Friday", activity: 85, engagement: 8.1 },
    { day: "Saturday", activity: 65, engagement: 6.2 },
    { day: "Sunday", activity: 58, engagement: 5.5 }
  ];

  const timezoneInsights = [
    {
      timezone: "EST (Eastern)",
      users: "3.2K",
      percentage: "39.0%",
      peakHour: "2:00 PM"
    },
    {
      timezone: "PST (Pacific)",
      users: "2.1K",
      percentage: "25.6%",
      peakHour: "11:00 AM"
    },
    {
      timezone: "CST (Central)",
      users: "1.8K",
      percentage: "22.0%",
      peakHour: "1:00 PM"
    },
    {
      timezone: "MST (Mountain)",
      users: "1.1K",
      percentage: "13.4%",
      peakHour: "12:00 PM"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audience Active Times</h1>
          <p className="text-muted-foreground">
            Understand when your audience is most active and engaged
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
        {activeTimeMetrics.map((metric) => (
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

      {/* Hourly Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Hourly Activity Pattern</CardTitle>
          <CardDescription>
            Audience activity and engagement throughout the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Hourly activity chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Breakdown */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hourly Activity Breakdown</CardTitle>
            <CardDescription>
              Detailed hourly activity and engagement rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {hourlyActivity.map((hour) => (
                <div key={hour.hour} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium w-12">{hour.hour}</span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${hour.activity}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{hour.activity}% activity</span>
                    <span>{hour.engagement}% engagement</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity Pattern</CardTitle>
            <CardDescription>
              Audience activity across different days of the week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyActivity.map((day) => (
                <div key={day.day} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium w-20">{day.day}</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${day.activity}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{day.activity}% activity</span>
                    <span>{day.engagement}% engagement</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timezone Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Timezone Insights</CardTitle>
          <CardDescription>
            Audience distribution across different timezones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timezoneInsights.map((insight) => (
              <div key={insight.timezone} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{insight.timezone}</h4>
                    <Badge variant="outline">{insight.peakHour} peak</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {insight.users} users
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {insight.percentage} of audience
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

      {/* Optimal Posting Times */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Optimal Posting Times</CardTitle>
            <CardDescription>
              Best times to post for maximum engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950">
                <h4 className="font-medium text-sm mb-1 text-green-800 dark:text-green-200">Best Time</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Tuesday at 2:00 PM</strong> - 12.4% engagement rate
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-950">
                <h4 className="font-medium text-sm mb-1 text-blue-800 dark:text-blue-200">Good Time</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Wednesday at 3:00 PM</strong> - 11.2% engagement rate
                </p>
              </div>
              <div className="p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-950">
                <h4 className="font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200">Decent Time</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>Thursday at 1:00 PM</strong> - 8.4% engagement rate
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Posting Schedule Recommendations</CardTitle>
            <CardDescription>
              Suggested posting schedule based on audience activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <Sun className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Morning Posts</span>
                </div>
                <span className="text-sm text-muted-foreground">9:00 AM - 11:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Afternoon Posts</span>
                </div>
                <span className="text-sm text-muted-foreground">1:00 PM - 3:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center space-x-3">
                  <Moon className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Evening Posts</span>
                </div>
                <span className="text-sm text-muted-foreground">6:00 PM - 8:00 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

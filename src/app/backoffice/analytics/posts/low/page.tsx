"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingDown, 
  Eye, 
  Heart,
  MessageCircle,
  Calendar,
  Filter,
  Download,
  AlertTriangle,
  RefreshCw,
  Edit,
  Trash2
} from "lucide-react";

export default function LowPerformingPostsPage() {
  const lowPerformingPosts = [
    {
      title: "Weekly Newsletter - January 8",
      views: "1.2K",
      engagement: "2.1%",
      reach: "3.4K",
      date: "2024-01-08",
      type: "Newsletter",
      issues: ["Low engagement", "Poor timing"]
    },
    {
      title: "Quick Update on Features",
      views: "890",
      engagement: "1.8%",
      reach: "2.1K",
      date: "2024-01-05",
      type: "Update",
      issues: ["Low reach", "Weak headline"]
    },
    {
      title: "Technical Documentation",
      views: "654",
      engagement: "1.2%",
      reach: "1.8K",
      date: "2024-01-03",
      type: "Documentation",
      issues: ["Too technical", "Poor formatting"]
    },
    {
      title: "Company Announcement",
      views: "1.1K",
      engagement: "2.3%",
      reach: "2.9K",
      date: "2024-01-01",
      type: "Announcement",
      issues: ["Low engagement", "Wrong audience"]
    }
  ];

  const performanceInsights = [
    {
      issue: "Low Engagement Rate",
      count: 12,
      percentage: 45.2,
      suggestion: "Improve content quality and add call-to-actions"
    },
    {
      issue: "Poor Timing",
      count: 8,
      percentage: 30.1,
      suggestion: "Post during peak audience activity hours"
    },
    {
      issue: "Weak Headlines",
      count: 6,
      percentage: 22.6,
      suggestion: "Use more compelling and descriptive headlines"
    },
    {
      issue: "Wrong Content Type",
      count: 4,
      percentage: 15.1,
      suggestion: "Match content type to audience preferences"
    }
  ];

  const improvementActions = [
    {
      action: "Repost with Better Timing",
      description: "Reschedule low-performing posts during peak hours",
      impact: "High",
      effort: "Low"
    },
    {
      action: "Improve Headlines",
      description: "Rewrite headlines to be more engaging",
      impact: "High",
      effort: "Medium"
    },
    {
      action: "Add Visual Elements",
      description: "Include images, videos, or infographics",
      impact: "Medium",
      effort: "Medium"
    },
    {
      action: "Delete Poor Content",
      description: "Remove posts that don't align with brand",
      impact: "Low",
      effort: "Low"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Low Performing Posts</h1>
          <p className="text-muted-foreground">
            Identify and improve your underperforming content
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
          <Button size="sm" variant="destructive">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Review All
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Low Performing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">26</div>
            <p className="text-xs text-muted-foreground">Out of 247 total posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">2.1%</div>
            <p className="text-xs text-muted-foreground">Below 5% threshold</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">1.2K</div>
            <p className="text-xs text-muted-foreground">Below 3K average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Improvement Potential</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+45%</div>
            <p className="text-xs text-muted-foreground">With optimizations</p>
          </CardContent>
        </Card>
      </div>

      {/* Low Performing Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>Low Performing Posts</CardTitle>
          <CardDescription>
            Posts with below-average performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lowPerformingPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{post.title}</h4>
                    <Badge variant="destructive">Low Performance</Badge>
                    <Badge variant="outline">{post.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.engagement} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      {post.reach} reach
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.issues.map((issue, issueIndex) => (
                      <Badge key={issueIndex} variant="secondary" className="text-xs">
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Issues Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Common Performance Issues</CardTitle>
            <CardDescription>
              Most frequent problems affecting post performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceInsights.map((insight) => (
                <div key={insight.issue} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{insight.issue}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{insight.suggestion}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${insight.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8 text-right">
                      {insight.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Improvement Actions</CardTitle>
            <CardDescription>
              Recommended actions to improve post performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {improvementActions.map((action) => (
                <div key={action.action} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{action.action}</h4>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={action.impact === "High" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {action.impact} Impact
                      </Badge>
                      <Badge 
                        variant={action.effort === "Low" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {action.effort} Effort
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>
            Track improvements in low-performing content over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <TrendingDown className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Performance improvement chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Bulk actions to improve low-performing content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <RefreshCw className="h-5 w-5 mb-2" />
              <span className="font-medium">Reschedule Posts</span>
              <span className="text-xs text-muted-foreground">Move to better times</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Edit className="h-5 w-5 mb-2" />
              <span className="font-medium">Bulk Edit</span>
              <span className="text-xs text-muted-foreground">Improve headlines</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Trash2 className="h-5 w-5 mb-2" />
              <span className="font-medium">Archive Posts</span>
              <span className="text-xs text-muted-foreground">Remove poor content</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Image,
  Video,
  Link,
  Calendar,
  Target,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Zap
} from "lucide-react";

export default function CreatePostActionPage() {
  const contentSuggestions = [
    {
      type: "Article",
      title: "How to Build Better User Experiences",
      description: "Based on your top-performing content",
      engagement: "12.4%",
      reach: "2.1M",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      type: "Video",
      title: "10 Tips for Content Marketing",
      description: "High engagement video content",
      engagement: "15.2%",
      reach: "1.8M",
      icon: Video,
      color: "bg-red-500"
    },
    {
      type: "Infographic",
      title: "Social Media Statistics 2024",
      description: "Visual data content performs well",
      engagement: "11.8%",
      reach: "1.2M",
      icon: Image,
      color: "bg-green-500"
    }
  ];

  const optimalTiming = [
    {
      day: "Tuesday",
      time: "2:00 PM",
      engagement: "12.4%",
      reach: "2.1M",
      recommendation: "Best overall performance"
    },
    {
      day: "Wednesday",
      time: "3:00 PM",
      engagement: "11.2%",
      reach: "1.9M",
      recommendation: "Good alternative time"
    },
    {
      day: "Thursday",
      time: "1:00 PM",
      engagement: "8.4%",
      reach: "1.6M",
      recommendation: "Decent performance"
    }
  ];

  const audienceInsights = [
    {
      insight: "Your audience loves how-to content",
      impact: "High",
      suggestion: "Create more tutorial-style posts"
    },
    {
      insight: "Videos get 3x more engagement",
      impact: "High",
      suggestion: "Consider video format for next post"
    },
    {
      insight: "Tuesday afternoons are peak time",
      impact: "Medium",
      suggestion: "Schedule posts for Tuesday 2 PM"
    },
    {
      insight: "Infographics perform well with 25-34 age group",
      impact: "Medium",
      suggestion: "Create visual content for this demographic"
    }
  ];

  const quickActions = [
    {
      action: "Create Article",
      description: "Write a new article based on trending topics",
      icon: FileText,
      estimatedTime: "30 min"
    },
    {
      action: "Create Video",
      description: "Record a video tutorial or explainer",
      icon: Video,
      estimatedTime: "45 min"
    },
    {
      action: "Create Infographic",
      description: "Design a visual data representation",
      icon: Image,
      estimatedTime: "60 min"
    },
    {
      action: "Share Link",
      description: "Share an interesting article or resource",
      icon: Link,
      estimatedTime: "5 min"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Post</h1>
          <p className="text-muted-foreground">
            Create content based on your analytics insights and audience preferences
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>
      </div>

      {/* Content Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>Content Suggestions</CardTitle>
          <CardDescription>
            AI-powered suggestions based on your best-performing content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentSuggestions.map((suggestion) => (
              <div key={suggestion.title} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-8 h-8 rounded-full ${suggestion.color} flex items-center justify-center`}>
                      <suggestion.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{suggestion.title}</h4>
                      <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                    </div>
                    <Badge variant="outline">{suggestion.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {suggestion.engagement} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {suggestion.reach} reach
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Use Template
                  </Button>
                  <Button size="sm">
                    Create
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optimal Timing */}
      <Card>
        <CardHeader>
          <CardTitle>Optimal Posting Times</CardTitle>
          <CardDescription>
            Best times to post based on your audience activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optimalTiming.map((timing) => (
              <div key={timing.day} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-medium">{timing.day} at {timing.time}</h4>
                    <Badge variant="outline">{timing.recommendation}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {timing.engagement} engagement
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {timing.reach} reach
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audience Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Audience Insights</CardTitle>
            <CardDescription>
              Key insights about your audience preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {audienceInsights.map((insight) => (
                <div key={insight.insight} className="p-3 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-sm">{insight.insight}</h4>
                    <Badge 
                      variant={insight.impact === "High" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {insight.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.suggestion}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Fast ways to create new content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Button 
                  key={action.action} 
                  variant="outline" 
                  className="w-full justify-start h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <action.icon className="h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">{action.action}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {action.estimatedTime}
                    </Badge>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Performance Predictions */}
      <Card>
        <CardHeader>
          <CardTitle>Content Performance Predictions</CardTitle>
          <CardDescription>
            Predicted performance based on similar content and timing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">2.1K</div>
              <div className="text-sm text-muted-foreground">Predicted Views</div>
              <div className="text-xs text-muted-foreground mt-1">Based on similar content</div>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">8.7%</div>
              <div className="text-sm text-muted-foreground">Predicted Engagement</div>
              <div className="text-xs text-muted-foreground mt-1">Based on timing & type</div>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">340</div>
              <div className="text-sm text-muted-foreground">Predicted Shares</div>
              <div className="text-xs text-muted-foreground mt-1">Based on audience behavior</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Creation Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Content Creation Tools</CardTitle>
          <CardDescription>
            Tools and resources to help you create better content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Zap className="h-5 w-5 mb-2" />
              <span className="font-medium">AI Content Generator</span>
              <span className="text-xs text-muted-foreground">Generate content ideas</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Target className="h-5 w-5 mb-2" />
              <span className="font-medium">Hashtag Optimizer</span>
              <span className="text-xs text-muted-foreground">Find trending hashtags</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <TrendingUp className="h-5 w-5 mb-2" />
              <span className="font-medium">Trending Topics</span>
              <span className="text-xs text-muted-foreground">Discover what's trending</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

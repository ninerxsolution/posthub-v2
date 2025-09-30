"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  Flag,
  Shield,
  MoreHorizontal,
  Calendar,
  User
} from "lucide-react";

export default function ContentModerationPage() {
  const moderationStats = [
    {
      title: "Total Posts",
      value: "12,847",
      change: "+1,247",
      trend: "up",
      icon: FileText,
      description: "All posts on platform"
    },
    {
      title: "Pending Review",
      value: "23",
      change: "-5",
      trend: "down",
      icon: Clock,
      description: "Awaiting moderation"
    },
    {
      title: "Flagged Content",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Flag,
      description: "Reported by users"
    },
    {
      title: "Removed Content",
      value: "45",
      change: "+12",
      trend: "up",
      icon: XCircle,
      description: "This month"
    }
  ];

  const pendingContent = [
    {
      id: "1",
      title: "How to Build Better User Experiences",
      author: "John Doe",
      type: "Article",
      status: "Pending",
      reportedBy: null,
      date: "2024-01-15",
      reason: "Automated review",
      priority: "Low"
    },
    {
      id: "2",
      title: "Controversial Political Opinion",
      author: "Jane Smith",
      type: "Post",
      status: "Flagged",
      reportedBy: "3 users",
      date: "2024-01-14",
      reason: "Inappropriate content",
      priority: "High"
    },
    {
      id: "3",
      title: "Spam Post - Buy Now!",
      author: "Spam User",
      type: "Post",
      status: "Flagged",
      reportedBy: "5 users",
      date: "2024-01-13",
      reason: "Spam",
      priority: "High"
    },
    {
      id: "4",
      title: "Weekly Newsletter",
      author: "Mike Johnson",
      type: "Newsletter",
      status: "Approved",
      reportedBy: null,
      date: "2024-01-12",
      reason: "Auto-approved",
      priority: "Low"
    }
  ];

  const contentTypes = [
    { type: "Articles", count: 3247, pending: 12, flagged: 3, color: "bg-blue-500" },
    { type: "Posts", count: 8234, pending: 8, flagged: 4, color: "bg-green-500" },
    { type: "Comments", count: 1236, pending: 2, flagged: 1, color: "bg-purple-500" },
    { type: "Media", count: 130, pending: 1, flagged: 0, color: "bg-orange-500" }
  ];

  const moderationActions = [
    { action: "Approve", count: 1247, change: "+12.5%", icon: CheckCircle, color: "text-green-600" },
    { action: "Reject", count: 89, change: "+5.2%", icon: XCircle, color: "text-red-600" },
    { action: "Flag", count: 23, change: "-2.1%", icon: Flag, color: "text-yellow-600" },
    { action: "Edit", count: 156, change: "+8.7%", icon: FileText, color: "text-blue-600" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Moderation</h1>
          <p className="text-muted-foreground">
            Review, approve, and moderate content across the platform
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Shield className="h-4 w-4 mr-2" />
            Auto-Moderate
          </Button>
        </div>
      </div>

      {/* Moderation Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {moderationStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge 
                  variant={stat.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <span>vs last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Content */}
      <Card>
        <CardHeader>
          <CardTitle>Content Pending Review</CardTitle>
          <CardDescription>
            Content awaiting moderation decisions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingContent.map((content) => (
              <div key={content.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{content.title}</h4>
                    <Badge 
                      variant={
                        content.status === "Approved" ? "default" :
                        content.status === "Flagged" ? "destructive" : "secondary"
                      }
                    >
                      {content.status}
                    </Badge>
                    <Badge variant="outline">{content.type}</Badge>
                    <Badge 
                      variant={content.priority === "High" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {content.priority} Priority
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {content.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {content.date}
                    </span>
                    {content.reportedBy && (
                      <span className="flex items-center gap-1 text-red-600">
                        <Flag className="h-3 w-3" />
                        {content.reportedBy}
                      </span>
                    )}
                    <span>{content.reason}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <XCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Content Types</CardTitle>
            <CardDescription>
              Breakdown of content by type and moderation status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentTypes.map((type) => (
                <div key={type.type} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                    <span className="font-medium">{type.type}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${type.color}`}
                        style={{ width: `${(type.count / 12847) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {type.count.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {type.pending} pending
                      </Badge>
                      <Badge variant="destructive" className="text-xs">
                        {type.flagged} flagged
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Moderation Actions</CardTitle>
            <CardDescription>
              Actions taken by moderators this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {moderationActions.map((action) => (
                <div key={action.action} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <action.icon className={`h-4 w-4 ${action.color}`} />
                    <span className="font-medium">{action.action}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">{action.count}</span>
                    <Badge variant="secondary" className="text-xs">
                      {action.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Moderation Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Moderation Tools</CardTitle>
          <CardDescription>
            Advanced tools for content moderation and management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Shield className="h-5 w-5 mb-2" />
              <span className="font-medium">Auto-Moderation Rules</span>
              <span className="text-xs text-muted-foreground">Configure automatic content filtering</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <AlertTriangle className="h-5 w-5 mb-2" />
              <span className="font-medium">Content Reports</span>
              <span className="text-xs text-muted-foreground">Review user-reported content</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <FileText className="h-5 w-5 mb-2" />
              <span className="font-medium">Moderation Logs</span>
              <span className="text-xs text-muted-foreground">View moderation history</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

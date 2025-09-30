"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Shield, 
  Bell,
  Database,
  Globe,
  Mail,
  Key,
  Users,
  FileText,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function SettingsPage() {
  const settingsCategories = [
    {
      title: "General Settings",
      description: "Basic platform configuration",
      icon: Settings,
      items: [
        { name: "Platform Name", value: "PostHub", status: "active" },
        { name: "Default Language", value: "English", status: "active" },
        { name: "Timezone", value: "UTC-5 (EST)", status: "active" },
        { name: "Maintenance Mode", value: "Disabled", status: "inactive" }
      ]
    },
    {
      title: "Security Settings",
      description: "Authentication and security configuration",
      icon: Shield,
      items: [
        { name: "Two-Factor Authentication", value: "Enabled", status: "active" },
        { name: "Password Policy", value: "Strong", status: "active" },
        { name: "Session Timeout", value: "24 hours", status: "active" },
        { name: "API Rate Limiting", value: "1000/hour", status: "active" }
      ]
    },
    {
      title: "Notification Settings",
      description: "Email and push notification preferences",
      icon: Bell,
      items: [
        { name: "Email Notifications", value: "Enabled", status: "active" },
        { name: "Push Notifications", value: "Enabled", status: "active" },
        { name: "SMS Notifications", value: "Disabled", status: "inactive" },
        { name: "Digest Frequency", value: "Daily", status: "active" }
      ]
    },
    {
      title: "Database Settings",
      description: "Database configuration and maintenance",
      icon: Database,
      items: [
        { name: "Database Type", value: "PostgreSQL", status: "active" },
        { name: "Backup Frequency", value: "Daily", status: "active" },
        { name: "Connection Pool", value: "20 connections", status: "active" },
        { name: "Query Logging", value: "Enabled", status: "active" }
      ]
    }
  ];

  const systemStatus = [
    { service: "Web Server", status: "Online", uptime: "99.9%", icon: Globe },
    { service: "Database", status: "Online", uptime: "99.8%", icon: Database },
    { service: "Email Service", status: "Online", uptime: "99.7%", icon: Mail },
    { service: "File Storage", status: "Online", uptime: "99.9%", icon: FileText }
  ];

  const recentChanges = [
    {
      change: "Updated password policy",
      user: "Admin",
      date: "2024-01-15 14:30",
      type: "Security"
    },
    {
      change: "Modified notification settings",
      user: "Admin",
      date: "2024-01-14 09:15",
      type: "Notification"
    },
    {
      change: "Changed default language",
      user: "Admin",
      date: "2024-01-13 16:45",
      type: "General"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure platform settings and system preferences
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Current status of system services and components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {systemStatus.map((service) => (
              <div key={service.service} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <service.icon className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium text-sm">{service.service}</h4>
                    <p className="text-xs text-muted-foreground">{service.uptime} uptime</p>
                  </div>
                </div>
                <Badge 
                  variant={service.status === "Online" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {service.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {settingsCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <category.icon className="h-5 w-5" />
                <span>{category.title}</span>
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={item.status === "active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Changes */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Changes</CardTitle>
          <CardDescription>
            Recent modifications to system settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentChanges.map((change, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-medium">{change.change}</h4>
                    <Badge variant="outline">{change.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {change.user}
                    </span>
                    <span>{change.date}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <AlertTriangle className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks and system operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Shield className="h-5 w-5 mb-2" />
              <span className="font-medium">Security Audit</span>
              <span className="text-xs text-muted-foreground">Review security settings</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Database className="h-5 w-5 mb-2" />
              <span className="font-medium">Backup Database</span>
              <span className="text-xs text-muted-foreground">Create system backup</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <RefreshCw className="h-5 w-5 mb-2" />
              <span className="font-medium">Clear Cache</span>
              <span className="text-xs text-muted-foreground">Refresh system cache</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

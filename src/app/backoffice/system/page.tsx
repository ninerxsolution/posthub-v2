"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Server, 
  Database,
  Cpu,
  HardDrive,
  Wifi,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Settings,
  BarChart3
} from "lucide-react";

export default function SystemHealthPage() {
  const systemMetrics = [
    {
      title: "CPU Usage",
      value: "45%",
      change: "+5%",
      trend: "up",
      icon: Cpu,
      description: "Current CPU utilization",
      status: "good"
    },
    {
      title: "Memory Usage",
      value: "68%",
      change: "+2%",
      trend: "up",
      icon: Server,
      description: "RAM utilization",
      status: "warning"
    },
    {
      title: "Disk Usage",
      value: "34%",
      change: "+1%",
      trend: "up",
      icon: HardDrive,
      description: "Storage utilization",
      status: "good"
    },
    {
      title: "Network I/O",
      value: "12 MB/s",
      change: "+3 MB/s",
      trend: "up",
      icon: Wifi,
      description: "Network throughput",
      status: "good"
    }
  ];

  const serviceStatus = [
    {
      service: "Web Server",
      status: "Online",
      uptime: "99.9%",
      responseTime: "45ms",
      requests: "1.2K/min",
      icon: Server,
      color: "text-green-600"
    },
    {
      service: "Database",
      status: "Online",
      uptime: "99.8%",
      responseTime: "12ms",
      requests: "850/min",
      icon: Database,
      color: "text-green-600"
    },
    {
      service: "Cache Server",
      status: "Online",
      uptime: "99.7%",
      responseTime: "2ms",
      requests: "3.4K/min",
      icon: Activity,
      color: "text-green-600"
    },
    {
      service: "File Storage",
      status: "Degraded",
      uptime: "98.2%",
      responseTime: "120ms",
      requests: "450/min",
      icon: HardDrive,
      color: "text-yellow-600"
    }
  ];

  const systemAlerts = [
    {
      type: "Warning",
      message: "Memory usage is above 65%",
      timestamp: "2024-01-15 14:30",
      severity: "medium"
    },
    {
      type: "Info",
      message: "Scheduled maintenance completed",
      timestamp: "2024-01-15 12:00",
      severity: "low"
    },
    {
      type: "Error",
      message: "File storage response time increased",
      timestamp: "2024-01-15 10:15",
      severity: "high"
    }
  ];

  const performanceHistory = [
    { time: "00:00", cpu: 35, memory: 62, disk: 33 },
    { time: "04:00", cpu: 28, memory: 58, disk: 33 },
    { time: "08:00", cpu: 45, memory: 68, disk: 34 },
    { time: "12:00", cpu: 52, memory: 72, disk: 34 },
    { time: "16:00", cpu: 48, memory: 70, disk: 34 },
    { time: "20:00", cpu: 41, memory: 66, disk: 34 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Health</h1>
          <p className="text-muted-foreground">
            Monitor system performance and health metrics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {systemMetrics.map((metric) => (
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
                  variant={
                    metric.status === "good" ? "default" :
                    metric.status === "warning" ? "secondary" : "destructive"
                  }
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
                <span>vs last hour</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Status */}
      <Card>
        <CardHeader>
          <CardTitle>Service Status</CardTitle>
          <CardDescription>
            Real-time status of system services and components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {serviceStatus.map((service) => (
              <div key={service.service} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <service.icon className={`h-5 w-5 ${service.color}`} />
                    <h4 className="font-medium">{service.service}</h4>
                    <Badge 
                      variant={service.status === "Online" ? "default" : "destructive"}
                    >
                      {service.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">{service.uptime}</span>
                      <div className="text-xs">Uptime</div>
                    </div>
                    <div>
                      <span className="font-medium">{service.responseTime}</span>
                      <div className="text-xs">Response Time</div>
                    </div>
                    <div>
                      <span className="font-medium">{service.requests}</span>
                      <div className="text-xs">Requests/min</div>
                    </div>
                    <div>
                      <span className="font-medium">24h</span>
                      <div className="text-xs">Last Restart</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Activity className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>
            Recent system alerts and notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    {alert.type === "Error" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    {alert.type === "Warning" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                    {alert.type === "Info" && <CheckCircle className="h-4 w-4 text-blue-500" />}
                    <h4 className="font-medium">{alert.message}</h4>
                    <Badge 
                      variant={
                        alert.severity === "high" ? "destructive" :
                        alert.severity === "medium" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <AlertTriangle className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Trends */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>
              System performance over the last 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Performance chart coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <CardDescription>
              Current resource utilization breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceHistory.slice(-3).map((point) => (
                <div key={point.time} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{point.time}</span>
                    <span>CPU: {point.cpu}% | Memory: {point.memory}% | Disk: {point.disk}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${Math.max(point.cpu, point.memory, point.disk)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Actions */}
      <Card>
        <CardHeader>
          <CardTitle>System Actions</CardTitle>
          <CardDescription>
            Administrative actions and system maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <RefreshCw className="h-5 w-5 mb-2" />
              <span className="font-medium">Restart Services</span>
              <span className="text-xs text-muted-foreground">Restart system services</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Download className="h-5 w-5 mb-2" />
              <span className="font-medium">System Backup</span>
              <span className="text-xs text-muted-foreground">Create system backup</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Settings className="h-5 w-5 mb-2" />
              <span className="font-medium">Maintenance Mode</span>
              <span className="text-xs text-muted-foreground">Enable maintenance mode</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

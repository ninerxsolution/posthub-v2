"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  UserPlus, 
  UserMinus,
  Shield,
  Ban,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar
} from "lucide-react";

export default function UserManagementPage() {
  const userStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+1,247",
      trend: "up",
      icon: Users,
      description: "Registered users"
    },
    {
      title: "Active Users",
      value: "8,234",
      change: "+892",
      trend: "up",
      icon: CheckCircle,
      description: "Active this month"
    },
    {
      title: "New Users",
      value: "+1,247",
      change: "+12.5%",
      trend: "up",
      icon: UserPlus,
      description: "This month"
    },
    {
      title: "Banned Users",
      value: "23",
      change: "-5",
      trend: "down",
      icon: Ban,
      description: "Currently banned"
    }
  ];

  const recentUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "User",
      status: "Active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      posts: 12,
      followers: 234
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Moderator",
      status: "Active",
      joinDate: "2024-01-14",
      lastActive: "1 day ago",
      posts: 45,
      followers: 1.2
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "User",
      status: "Suspended",
      joinDate: "2024-01-10",
      lastActive: "3 days ago",
      posts: 8,
      followers: 89
    },
    {
      id: "4",
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "User",
      status: "Active",
      joinDate: "2024-01-12",
      lastActive: "5 hours ago",
      posts: 23,
      followers: 456
    }
  ];

  const userRoles = [
    { role: "Admin", count: 3, color: "bg-red-500" },
    { role: "Moderator", count: 12, color: "bg-blue-500" },
    { role: "User", count: 12832, color: "bg-green-500" }
  ];

  const userActivity = [
    { period: "Today", active: 234, new: 12, banned: 0 },
    { period: "This Week", active: 1847, new: 89, banned: 2 },
    { period: "This Month", active: 8234, new: 1247, banned: 5 },
    { period: "This Year", active: 12847, new: 12847, banned: 23 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage users, roles, and permissions across the platform
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
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {userStats.map((stat) => (
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

      {/* Recent Users */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
          <CardDescription>
            Latest user registrations and activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <Badge 
                      variant={
                        user.status === "Active" ? "default" :
                        user.status === "Suspended" ? "destructive" : "secondary"
                      }
                    >
                      {user.status}
                    </Badge>
                    <Badge variant="outline">{user.role}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Joined {user.joinDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      {user.lastActive}
                    </span>
                    <span>{user.posts} posts</span>
                    <span>{user.followers}K followers</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Shield className="h-4 w-4" />
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

      {/* User Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Roles Distribution</CardTitle>
            <CardDescription>
              Breakdown of users by role and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userRoles.map((role) => (
                <div key={role.role} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                    <span className="font-medium">{role.role}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${role.color}`}
                        style={{ width: `${(role.count / 12847) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {role.count.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>
              User activity metrics across different time periods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userActivity.map((activity) => (
                <div key={activity.period} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{activity.period}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        {activity.active.toLocaleString()} active
                      </span>
                      <span className="flex items-center gap-1 text-blue-600">
                        <UserPlus className="h-3 w-3" />
                        {activity.new} new
                      </span>
                      <span className="flex items-center gap-1 text-red-600">
                        <Ban className="h-3 w-3" />
                        {activity.banned} banned
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Actions */}
      <Card>
        <CardHeader>
          <CardTitle>User Management Actions</CardTitle>
          <CardDescription>
            Common administrative tasks and bulk operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <UserPlus className="h-5 w-5 mb-2" />
              <span className="font-medium">Bulk User Import</span>
              <span className="text-xs text-muted-foreground">Import users from CSV</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Shield className="h-5 w-5 mb-2" />
              <span className="font-medium">Role Management</span>
              <span className="text-xs text-muted-foreground">Manage user permissions</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <AlertTriangle className="h-5 w-5 mb-2" />
              <span className="font-medium">Security Audit</span>
              <span className="text-xs text-muted-foreground">Review user security</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

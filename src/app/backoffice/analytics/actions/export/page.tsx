"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  BarChart3,
  Calendar,
  Filter,
  Settings,
  Mail,
  Share2,
  Database,
  FileSpreadsheet,
  FileImage,
  Clock,
  CheckCircle
} from "lucide-react";

export default function ExportReportsPage() {
  const exportOptions = [
    {
      type: "PDF Report",
      description: "Comprehensive analytics report in PDF format",
      icon: FileText,
      size: "2.4 MB",
      format: "PDF",
      includes: ["Charts", "Tables", "Insights", "Recommendations"]
    },
    {
      type: "Excel Spreadsheet",
      description: "Raw data in Excel format for further analysis",
      icon: FileSpreadsheet,
      size: "1.8 MB",
      format: "XLSX",
      includes: ["Raw Data", "Metrics", "Calculations", "Formulas"]
    },
    {
      type: "CSV Data",
      description: "Comma-separated values for data import",
      icon: Database,
      size: "0.9 MB",
      format: "CSV",
      includes: ["Raw Data", "Metrics", "Timestamps"]
    },
    {
      type: "Image Charts",
      description: "High-resolution charts and graphs",
      icon: FileImage,
      size: "5.2 MB",
      format: "PNG",
      includes: ["Charts", "Graphs", "Visualizations"]
    }
  ];

  const reportTemplates = [
    {
      name: "Executive Summary",
      description: "High-level overview for stakeholders",
      duration: "Last 30 days",
      sections: ["Overview", "Key Metrics", "Trends", "Recommendations"],
      lastGenerated: "2024-01-15"
    },
    {
      name: "Detailed Analytics",
      description: "Comprehensive performance analysis",
      duration: "Last 90 days",
      sections: ["All Metrics", "Charts", "Comparisons", "Insights"],
      lastGenerated: "2024-01-14"
    },
    {
      name: "Content Performance",
      description: "Content-specific analytics report",
      duration: "Last 60 days",
      sections: ["Posts", "Engagement", "Reach", "Growth"],
      lastGenerated: "2024-01-13"
    },
    {
      name: "Audience Insights",
      description: "Audience behavior and demographics",
      duration: "Last 45 days",
      sections: ["Demographics", "Behavior", "Preferences", "Growth"],
      lastGenerated: "2024-01-12"
    }
  ];

  const exportHistory = [
    {
      name: "Executive Summary - January 2024",
      type: "PDF",
      size: "2.4 MB",
      date: "2024-01-15 14:30",
      status: "Completed"
    },
    {
      name: "Detailed Analytics - Q4 2023",
      type: "Excel",
      size: "3.1 MB",
      date: "2024-01-10 09:15",
      status: "Completed"
    },
    {
      name: "Content Performance Report",
      type: "PDF",
      size: "1.8 MB",
      date: "2024-01-08 16:45",
      status: "Completed"
    },
    {
      name: "Audience Insights - December",
      type: "CSV",
      size: "0.7 MB",
      date: "2024-01-05 11:20",
      status: "Completed"
    }
  ];

  const scheduledExports = [
    {
      name: "Weekly Executive Summary",
      frequency: "Every Monday",
      format: "PDF",
      recipients: ["admin@posthub.com", "team@posthub.com"],
      nextRun: "2024-01-22 09:00"
    },
    {
      name: "Monthly Detailed Report",
      frequency: "First of month",
      format: "Excel",
      recipients: ["analytics@posthub.com"],
      nextRun: "2024-02-01 08:00"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Export Reports</h1>
          <p className="text-muted-foreground">
            Export your analytics data in various formats for analysis and sharing
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Now
          </Button>
        </div>
      </div>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Export Options</CardTitle>
          <CardDescription>
            Choose the format and content for your export
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {exportOptions.map((option) => (
              <div key={option.type} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <option.icon className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-medium">{option.type}</h4>
                    <Badge variant="outline">{option.format}</Badge>
                    <Badge variant="secondary">{option.size}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {option.includes.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>
            Pre-configured report templates for common use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportTemplates.map((template) => (
              <div key={template.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{template.name}</h4>
                    <Badge variant="outline">{template.duration}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Last generated: {template.lastGenerated}</span>
                    <div className="flex flex-wrap gap-1">
                      {template.sections.map((section) => (
                        <Badge key={section} variant="secondary" className="text-xs">
                          {section}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export History */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Export History</CardTitle>
            <CardDescription>
              Recently generated exports and downloads
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exportHistory.map((export_, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-sm">{export_.name}</h4>
                      <Badge variant="outline">{export_.type}</Badge>
                      <Badge variant="secondary">{export_.size}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {export_.date}
                      </span>
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        {export_.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scheduled Exports</CardTitle>
            <CardDescription>
              Automated exports that run on a schedule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledExports.map((scheduled) => (
                <div key={scheduled.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-sm">{scheduled.name}</h4>
                      <Badge variant="outline">{scheduled.format}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {scheduled.frequency}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {scheduled.recipients.length} recipients
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Next run: {scheduled.nextRun}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Export Settings</CardTitle>
          <CardDescription>
            Configure default export options and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Settings className="h-5 w-5 mb-2" />
              <span className="font-medium">Default Format</span>
              <span className="text-xs text-muted-foreground">Set preferred export format</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Mail className="h-5 w-5 mb-2" />
              <span className="font-medium">Email Notifications</span>
              <span className="text-xs text-muted-foreground">Get notified when exports complete</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <BarChart3 className="h-5 w-5 mb-2" />
              <span className="font-medium">Data Retention</span>
              <span className="text-xs text-muted-foreground">Manage export history</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

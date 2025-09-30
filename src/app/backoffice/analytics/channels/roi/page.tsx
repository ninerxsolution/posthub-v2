"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  Target,
  Calendar,
  Filter,
  Download,
  BarChart3,
  Users,
  Eye,
  MousePointer,
  ShoppingCart,
  Percent
} from "lucide-react";

export default function ROIConversionsPage() {
  const roiMetrics = [
    {
      title: "Total ROI",
      value: "340%",
      change: "+45%",
      trend: "up",
      icon: DollarSign,
      description: "Return on investment"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      trend: "up",
      icon: Target,
      description: "Overall conversion rate"
    },
    {
      title: "Cost per Click",
      value: "$0.45",
      change: "-$0.12",
      trend: "down",
      icon: MousePointer,
      description: "Average CPC"
    },
    {
      title: "Revenue Generated",
      value: "$12.4K",
      change: "+28.5%",
      trend: "up",
      icon: TrendingUp,
      description: "Total revenue this month"
    }
  ];

  const platformROI = [
    {
      platform: "Instagram",
      roi: "420%",
      conversions: 89,
      revenue: "$5.2K",
      cost: "$1.2K",
      cpc: "$0.38",
      ctr: "4.2%",
      icon: "📷",
      color: "bg-pink-500"
    },
    {
      platform: "Twitter",
      roi: "280%",
      conversions: 67,
      revenue: "$3.8K",
      cost: "$1.4K",
      cpc: "$0.52",
      ctr: "3.1%",
      icon: "🐦",
      color: "bg-blue-500"
    },
    {
      platform: "LinkedIn",
      roi: "380%",
      conversions: 45,
      revenue: "$2.8K",
      cost: "$0.7K",
      cpc: "$0.41",
      ctr: "3.8%",
      icon: "💼",
      color: "bg-blue-600"
    },
    {
      platform: "TikTok",
      roi: "520%",
      conversions: 23,
      revenue: "$0.6K",
      cost: "$0.1K",
      cpc: "$0.28",
      ctr: "5.1%",
      icon: "🎵",
      color: "bg-black"
    }
  ];

  const conversionFunnel = [
    { stage: "Impressions", count: "2.4M", rate: "100%" },
    { stage: "Clicks", count: "12.4K", rate: "0.52%" },
    { stage: "Leads", count: "1.2K", rate: "9.7%" },
    { stage: "Conversions", count: "224", rate: "18.7%" }
  ];

  const topConvertingContent = [
    {
      title: "How to Build Better User Experiences",
      platform: "Instagram",
      conversions: 23,
      revenue: "$1.2K",
      ctr: "4.8%",
      conversionRate: "12.4%",
      date: "2024-01-15"
    },
    {
      title: "10 Tips for Content Marketing",
      platform: "Twitter",
      conversions: 18,
      revenue: "$980",
      ctr: "3.2%",
      conversionRate: "9.8%",
      date: "2024-01-14"
    },
    {
      title: "The Future of Social Media",
      platform: "LinkedIn",
      conversions: 15,
      revenue: "$750",
      ctr: "2.8%",
      conversionRate: "8.4%",
      date: "2024-01-13"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ROI & Conversions</h1>
          <p className="text-muted-foreground">
            Track return on investment and conversion performance across platforms
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
        {roiMetrics.map((metric) => (
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

      {/* ROI Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Trends</CardTitle>
          <CardDescription>
            Return on investment trends over the last 12 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">ROI trends chart coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform ROI Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Platform ROI Breakdown</CardTitle>
          <CardDescription>
            Return on investment and conversion metrics by platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platformROI.map((platform) => (
              <div key={platform.platform} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <h4 className="font-medium">{platform.platform}</h4>
                    <Badge variant="outline">{platform.roi} ROI</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">{platform.conversions}</span>
                      <div className="text-xs">Conversions</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.revenue}</span>
                      <div className="text-xs">Revenue</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.cost}</span>
                      <div className="text-xs">Cost</div>
                    </div>
                    <div>
                      <span className="font-medium">{platform.cpc}</span>
                      <div className="text-xs">CPC</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <DollarSign className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conversion Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>
              Conversion funnel from impressions to conversions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionFunnel.map((stage, index) => (
                <div key={stage.stage} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-sm">{stage.stage}</h4>
                      <Badge variant="outline">{stage.rate}</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${100 - (index * 20)}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium ml-4">{stage.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Converting Content</CardTitle>
            <CardDescription>
              Content with highest conversion rates and revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topConvertingContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-medium text-sm">{content.title}</h4>
                      <Badge variant="outline">{content.platform}</Badge>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ShoppingCart className="h-3 w-3" />
                        {content.conversions} conversions
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {content.revenue} revenue
                      </span>
                      <span className="flex items-center gap-1">
                        <Percent className="h-3 w-3" />
                        {content.conversionRate} rate
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
      </div>

      {/* ROI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Insights</CardTitle>
          <CardDescription>
            Key insights about return on investment and conversion performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950">
              <h4 className="font-medium text-sm mb-1 text-green-800 dark:text-green-200">Best ROI Platform</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                TikTok delivers 520% ROI with lowest CPC at $0.28 and highest CTR at 5.1%.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="font-medium text-sm mb-1 text-blue-800 dark:text-blue-200">Revenue Leader</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Instagram generates $5.2K revenue with 89 conversions and 420% ROI.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950">
              <h4 className="font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200">Optimization Opportunity</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Twitter has highest CPC at $0.52, consider optimizing ad targeting.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ROI Goals */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Goals</CardTitle>
          <CardDescription>
            Track progress towards ROI and conversion objectives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total ROI Goal</span>
                  <span>340% / 400%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Conversion Rate Goal</span>
                  <span>3.2% / 4.0%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Revenue Goal</span>
                  <span>$12.4K / $15K</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "83%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPC Goal</span>
                  <span>$0.45 / $0.40</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "89%" }}></div>
                </div>
                <p className="text-xs text-red-600">Above target - optimize campaigns</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

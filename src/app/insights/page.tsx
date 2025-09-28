"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/insights/MetricCard";
import { Chart } from "@/components/insights/Chart";
import { ProgressBar } from "@/components/insights/ProgressBar";

// Mock data - in a real app, this would come from your analytics API
const mockData = {
  overview: {
    totalPosts: { allTime: 1247, weekly: 23, monthly: 89 },
    reach: { impressions: 45678, reach: 32145 },
    engagement: { likes: 1234, shares: 567, comments: 234, clicks: 890 },
    growthTrends: [
      { month: "Jan", posts: 45, engagement: 1200 },
      { month: "Feb", posts: 52, engagement: 1350 },
      { month: "Mar", posts: 48, engagement: 1420 },
      { month: "Apr", posts: 61, engagement: 1580 },
      { month: "May", posts: 55, engagement: 1650 },
      { month: "Jun", posts: 67, engagement: 1800 },
    ],
  },
  topPosts: [
    {
      id: 1,
      title: "10 Tips for Better Social Media Engagement",
      platform: "LinkedIn",
      engagement: 95.2,
      reach: 12500,
      ctr: 8.4,
      date: "2024-06-15",
    },
    {
      id: 2,
      title: "Behind the Scenes: Our Product Launch",
      platform: "Instagram",
      engagement: 87.8,
      reach: 8900,
      ctr: 6.2,
      date: "2024-06-12",
    },
    {
      id: 3,
      title: "Industry Trends Report Q2 2024",
      platform: "Twitter",
      engagement: 82.1,
      reach: 15600,
      ctr: 7.8,
      date: "2024-06-10",
    },
  ],
  lowPosts: [
    {
      id: 4,
      title: "Quick Update: Office Hours",
      platform: "Facebook",
      engagement: 12.3,
      reach: 1200,
      ctr: 1.2,
      date: "2024-06-08",
    },
    {
      id: 5,
      title: "Weather Update",
      platform: "Twitter",
      engagement: 8.7,
      reach: 800,
      ctr: 0.8,
      date: "2024-06-05",
    },
  ],
  audience: {
    demographics: {
      age: [
        { range: "18-24", percentage: 25 },
        { range: "25-34", percentage: 35 },
        { range: "35-44", percentage: 22 },
        { range: "45-54", percentage: 12 },
        { range: "55+", percentage: 6 },
      ],
      gender: [
        { type: "Female", percentage: 58 },
        { type: "Male", percentage: 40 },
        { type: "Other", percentage: 2 },
      ],
      location: [
        { country: "United States", percentage: 45 },
        { country: "United Kingdom", percentage: 18 },
        { country: "Canada", percentage: 12 },
        { country: "Australia", percentage: 8 },
        { country: "Other", percentage: 17 },
      ],
    },
    activeTimes: [
      { hour: "9 AM", engagement: 85 },
      { hour: "12 PM", engagement: 95 },
      { hour: "3 PM", engagement: 78 },
      { hour: "6 PM", engagement: 92 },
      { hour: "9 PM", engagement: 88 },
    ],
    followerGrowth: [
      { month: "Jan", followers: 12000, change: 5.2 },
      { month: "Feb", followers: 12600, change: 4.8 },
      { month: "Mar", followers: 13200, change: 4.5 },
      { month: "Apr", followers: 13800, change: 4.2 },
      { month: "May", followers: 14400, change: 4.0 },
      { month: "Jun", followers: 15000, change: 3.8 },
    ],
  },
  channels: {
    performance: [
      { platform: "LinkedIn", posts: 45, engagement: 89.2, reach: 25000 },
      { platform: "Instagram", posts: 38, engagement: 76.8, reach: 18000 },
      { platform: "Twitter", posts: 52, engagement: 82.1, reach: 22000 },
      { platform: "Facebook", posts: 28, engagement: 65.4, reach: 15000 },
    ],
    engagementShare: [
      { platform: "LinkedIn", percentage: 35 },
      { platform: "Instagram", percentage: 28 },
      { platform: "Twitter", percentage: 25 },
      { platform: "Facebook", percentage: 12 },
    ],
  },
  recommendations: [
    "Carousel posts drive 30% more engagement than single images",
    "Posts published at 12 PM on weekdays get 25% more reach",
    "Video content has 2.3x higher engagement rate than static posts",
    "LinkedIn posts with industry hashtags perform 40% better",
  ],
};

export default function InsightsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [exportFormat, setExportFormat] = useState("pdf");
  const [showComparison, setShowComparison] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const getEngagementRate = (post: any) => {
    return ((post.engagement / post.reach) * 100).toFixed(1);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your social media performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
            <option value="quarterly">This Quarter</option>
            <option value="yearly">This Year</option>
          </select>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? "Hide" : "Show"} Comparison
          </Button>
          <Button variant="outline" size="sm">
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Posts"
            value={mockData.overview.totalPosts.allTime}
            badges={[
              `${mockData.overview.totalPosts.weekly} this week`,
              `${mockData.overview.totalPosts.monthly} this month`
            ]}
            icon={
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />

          <MetricCard
            title="Reach & Impressions"
            value={formatNumber(mockData.overview.reach.reach)}
            subtitle={`${formatNumber(mockData.overview.reach.impressions)} impressions`}
            icon={
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />

          <MetricCard
            title="Total Engagement"
            value={formatNumber(mockData.overview.engagement.likes + mockData.overview.engagement.shares + mockData.overview.engagement.comments)}
            subtitle={`${mockData.overview.engagement.likes} likes • ${mockData.overview.engagement.shares} shares • ${mockData.overview.engagement.comments} comments`}
            icon={
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />

          <MetricCard
            title="Growth Trend"
            value="+12.5%"
            subtitle="vs last month"
            trend={{ value: "12.5%", isPositive: true }}
            icon={
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>

        {/* Growth Chart */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Engagement Growth Over Time</h3>
          <Chart
            data={mockData.overview.growthTrends.map(item => ({
              label: item.month,
              value: item.engagement
            }))}
            type="bar"
            height={200}
          />
        </div>
      </section>

      {/* Post Performance Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Post Performance</h2>
        
        {/* Top Performing Posts */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Top Performing Posts</h3>
          <div className="space-y-4">
            {mockData.topPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{post.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">{post.platform}</Badge>
                    <span>{post.date}</span>
                    <span>{formatNumber(post.reach)} reach</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-green-600">{post.engagement}%</p>
                    <p className="text-muted-foreground">Engagement</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{post.ctr}%</p>
                    <p className="text-muted-foreground">CTR</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Performing Posts */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Posts Needing Attention</h3>
          <div className="space-y-4">
            {mockData.lowPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{post.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">{post.platform}</Badge>
                    <span>{post.date}</span>
                    <span>{formatNumber(post.reach)} reach</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-red-600">{post.engagement}%</p>
                    <p className="text-muted-foreground">Engagement</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{post.ctr}%</p>
                    <p className="text-muted-foreground">CTR</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Insights Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Audience Insights</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Demographics */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
            <div className="space-y-3">
              {mockData.audience.demographics.age.map((age, index) => (
                <ProgressBar
                  key={index}
                  label={age.range}
                  value={age.percentage}
                  max={100}
                />
              ))}
            </div>
          </div>

          {/* Gender Distribution */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
            <div className="space-y-3">
              {mockData.audience.demographics.gender.map((gender, index) => (
                <ProgressBar
                  key={index}
                  label={gender.type}
                  value={gender.percentage}
                  max={100}
                  color="bg-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Active Times */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Peak Engagement Times</h3>
            <div className="space-y-3">
              {mockData.audience.activeTimes.map((time, index) => (
                <ProgressBar
                  key={index}
                  label={time.hour}
                  value={time.engagement}
                  max={100}
                  color="bg-green-500"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Follower Growth */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Follower Growth</h3>
          <Chart
            data={mockData.audience.followerGrowth.map(item => ({
              label: item.month,
              value: item.followers,
              color: "bg-blue-500"
            }))}
            type="bar"
            height={200}
          />
        </div>
      </section>

      {/* Channel Insights Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Channel Performance</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Platform Performance */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Performance by Platform</h3>
            <div className="space-y-4">
              {mockData.channels.performance.map((platform, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{platform.platform}</Badge>
                    <span className="text-sm text-muted-foreground">{platform.posts} posts</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-center">
                      <p className="font-semibold">{platform.engagement}%</p>
                      <p className="text-muted-foreground">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">{formatNumber(platform.reach)}</p>
                      <p className="text-muted-foreground">Reach</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Share */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Engagement Share by Channel</h3>
            <div className="space-y-4">
              {mockData.channels.engagementShare.map((channel, index) => (
                <ProgressBar
                  key={index}
                  label={channel.platform}
                  value={channel.percentage}
                  max={100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trends & Recommendations Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Trends & Recommendations</h2>
        
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Smart Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockData.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actionable Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Actionable Next Steps</h2>
        
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ready to create your next high-performing post?</h3>
              <p className="text-muted-foreground">
                Use these insights to create content that resonates with your audience
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={exportFormat}
                onChange={(e) => setExportFormat(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background text-sm"
              >
                <option value="pdf">PDF Report</option>
                <option value="excel">Excel Data</option>
                <option value="csv">CSV Export</option>
              </select>
              <Button variant="outline" size="sm">
                Export {exportFormat.toUpperCase()}
              </Button>
              <Button size="sm">
                Create New Post
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

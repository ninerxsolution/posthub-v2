"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Lightbulb, TrendingUp, Target, Clock, Users, Zap, CheckCircle, AlertCircle } from "lucide-react";

export default function SmartSuggestionsPage() {
  const suggestions = [
    {
      id: 1,
      type: "content",
      priority: "high",
      title: "Carousel posts drive 30% more engagement",
      description: "Based on your recent performance, carousel posts with 3-5 slides show significantly higher engagement rates.",
      impact: "+30% engagement",
      action: "Create carousel post",
      icon: TrendingUp,
      color: "green"
    },
    {
      id: 2,
      type: "timing",
      priority: "medium",
      title: "Post between 9-11 AM for maximum reach",
      description: "Your audience is most active during morning hours. Posts published at 10 AM average 25% more reach.",
      impact: "+25% reach",
      action: "Schedule morning posts",
      icon: Clock,
      color: "blue"
    },
    {
      id: 3,
      type: "audience",
      priority: "high",
      title: "Target 25-34 age group with video content",
      description: "Your 25-34 demographic shows 40% higher engagement with video content compared to static images.",
      impact: "+40% engagement",
      action: "Create video content",
      icon: Users,
      color: "purple"
    },
    {
      id: 4,
      type: "hashtag",
      priority: "low",
      title: "Use trending hashtags in your niche",
      description: "Including 3-5 relevant hashtags can increase discoverability by 15% without appearing spammy.",
      impact: "+15% discoverability",
      action: "Update hashtag strategy",
      icon: Target,
      color: "orange"
    },
    {
      id: 5,
      type: "frequency",
      priority: "medium",
      title: "Increase posting frequency to 3x per week",
      description: "Your current posting schedule shows room for growth. Increasing to 3 posts per week could boost overall engagement.",
      impact: "+20% overall engagement",
      action: "Plan more content",
      icon: Zap,
      color: "yellow"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "low": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return AlertCircle;
      case "medium": return Clock;
      case "low": return CheckCircle;
      default: return CheckCircle;
    }
  };

  return (
    <SidebarProvider>
      <SidebarInset>
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Smart Suggestions</h1>
              <p className="text-muted-foreground">
                AI-powered recommendations to optimize your content strategy
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Zap className="h-4 w-4 mr-2 inline" />
                Apply All High Priority
              </button>
            </div>
          </div>

          {/* Priority Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-800">High Priority</span>
              </div>
              <p className="text-2xl font-bold text-red-600">2</p>
              <p className="text-sm text-red-700">Immediate action needed</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold text-yellow-800">Medium Priority</span>
              </div>
              <p className="text-2xl font-bold text-yellow-600">2</p>
              <p className="text-sm text-yellow-700">Plan for this week</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Low Priority</span>
              </div>
              <p className="text-2xl font-bold text-green-600">1</p>
              <p className="text-sm text-green-700">Consider for future</p>
            </div>
          </div>

          {/* Suggestions List */}
          <div className="space-y-4">
            {suggestions.map((suggestion) => {
              const PriorityIcon = getPriorityIcon(suggestion.priority);
              const SuggestionIcon = suggestion.icon;
              
              return (
                <div key={suggestion.id} className="bg-background border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${suggestion.color}-100`}>
                      <SuggestionIcon className={`h-6 w-6 text-${suggestion.color}-600`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{suggestion.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(suggestion.priority)}`}>
                          <PriorityIcon className="h-3 w-3 inline mr-1" />
                          {suggestion.priority} priority
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{suggestion.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Expected Impact: </span>
                            <span className="font-semibold text-green-600">{suggestion.impact}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 border border-input bg-background rounded-lg hover:bg-accent transition-colors text-sm">
                            Learn More
                          </button>
                          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                            {suggestion.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Implementation Tips */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <h3 className="text-lg font-semibold">Implementation Tips</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Quick Wins (This Week)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Schedule posts for 9-11 AM time slots</li>
                  <li>• Create your first carousel post</li>
                  <li>• Update hashtag strategy with 3-5 relevant tags</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Long-term Strategy (This Month)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Develop video content for 25-34 demographic</li>
                  <li>• Increase posting frequency to 3x per week</li>
                  <li>• A/B test different content formats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

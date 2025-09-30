"use client";

import BackofficeLeftSidebar from "@/components/backoffice/LeftSidebar";
import BackofficeNavbar from "@/components/backoffice/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Users, MapPin, Calendar, Clock, Globe, TrendingUp } from "lucide-react";

export default function AudienceDemographicsPage() {
  const demographics = {
    ageGroups: [
      { range: "18-24", percentage: 25, count: 1250 },
      { range: "25-34", percentage: 35, count: 1750 },
      { range: "35-44", percentage: 22, count: 1100 },
      { range: "45-54", percentage: 12, count: 600 },
      { range: "55+", percentage: 6, count: 300 }
    ],
    gender: [
      { type: "Female", percentage: 58, count: 2900 },
      { type: "Male", percentage: 40, count: 2000 },
      { type: "Other", percentage: 2, count: 100 }
    ],
    topLocations: [
      { country: "United States", percentage: 35, count: 1750 },
      { country: "United Kingdom", percentage: 18, count: 900 },
      { country: "Canada", percentage: 12, count: 600 },
      { country: "Australia", percentage: 10, count: 500 },
      { country: "Germany", percentage: 8, count: 400 }
    ]
  };

  return (
    <SidebarProvider>
      <BackofficeLeftSidebar />
      <SidebarInset>
        <BackofficeNavbar />
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Audience Demographics</h1>
              <p className="text-muted-foreground">
                Detailed insights into your audience composition
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-input bg-background rounded-lg hover:bg-accent transition-colors">
                <Globe className="h-4 w-4 mr-2 inline" />
                Export Data
              </button>
            </div>
          </div>

          {/* Age Groups */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Age Distribution</h3>
            </div>
            <div className="space-y-3">
              {demographics.ageGroups.map((group) => (
                <div key={group.range} className="flex items-center gap-4">
                  <div className="w-16 text-sm font-medium">{group.range}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>{group.count.toLocaleString()} users</span>
                      <span className="text-muted-foreground">{group.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${group.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gender Distribution */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold">Gender Distribution</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {demographics.gender.map((gender) => (
                <div key={gender.type} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{gender.percentage}%</div>
                  <div className="text-sm text-muted-foreground">{gender.type}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {gender.count.toLocaleString()} users
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Locations */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Top Locations</h3>
            </div>
            <div className="space-y-3">
              {demographics.topLocations.map((location) => (
                <div key={location.country} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">{location.country}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>{location.count.toLocaleString()} users</span>
                      <span className="text-muted-foreground">{location.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Times */}
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-orange-600" />
              <h3 className="text-lg font-semibold">Most Active Times</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-lg font-bold text-foreground">9-11 AM</div>
                <div className="text-sm text-muted-foreground">Peak Activity</div>
                <div className="text-xs text-green-600 mt-1">+25% above average</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-lg font-bold text-foreground">1-3 PM</div>
                <div className="text-sm text-muted-foreground">High Activity</div>
                <div className="text-xs text-green-600 mt-1">+15% above average</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-lg font-bold text-foreground">7-9 PM</div>
                <div className="text-sm text-muted-foreground">Evening Peak</div>
                <div className="text-xs text-green-600 mt-1">+20% above average</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-lg font-bold text-foreground">11 PM-1 AM</div>
                <div className="text-sm text-muted-foreground">Late Night</div>
                <div className="text-xs text-red-600 mt-1">-30% below average</div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

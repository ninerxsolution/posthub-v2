"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  User,
  GalleryVerticalEnd,
  Bot,
  Settings2,
  ChartPie,
  ChevronsUpDown,
  ChevronRight,
  Plus,
  LogOut,
  UserPlus,
  Globe,
  Lightbulb,
  Activity,
  Zap,
  Users2
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  url?: string;
  isCollapsible?: boolean;
  items?: { title: string; url: string }[];
}

const teams = [
  {
    name: "PostHub Inc",
    icon: GalleryVerticalEnd,
    shortcut: "⌘1",
  },
  {
    name: "PostHub Corp.",
    icon: ChartPie,
    shortcut: "⌘2",
  },
  {
    name: "PostHub Labs",
    icon: Bot,
    shortcut: "⌘3",
  },
];

const analyticsItems: MenuItem[] = [
  {
    title: "Overview",
    icon: BarChart3,
    isCollapsible: true,
    items: [
      { title: "Dashboard", url: "/backoffice/analytics/overview" },
      { title: "Total Posts", url: "/backoffice/analytics/posts" },
      { title: "Reach & Impressions", url: "/backoffice/analytics/reach" },
      { title: "Total Engagement", url: "/backoffice/analytics/engagement" },
      { title: "Growth Trends", url: "/backoffice/analytics/growth" },
    ],
  },
  {
    title: "Post Performance",
    icon: TrendingUp,
    isCollapsible: true,
    items: [
      { title: "Top Performing", url: "/backoffice/analytics/posts/top" },
      { title: "Low Performing", url: "/backoffice/analytics/posts/low" },
      { title: "Engagement Rate", url: "/backoffice/analytics/posts/engagement-rate" },
      { title: "Click-Through Rate", url: "/backoffice/analytics/posts/ctr" },
    ],
  },
  {
    title: "Audience Insights",
    icon: Users2,
    isCollapsible: true,
    items: [
      { title: "Demographics", url: "/backoffice/analytics/audience/demographics" },
      { title: "Active Times", url: "/backoffice/analytics/audience/active-times" },
      { title: "Follower Growth", url: "/backoffice/analytics/audience/follower-growth" },
    ],
  },
  {
    title: "Channel Insights",
    icon: Globe,
    isCollapsible: true,
    items: [
      { title: "Platform Performance", url: "/backoffice/analytics/channels/platforms" },
      { title: "Engagement Share", url: "/backoffice/analytics/channels/engagement" },
      { title: "ROI & Conversions", url: "/backoffice/analytics/channels/roi" },
    ],
  },
  {
    title: "Trends & Recommendations",
    icon: Lightbulb,
    isCollapsible: true,
    items: [
      { title: "Best Time to Post", url: "/backoffice/analytics/trends/best-time" },
      { title: "Content Preferences", url: "/backoffice/analytics/trends/content-type" },
      { title: "Smart Suggestions", url: "/backoffice/analytics/trends/suggestions" },
    ],
  },
  {
    title: "Actionable Next Steps",
    icon: Zap,
    isCollapsible: true,
    items: [
      { title: "Create New Post", url: "/backoffice/analytics/actions/create-post" },
      { title: "Export Reports", url: "/backoffice/analytics/actions/export" },
      { title: "Period Comparison", url: "/backoffice/analytics/actions/compare" },
    ],
  },
];

const managementItems: MenuItem[] = [
  {
    title: "User Management",
    icon: Users,
    url: "/backoffice/users",
  },
  {
    title: "Content Moderation",
    icon: FileText,
    url: "/backoffice/content",
  },
  {
    title: "Settings",
    icon: Settings2,
    url: "/backoffice/settings",
  },
  {
    title: "System Health",
    icon: Activity,
    url: "/backoffice/system",
  },
];

export default function BackofficeLeftSidebar() {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  // Check if any item in a group is active
  const isGroupActive = (items: MenuItem[]) => {
    return items.some(item => {
      if (item.url && pathname === item.url) return true;
      if (item.items) {
        return item.items.some(subItem => pathname === subItem.url);
      }
      return false;
    });
  };

  // Check if a specific item is active
  const isItemActive = (item: MenuItem) => {
    if (item.url && pathname === item.url) return true;
    if (item.items) {
      return item.items.some(subItem => pathname === subItem.url);
    }
    return false;
  };

  // Auto-expand groups that contain active items
  const getInitialOpenItems = () => {
    const open: string[] = [];
    analyticsItems.forEach(item => {
      if (item.isCollapsible && isItemActive(item)) {
        open.push(item.title);
      }
    });
    return open;
  };

  // Initialize open items based on current pathname
  const [initialized, setInitialized] = useState(false);
  if (!initialized) {
    setOpenItems(getInitialOpenItems());
    setInitialized(true);
  }

  const toggleItem = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <selectedTeam.icon className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{selectedTeam.name}</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="right"
                align="start"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <selectedTeam.icon className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{selectedTeam.name}</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Teams</DropdownMenuLabel>
                {teams.map((team) => (
                  <DropdownMenuItem
                    key={team.name}
                    onClick={() => setSelectedTeam(team)}
                    className="gap-2 p-1.5"
                  >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-6 items-center justify-center rounded-sm">
                      <team.icon className="size-3" />
                    </div>
                    <span className="flex-1 text-left text-sm">{team.name}</span>
                    <span className="text-xs">{team.shortcut}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 p-1.5">
                  <div className="flex aspect-square size-6 items-center justify-center rounded-sm border border-dashed border-sidebar-border">
                    <Plus className="size-3" />
                  </div>
                  <span className="flex-1 text-left text-sm">Add team</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <div 
          className={`rounded-lg mb-2 transition-all duration-500 ease-in-out ${
            isGroupActive(analyticsItems) 
              ? "bg-sidebar-accent/30 border border-sidebar-accent/50 shadow-sm" 
              : "hover:bg-sidebar-accent/10"
          }`}
        >
          <SidebarGroup>
            <SidebarGroupLabel 
              className={`transition-all duration-300 ease-in-out ${
                isGroupActive(analyticsItems) 
                  ? "text-sidebar-accent-foreground font-semibold" 
                  : "text-sidebar-foreground"
              }`}
            >
              Analytics & Insights
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {analyticsItems.map((item) => (
                  <Collapsible
                    key={item.title}
                    asChild
                    open={openItems.includes(item.title)}
                    onOpenChange={() => toggleItem(item.title)}
                  >
                    <SidebarMenuItem>
                      {item.isCollapsible ? (
                        <>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton 
                              tooltip={item.title}
                              isActive={isItemActive(item)}
                            >
                              <item.icon />
                              <span>{item.title}</span>
                              <ChevronRight className={`ml-auto transition-transform duration-300 ease-in-out ${
                                openItems.includes(item.title) ? 'rotate-90' : ''
                              }`} />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                            <SidebarMenuSub>
                              {item.items?.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton 
                                    asChild 
                                    isActive={pathname === subItem.url}
                                  >
                                    <Link href={subItem.url}>
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </>
                      ) : (
                        <SidebarMenuButton 
                          asChild 
                          isActive={isItemActive(item)} 
                          tooltip={item.title}
                        >
                          <Link href={item.url || "/backoffice"}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        
        <div 
          className={`rounded-lg mb-2 transition-all duration-500 ease-in-out ${
            isGroupActive(managementItems) 
              ? "bg-sidebar-accent/30 border border-sidebar-accent/50 shadow-sm" 
              : "hover:bg-sidebar-accent/10"
          }`}
        >
          <SidebarGroup>
            <SidebarGroupLabel 
              className={`transition-all duration-300 ease-in-out ${
                isGroupActive(managementItems) 
                  ? "text-sidebar-accent-foreground font-semibold" 
                  : "text-sidebar-foreground"
              }`}
            >
              Management
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {managementItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isItemActive(item)}
                    >
                      <Link href={item.url || "/backoffice"}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <span className="relative flex size-8 shrink-0 overflow-hidden h-8 w-8 rounded-lg">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <User className="size-4" />
                    </div>
                  </span>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Admin</span>
                    <span className="truncate text-xs">admin@posthub.com</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="right"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <span className="relative flex size-8 shrink-0 overflow-hidden h-8 w-8 rounded-lg">
                      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <User className="size-4" />
                      </div>
                    </span>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">Admin</span>
                      <span className="truncate text-xs">admin@posthub.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 p-1.5">
                  <User className="size-4" />
                  <span className="flex-1 text-left text-sm">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 p-1.5">
                  <UserPlus className="size-4" />
                  <span className="flex-1 text-left text-sm">Invite members</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 p-1.5 text-red-600 focus:text-red-600">
                  <LogOut className="size-4" />
                  <span className="flex-1 text-left text-sm">Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

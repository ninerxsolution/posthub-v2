"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  Settings,
  User,
  GalleryVerticalEnd,
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  ChartPie,
  Map,
  MoreHorizontal,
  ChevronsUpDown,
  ChevronRight,
  Plus,
  LogOut,
  UserPlus
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

const platformItems = [
  {
    title: "Playground",
    icon: SquareTerminal,
    isCollapsible: true,
    items: [
      { title: "Overview", url: "/backoffice/playground" },
      { title: "Components", url: "/backoffice/playground/components" },
    ],
  },
  {
    title: "History",
    icon: TrendingUp,
    url: "/backoffice/history",
  },
  {
    title: "Starred",
    icon: BarChart3,
    url: "/backoffice/starred",
  },
  {
    title: "Settings",
    icon: Settings2,
    url: "/backoffice/settings",
  },
  {
    title: "Models",
    icon: Bot,
    isCollapsible: true,
    items: [
      { title: "GPT-4", url: "/backoffice/models/gpt4" },
      { title: "Claude", url: "/backoffice/models/claude" },
    ],
  },
  {
    title: "Documentation",
    icon: BookOpen,
    isCollapsible: true,
    items: [
      { title: "Introduction", url: "/backoffice/docs/intro" },
      { title: "Get Started", url: "/backoffice/docs/get-started" },
    ],
  },
];

const projectItems = [
  {
    title: "Design Engineering",
    icon: Frame,
    url: "/backoffice/projects/design",
  },
  {
    title: "Sales & Marketing",
    icon: ChartPie,
    url: "/backoffice/projects/sales",
  },
  {
    title: "Travel",
    icon: Map,
    url: "/backoffice/projects/travel",
  },
  {
    title: "More",
    icon: MoreHorizontal,
    url: "/backoffice/projects/more",
  },
];

export default function BackofficeLeftSidebar() {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

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
                side="bottom"
                align="end"
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
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
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
                          <SidebarMenuButton tooltip={item.title}>
                            <item.icon />
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild isActive={pathname === subItem.url}>
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
                      <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                        <Link href={item.url || "#"}>
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
        
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
                side="top"
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

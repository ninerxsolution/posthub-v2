"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Search, Bell, User, LogOut } from "lucide-react";
import Link from "next/link";

export default function BackofficeNavbar() {
  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/backoffice/login";
  };

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5 text-muted-foreground">
            <li className="items-center gap-1.5 hidden md:block">
              <Link 
                href="/backoffice" 
                className="hover:text-foreground transition-colors"
              >
                Backoffice
              </Link>
            </li>
            <li role="presentation" aria-hidden="true" className="[&>svg]:size-3.5 hidden md:block">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span 
                role="link" 
                aria-disabled="true" 
                aria-current="page" 
                className="text-foreground font-normal"
              >
                Dashboard
              </span>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Right side actions */}
      <div className="ml-auto flex items-center gap-2 px-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-48 pl-8 pr-3 py-1.5 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
        </div>
        
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative h-8 w-8 p-0">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
        
        {/* User Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0">
            <User className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="text-xs px-2 py-1 h-7"
          >
            <LogOut className="h-3 w-3 mr-1" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

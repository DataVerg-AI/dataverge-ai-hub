import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar";

import { LayoutDashboard, LineChart, FolderKanban, Settings, Database, Bell, User, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  const navigation = [
    { title: "Overview", icon: LayoutDashboard, url: "/dashboard" },
    { title: "Analytics", icon: LineChart, url: "/dashboard/analytics" },
    { title: "Projects", icon: FolderKanban, url: "/dashboard/projects" },
    { title: "Settings", icon: Settings, url: "/dashboard/settings" },
  ];

  return (
    <SidebarProvider>
      {/* App Sidebar */}
      <Sidebar variant="inset">
        <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/50">
          <Link to="/" className="flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">DataVerge AI</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.url}
                      className={location.pathname === item.url ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary" : ""}
                    >
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main Content Area */}
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Moon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-muted">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-auto bg-muted/20 p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

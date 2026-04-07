import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard, LineChart, FolderKanban, Settings,
  Bell, User, PlugZap, Brain, MessageSquare, Menu, X, Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { UserAPI } from "@/lib/api";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { title: "Overview",     icon: LayoutDashboard, url: "/dashboard" },
  { title: "Analytics",   icon: LineChart,        url: "/dashboard/analytics" },
  { title: "Projects",    icon: FolderKanban,     url: "/dashboard/projects" },
  { title: "Models",      icon: Brain,            url: "/dashboard/models" },
  { title: "Integrations",icon: PlugZap,          url: "/dashboard/integrations" },
  { title: "AI Chat",     icon: MessageSquare,    url: "/dashboard/chat" },
  { title: "Settings",    icon: Settings,         url: "/dashboard/settings" },
];

// Bottom nav shows only the most important 5 on mobile
const MOBILE_NAV = [
  { title: "Home",        icon: LayoutDashboard, url: "/dashboard" },
  { title: "Analytics",  icon: LineChart,        url: "/dashboard/analytics" },
  { title: "Models",     icon: Brain,            url: "/dashboard/models" },
  { title: "Chat",       icon: MessageSquare,    url: "/dashboard/chat" },
  { title: "Settings",   icon: Settings,         url: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<{ first_name: string; last_name: string; email: string } | null>(null);

  useEffect(() => {
    UserAPI.getProfile()
      .then((res: any) => setUser(res.data))
      .catch(() => {
        // If profile fetch fails, token might be invalid
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (url: string) =>
    url === "/dashboard" ? location.pathname === "/dashboard" : location.pathname.startsWith(url);

  return (
    <SidebarProvider>
      {/* ─────────────── DESKTOP SIDEBAR ─────────────── */}
      <Sidebar className="hidden md:flex border-r border-border/50 bg-background/50 backdrop-blur-xl">
        <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/50">
          <Link to="/dashboard" className="flex items-center gap-2.5 px-2">
            <img src="/images/logo.webp" alt="DataVerge Logo" className="w-auto h-8 object-contain" />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60">
              Platform
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => {
                  const active = isActive(item.url);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        className={active
                          ? "bg-accent/15 text-foreground font-semibold hover:bg-accent/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/30"}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-2.5 rounded-lg">
                          <div className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${active ? "bg-accent/20" : ""}`}>
                            <item.icon className={`h-4 w-4 ${active ? "text-accent-foreground" : ""}`} />
                          </div>
                          <span className="text-sm">{item.title}</span>
                          {active && (
                            <motion.div
                              layoutId="active-sidebar-pill"
                              className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                              transition={{ type: "spring", duration: 0.4 }}
                            />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-border/50 mt-auto">
          <Link to="/" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-3.5 w-3.5" /> Back to website
          </Link>
        </div>
      </Sidebar>

      {/* ─────────────── MAIN CONTENT ─────────────── */}
      <SidebarInset className="relative flex flex-col min-h-screen overflow-hidden">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 bg-background/70 backdrop-blur-xl px-4 sm:px-6 border-b border-border/50">
          {/* Desktop sidebar trigger */}
          <SidebarTrigger className="hidden md:flex" />

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 bg-background border-border">
              <SheetHeader className="h-16 flex items-center gap-3 px-4 border-b border-border/50">
                <img src="/images/logo.webp" alt="DataVerge Logo" className="h-8 w-auto object-contain" />
                <SheetTitle className="font-bold text-lg text-foreground">Navigation</SheetTitle>
              </SheetHeader>

              {/* Mobile nav links */}
              <div className="p-4 space-y-1">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 px-3 mb-3">Platform</p>
                {navigation.map((item) => {
                  const active = isActive(item.url);
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                        active
                          ? "bg-accent/15 text-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                      }`}
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${active ? "bg-accent/20" : "bg-muted/30"}`}>
                        <item.icon className={`h-4 w-4 ${active ? "text-accent-foreground" : ""}`} />
                      </div>
                      <span className="text-sm">{item.title}</span>
                      {active && <div className="ml-auto h-2 w-2 rounded-full bg-accent" />}
                    </Link>
                  );
                })}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Home className="h-3.5 w-3.5" /> Back to website
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Breadcrumb / page label */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate hidden sm:block">
              {navigation.find(n => isActive(n.url))?.title ?? "Dashboard"}
            </p>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 border-border bg-card/95 backdrop-blur-lg">
                <DropdownMenuLabel className="flex items-center justify-between">
                  Notifications
                  <span className="text-[10px] bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-normal">2 new</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[
                  { type: "alert", msg: "API request spike on /v2/query", time: "8m ago" },
                  { type: "info",  msg: "DataVerGAI-4 fine-tuning complete", time: "1h ago" },
                  { type: "success", msg: "Snowflake sync finished (2.3M rows)", time: "3h ago" },
                ].map((n, i) => (
                  <DropdownMenuItem key={i} className="flex flex-col items-start gap-0.5 py-2.5 cursor-pointer">
                    <span className="text-xs font-medium text-foreground">{n.msg}</span>
                    <span className="text-[10px] text-muted-foreground">{n.time}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full bg-card border border-border hover:border-accent transition-colors">
                  <User className="h-4.5 w-4.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="border-border bg-card/95 backdrop-blur-lg">
                <DropdownMenuLabel className="font-normal">
                  <p className="font-bold text-foreground">
                    {user ? `${user.first_name} ${user.last_name}` : "Loading..."}
                  </p>
                  <p className="text-xs text-muted-foreground">{user?.email || ""}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/settings" className="cursor-pointer">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 min-h-0 overflow-auto p-4 sm:p-6 relative bg-background">
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[120px] -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[100px] translate-y-1/3 -translate-x-1/4" />
          </div>
          <div className="relative z-10">{children}</div>
        </main>

        {/* ─── MOBILE BOTTOM NAV ─── */}
        <nav className="md:hidden sticky bottom-0 z-30 flex items-center justify-around border-t border-border/50 bg-background/80 backdrop-blur-xl px-2 py-2 pb-[env(safe-area-inset-bottom,8px)]">
          {MOBILE_NAV.map(item => {
            const active = isActive(item.url);
            return (
              <Link
                key={item.url}
                to={item.url}
                className="flex flex-col items-center gap-0.5 min-w-0 flex-1 py-1"
              >
                <AnimatePresence>
                  <motion.div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${active ? "bg-accent/20" : ""}`}
                    whileTap={{ scale: 0.85 }}
                  >
                    <item.icon className={`h-5 w-5 transition-colors ${active ? "text-accent-foreground" : "text-muted-foreground"}`} />
                  </motion.div>
                </AnimatePresence>
                <span className={`text-[9px] font-medium truncate max-w-full transition-colors ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {item.title}
                </span>
                {active && (
                  <motion.div layoutId="mobile-active-dot" className="h-1 w-1 rounded-full bg-accent mt-0.5" />
                )}
              </Link>
            );
          })}
        </nav>
      </SidebarInset>
    </SidebarProvider>
  );
}

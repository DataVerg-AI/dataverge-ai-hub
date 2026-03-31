import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal } from "lucide-react";

export default function DashboardProjects() {
  const projects = [
    { name: "Recommendation Engine", status: "Active", calls: "1.2M", date: "Oct 24, 2026" },
    { name: "Support Chatbot Agent", status: "Pending", calls: "45K", date: "Oct 22, 2026" },
    { name: "Fraud Detection V2", status: "Active", calls: "3.4M", date: "Oct 15, 2026" },
    { name: "Internal RAG Tool", status: "Paused", calls: "12K", date: "Sep 29, 2026" },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground mt-1">
              Manage your deployments and AI applications.
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>View all your current active and inactive model endpoints.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-4 font-semibold border-b bg-muted/50 p-4 text-sm">
                <div>Name</div>
                <div>Status</div>
                <div>Lifetime Calls</div>
                <div>Last Deployed</div>
              </div>
              {projects.map((project, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-4 p-4 border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <div className="font-medium">{project.name}</div>
                  <div>
                    <Badge variant={project.status === "Active" ? "default" : project.status === "Paused" ? "secondary" : "outline"}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground">{project.calls}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{project.date}</span>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

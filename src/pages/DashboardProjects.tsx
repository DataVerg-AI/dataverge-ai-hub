import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, MoreHorizontal, Activity, Cpu, FolderKanban,
  Play, Pause, Trash2, ExternalLink, Search, Loader2, Code2, Zap
} from "lucide-react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const INITIAL_PROJECTS = [
  { id: 1, name: "Recommendation Engine", status: "Active", calls: "1.2M", latency: "23ms", lastDeploy: "2 days ago", model: "DataVerGAI-4" },
  { id: 2, name: "Support Chatbot Agent",  status: "Pending", calls: "45K",  latency: "61ms", lastDeploy: "5 days ago",  model: "DataVerGAI-3.5" },
  { id: 3, name: "Fraud Detection V2",     status: "Active",  calls: "3.4M", latency: "12ms", lastDeploy: "1 day ago",   model: "DataVerGAI-4" },
  { id: 4, name: "Internal RAG Tool",      status: "Paused",  calls: "12K",  latency: "—",    lastDeploy: "12 days ago", model: "DataVerGAI-3.5" },
  { id: 5, name: "Churn Prediction",       status: "Active",  calls: "890K", latency: "34ms", lastDeploy: "3 days ago",  model: "DataVerGAI-4" },
];

const statusColors: Record<string, string> = {
  Active:  "text-green-500 bg-green-500/10 border-green-500/30",
  Pending: "text-amber-500 bg-amber-500/10 border-amber-500/30",
  Paused:  "text-muted-foreground bg-muted/50 border-border",
};

const AVAILABLE_FUNCTIONS = [
  { id: "recommendations", name: "Recommendation Engine", description: "ML-based product recommendations" },
  { id: "sentiment", name: "Sentiment Analysis", description: "Real-time text sentiment classification" },
  { id: "anomaly", name: "Anomaly Detection", description: "Detect unusual patterns in data" },
  { id: "classification", name: "Text Classification", description: "Automatic content categorization" },
  { id: "nlp", name: "NLP Processing", description: "Advanced natural language processing" },
  { id: "timeseries", name: "Time Series Forecasting", description: "Predict future trends and patterns" },
];

export default function DashboardProjects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formData, setFormData] = useState({ name: "", model: "DataVerGAI-4", function: "" });

  const toggle = (id: number, currentStatus: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== id) return p;
      const next = currentStatus === "Active" ? "Paused" : "Active";
      toast(next === "Active" ? "Project resumed." : "Project paused.", { description: p.name });
      return { ...p, status: next };
    }));
  };

  const remove = (id: number) => {
    setProjects(prev => {
      const removed = prev.find(p => p.id === id);
      toast("Project archived.", { description: removed?.name });
      return prev.filter(p => p.id !== id);
    });
  };

  const handleCreateProject = async () => {
    if (!formData.name.trim() || !formData.function) {
      toast.error("Missing information", { description: "Please fill in all fields." });
      return;
    }

    setCreating(true);
    toast.loading("Creating project...");

    setTimeout(() => {
      const selectedFunc = AVAILABLE_FUNCTIONS.find(f => f.id === formData.function);
      const newProject = {
        id: Math.max(...projects.map(p => p.id), 0) + 1,
        name: formData.name,
        status: "Active" as const,
        calls: "0",
        latency: "—",
        lastDeploy: "Just now",
        model: formData.model,
      };

      setProjects([newProject, ...projects]);
      setCreating(false);
      setOpenDialog(false);
      setFormData({ name: "", model: "DataVerGAI-4", function: "" });
      toast.success("Project created successfully!", {
        description: `${formData.name} with ${selectedFunc?.name} is now live.`,
      });
    }, 1500);
  };

  const filtered = projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Projects</h2>
              <p className="text-muted-foreground mt-1">Manage your AI deployments and active pipelines.</p>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button className="shrink-0 group" disabled={creating}>
                  <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90 duration-300" />
                  New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-lg border-border">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>Set up a new AI project with function configuration</DialogDescription>
                </DialogHeader>
                <div className="space-y-5 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input
                      id="project-name"
                      placeholder="e.g., Customer Churn Prediction"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border"
                      disabled={creating}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="function-select">Function</Label>
                    <Select value={formData.function} onValueChange={(val) => setFormData({ ...formData, function: val })}>
                      <SelectTrigger id="function-select" className="bg-background/50 border-border">
                        <SelectValue placeholder="Select a function" />
                      </SelectTrigger>
                      <SelectContent className="bg-card/95 border-border">
                        {AVAILABLE_FUNCTIONS.map((func) => (
                          <SelectItem key={func.id} value={func.id}>
                            <div className="flex items-center gap-2">
                              <Code2 className="h-4 w-4" />
                              <span>{func.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.function && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {AVAILABLE_FUNCTIONS.find(f => f.id === formData.function)?.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model-select">AI Model</Label>
                    <Select value={formData.model} onValueChange={(val) => setFormData({ ...formData, model: val })}>
                      <SelectTrigger id="model-select" className="bg-background/50 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card/95 border-border">
                        <SelectItem value="DataVerGAI-4">DataVerGAI-4 Turbo (Foundation)</SelectItem>
                        <SelectItem value="DataVerGAI-3.5">DataVerGAI-3.5 Fast (Inference)</SelectItem>
                        <SelectItem value="ConvergeEmbed-v2">ConvergeEmbed v2 (Embedding)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent-foreground" />
                      What you'll get
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Automatic API endpoint generation</li>
                      <li>• Real-time inference monitoring</li>
                      <li>• Performance metrics dashboard</li>
                      <li>• Webhook integration support</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setOpenDialog(false)}
                      disabled={creating}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateProject}
                      disabled={creating || !formData.name.trim() || !formData.function}
                    >
                      {creating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Plus className="mr-2 h-4 w-4" />
                          Create Project
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </AnimatedSection>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Projects", value: projects.length, icon: FolderKanban },
            { label: "Active", value: projects.filter(p => p.status === "Active").length, icon: Activity },
            { label: "Total Calls", value: "5.5M+", icon: Cpu },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={0.05 * i}>
              <GlowCard className="bg-card/80" hoverY={-3}>
                <div className="p-4 flex items-center gap-4">
                  <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <s.icon className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{s.label}</p>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Search */}
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 bg-card/60 border-border"
            />
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={0.06 * i}>
                <motion.div layout exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2 }}>
                  <GlowCard className="bg-card/80 h-full" hoverScale={1.02}>
                    <div className="p-6 flex flex-col h-full gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                          <FolderKanban className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${statusColors[project.status]}`}>
                            {project.status}
                          </span>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-lg border-border">
                              <DropdownMenuItem onClick={() => toast("Opening logs...", { description: project.name })}>
                                <ExternalLink className="h-4 w-4 mr-2" /> View Logs
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => toggle(project.id, project.status)}>
                                {project.status === "Active"
                                  ? <><Pause className="h-4 w-4 mr-2" /> Pause</>
                                  : <><Play className="h-4 w-4 mr-2" /> Resume</>}
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => remove(project.id)} className="text-destructive focus:text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" /> Archive
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-base leading-snug">{project.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{project.model}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/50">
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Lifetime Calls</p>
                          <p className="text-sm font-bold text-foreground mt-0.5">{project.calls}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Avg Latency</p>
                          <p className="text-sm font-bold text-foreground mt-0.5">{project.latency}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Last Deploy</p>
                          <p className="text-sm font-bold text-foreground mt-0.5">{project.lastDeploy}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
}

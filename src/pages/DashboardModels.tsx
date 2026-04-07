import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Zap, Play, Pause, Settings2, RefreshCw, TrendingUp,
  BarChart3, Star, Clock, CheckCircle2, AlertCircle, MoreHorizontal, Plus
} from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const MODELS = [
  {
    id: 1, name: "DataVerGAI-4 Turbo", version: "v4.2.1", status: "Running",
    type: "Foundation", accuracy: 98.4, latency: 12, calls: "3.4M", cost: "$0.002/1k",
    description: "Flagship multi-modal convergence model. Optimized for real-time data unification across heterogeneous sources.",
    tags: ["Production", "Multi-modal"],
  },
  {
    id: 2, name: "DataVerGAI-3.5 Fast", version: "v3.5.8", status: "Running",
    type: "Inference", accuracy: 94.1, latency: 8, calls: "12.1M", cost: "$0.0005/1k",
    description: "Ultra-low latency inference model for high-throughput pipeline orchestration.",
    tags: ["Production", "High-throughput"],
  },
  {
    id: 3, name: "ConvergeEmbed v2", version: "v2.0.3", status: "Running",
    type: "Embedding", accuracy: 96.7, latency: 5, calls: "8.9M", cost: "$0.0001/1k",
    description: "Semantic embedding engine for cross-source data identification and deduplication.",
    tags: ["Production"],
  },
  {
    id: 4, name: "AnomalyDetector Pro", version: "v1.4.0", status: "Tuning",
    type: "Specialist", accuracy: 91.2, latency: 35, calls: "450K", cost: "$0.003/1k",
    description: "Fine-tuned anomaly detection model currently undergoing continuous learning on new pipeline data.",
    tags: ["Beta"],
  },
  {
    id: 5, name: "SchemaMerge AI", version: "v0.9.2", status: "Paused",
    type: "Specialist", accuracy: 88.5, latency: 22, calls: "120K", cost: "$0.002/1k",
    description: "Experimental schema resolution model. Intelligently resolves conflicts when merging heterogeneous data schemas.",
    tags: ["Experimental"],
  },
];

const statusColors: Record<string, string> = {
  Running: "text-green-500 bg-green-500/10 border-green-500/30",
  Tuning:  "text-amber-500 bg-amber-500/10 border-amber-500/30",
  Paused:  "text-muted-foreground bg-muted/50 border-border",
};

const typeColors: Record<string, string> = {
  Foundation: "bg-accent/20 text-accent-foreground",
  Inference:  "bg-blue-500/10 text-blue-400",
  Embedding:  "bg-purple-500/10 text-purple-400",
  Specialist: "bg-orange-500/10 text-orange-400",
};

function ModelCard({ model }: { model: typeof MODELS[0] }) {
  const [status, setStatus] = useState(model.status);
  const [tuning, setTuning] = useState(false);

  const toggle = () => {
    const next = status === "Running" ? "Paused" : "Running";
    setStatus(next);
    toast(next === "Running" ? `${model.name} resumed.` : `${model.name} paused.`);
  };

  const startTuning = () => {
    if (tuning) return;
    setTuning(true);
    setStatus("Tuning");
    toast("Fine-tuning started.", { description: "This may take several minutes." });
    setTimeout(() => {
      setTuning(false);
      setStatus("Running");
      toast.success("Fine-tuning complete!", { description: model.name });
    }, 4000);
  };

  return (
    <GlowCard className="bg-card/80 flex flex-col h-full" hoverScale={1.01}>
      <div className="p-6 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 border border-accent/20">
            <Brain className="h-5 w-5 text-accent-foreground" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${statusColors[status]}`}>
              {status}
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-lg border-border">
                <DropdownMenuItem onClick={startTuning} disabled={tuning}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${tuning ? "animate-spin" : ""}`} /> Fine-Tune
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast.info("Version History", { description: "Model version history is available in the detailed view." })}>
                  <Clock className="h-4 w-4 mr-2" /> Version History
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base text-foreground">{model.name}</h3>
            <span className="text-[10px] font-mono text-muted-foreground">{model.version}</span>
          </div>
          <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md mt-1 ${typeColors[model.type]}`}>{model.type}</span>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{model.description}</p>

          {/* Tags */}
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {model.tags.map(tag => (
              <span key={tag} className="text-[10px] border border-border text-muted-foreground px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2.5 border-t border-border/50 pt-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground flex items-center gap-1"><Star className="h-3 w-3" /> Accuracy</span>
              <span className="font-bold text-foreground">{model.accuracy}%</span>
            </div>
            <Progress value={model.accuracy} className="h-1.5" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { label: "Latency", value: `${model.latency}ms` },
              { label: "Calls",   value: model.calls },
              { label: "Cost",    value: model.cost },
            ].map(m => (
              <div key={m.label}>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                <p className="text-xs font-bold text-foreground mt-0.5">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant={status === "Running" ? "outline" : "default"}
            size="sm" className="flex-1"
            onClick={toggle}
          >
            {status === "Running" ? <><Pause className="h-3.5 w-3.5 mr-1.5" />Pause</> : <><Play className="h-3.5 w-3.5 mr-1.5" />Resume</>}
          </Button>
          <Button variant="ghost" size="sm" className="flex-1"
            onClick={() => toast("Endpoint copied.", { description: `https://api.dataverg.com/v1/${model.name.toLowerCase().replace(/\s/g,"-")}` })}>
            <Zap className="h-3.5 w-3.5 mr-1.5" /> Endpoint
          </Button>
        </div>

        {/* Fine-tuning progress */}
        <AnimatePresence>
          {tuning && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs font-medium text-accent-foreground mb-2">
                  <RefreshCw className="h-3 w-3 animate-spin" /> Fine-tuning in progress…
                </div>
                <TuningProgress />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlowCard>
  );
}

function TuningProgress() {
  const [val, setVal] = useState(0);
  useState(() => {
    const int = setInterval(() => setVal(v => { if (v >= 100) { clearInterval(int); return 100; } return v + 2; }), 80);
    return () => clearInterval(int);
  });
  return <Progress value={val} className="h-1.5" />;
}

export default function DashboardModels() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">AI Models</h2>
              <p className="text-muted-foreground mt-1">Manage, monitor, and fine-tune your convergence intelligence models.</p>
            </div>
            <Button className="shrink-0 group" onClick={() => toast.success("Model deployment initiated", { description: "Your model is being deployed to production." })}>
              <Plus className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90 duration-300" />
              Deploy Model
            </Button>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Active Models", value: MODELS.filter(m => m.status === "Running").length, icon: CheckCircle2, color: "text-green-500 bg-green-500/10" },
            { label: "Total Inferences", value: "24.9M", icon: Zap, color: "text-accent-foreground bg-accent/10" },
            { label: "Avg Accuracy", value: "93.8%", icon: BarChart3, color: "text-blue-400 bg-blue-400/10" },
            { label: "In Fine-Tuning", value: MODELS.filter(m => m.status === "Tuning").length, icon: AlertCircle, color: "text-amber-500 bg-amber-500/10" },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={0.06 * i}>
              <GlowCard className="bg-card/80" hoverY={-3}>
                <div className="p-5 flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{s.label}</p>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Model Cards Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {MODELS.map((model, i) => (
            <AnimatedSection key={model.id} delay={0.07 * i}>
              <ModelCard model={model} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

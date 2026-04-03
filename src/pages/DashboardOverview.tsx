import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Activity, Zap, DollarSign, Clock, ArrowUpRight, ArrowDownRight, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const inferenceData = [
  { day: "Mar 4", calls: 18200, cost: 42 }, { day: "Mar 5", calls: 21400, cost: 51 },
  { day: "Mar 6", calls: 19800, cost: 47 }, { day: "Mar 7", calls: 24600, cost: 59 },
  { day: "Mar 8", calls: 22100, cost: 53 }, { day: "Mar 9", calls: 17800, cost: 43 },
  { day: "Mar 10", calls: 26500, cost: 63 }, { day: "Mar 11", calls: 29100, cost: 70 },
  { day: "Mar 12", calls: 31200, cost: 75 }, { day: "Mar 13", calls: 28700, cost: 69 },
  { day: "Mar 14", calls: 33400, cost: 80 }, { day: "Mar 15", calls: 35900, cost: 86 },
];

const ACTIVITY = [
  { type: "success", msg: "Pipeline 'Snowflake → Warehouse' synced", time: "2 min ago" },
  { type: "alert",   msg: "API request spike detected on /v2/query", time: "8 min ago" },
  { type: "success", msg: "Model fine-tuning job completed", time: "25 min ago" },
  { type: "success", msg: "New connector: HubSpot CRM added", time: "1 hr ago" },
  { type: "info",    msg: "Scheduled export finished (250K rows)", time: "3 hr ago" },
];

function AnimatedCount({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{prefix}{val.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { label: "Total API Calls", value: 145231, suffix: "", icon: Activity, trend: "+20.1%", up: true, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Queries / sec", value: 842, suffix: "", icon: Zap, trend: "+12.4%", up: true, color: "text-accent-foreground", bg: "bg-accent/10" },
  { label: "Monthly Spend", value: 1223, prefix: "$", suffix: "", icon: DollarSign, trend: "+8.2%", up: false, color: "text-purple-500", bg: "bg-purple-500/10" },
  { label: "Avg Latency", value: 38, suffix: "ms", icon: Clock, trend: "-4ms", up: true, color: "text-green-500", bg: "bg-green-500/10" },
];

export default function DashboardOverview() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Command Center</h2>
              <p className="text-muted-foreground mt-1">
                Welcome back. Your Convergence Engine is operating at <span className="text-green-500 font-semibold">full capacity</span>.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </AnimatedSection>

        {/* Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.08 * i}>
              <GlowCard className="bg-card/80" hoverY={-4}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <span className={`flex items-center text-xs font-semibold ${stat.up ? "text-green-500" : "text-red-500"}`}>
                      {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-foreground">
                    <AnimatedCount end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Main Area Chart */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <GlowCard className="bg-card/80 h-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Inference Volume</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">API calls over the last 12 days</p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" /> +97%
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart data={inferenceData}>
                    <defs>
                      <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(61 100% 59%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(61 100% 59%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.75rem", color: "hsl(var(--foreground))" }}
                      formatter={(v: number) => [v.toLocaleString(), "API Calls"]}
                    />
                    <Area type="monotone" dataKey="calls" stroke="hsl(61 100% 59%)" strokeWidth={2.5} fill="url(#colorCalls)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Activity Feed */}
          <AnimatedSection delay={0.15}>
            <GlowCard className="bg-card/80 h-full">
              <div className="p-6 flex flex-col h-full">
                <h3 className="font-bold text-foreground text-lg mb-1">Live Activity</h3>
                <p className="text-xs text-muted-foreground mb-5">Real-time system events</p>
                <div className="flex flex-col gap-4 flex-1">
                  <AnimatePresence>
                    {ACTIVITY.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        {item.type === "success" && <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />}
                        {item.type === "alert" && <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />}
                        {item.type === "info" && <Activity className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />}
                        <div>
                          <p className="text-xs font-medium text-foreground leading-snug">{item.msg}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{item.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>

        {/* Cost Over Time */}
        <AnimatedSection delay={0.2}>
          <GlowCard className="bg-card/80">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Daily Spend</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">USD cost per day across all pipelines</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={inferenceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.75rem", color: "hsl(var(--foreground))" }}
                    formatter={(v: number) => [`$${v}`, "Spend"]}
                  />
                  <Bar dataKey="cost" fill="hsl(61 100% 59%)" radius={[4, 4, 0, 0]} opacity={0.85} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}

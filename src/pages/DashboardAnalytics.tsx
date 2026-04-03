import DashboardLayout from "@/layouts/DashboardLayout";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const latencyData = [
  { time: "00:00", p50: 22, p95: 48 }, { time: "04:00", p50: 19, p95: 41 },
  { time: "08:00", p50: 35, p95: 78 }, { time: "12:00", p50: 42, p95: 91 },
  { time: "16:00", p50: 38, p95: 82 }, { time: "20:00", p50: 29, p95: 63 },
  { time: "Now",   p50: 25, p95: 55 },
];

const errorData = [
  { day: "Mon", rate: 0.12 }, { day: "Tue", rate: 0.08 }, { day: "Wed", rate: 0.21 },
  { day: "Thu", rate: 0.06 }, { day: "Fri", rate: 0.14 }, { day: "Sat", rate: 0.04 },
  { day: "Sun", rate: 0.09 },
];

const resourceData = [
  { name: "GPU Cluster A", value: 74 }, { name: "GPU Cluster B", value: 51 },
  { name: "CPU Pool", value: 88 }, { name: "Memory", value: 62 },
];

const PIE_DATA = [
  { name: "Analytics", value: 38 }, { name: "Generation", value: 28 },
  { name: "Embeddings", value: 19 }, { name: "Search", value: 15 },
];
const PIE_COLORS = ["hsl(61 100% 59%)", "hsl(220 70% 60%)", "hsl(280 60% 60%)", "hsl(150 60% 55%)"];

export default function DashboardAnalytics() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h2>
          <p className="text-muted-foreground mt-1">
            Deep performance insights across your entire Convergence Engine.
          </p>
        </AnimatedSection>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Avg Latency (p50)", value: "25ms", delta: "–4ms vs yesterday", ok: true },
            { label: "Error Rate",        value: "0.09%", delta: "+0.01% vs yesterday", ok: false },
            { label: "GPU Utilization",   value: "74%", delta: "+6% vs yesterday", ok: false },
            { label: "Uptime (30d)",      value: "99.97%", delta: "SLA: 99.9%", ok: true },
          ].map((kpi, i) => (
            <AnimatedSection key={kpi.label} delay={0.08 * i}>
              <GlowCard className="bg-card/80" hoverY={-4}>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{kpi.label}</p>
                  <p className="text-2xl font-extrabold text-foreground mt-2">{kpi.value}</p>
                  <p className={`text-xs mt-1 font-medium ${kpi.ok ? "text-green-500" : "text-amber-500"}`}>{kpi.delta}</p>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Latency + Error Rate */}
        <div className="grid gap-4 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <GlowCard className="bg-card/80 h-full">
              <div className="p-6">
                <h3 className="font-bold text-foreground">Latency Over Time</h3>
                <p className="text-xs text-muted-foreground mt-0.5 mb-5">P50 vs P95 response times (ms)</p>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={latencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                    <XAxis dataKey="time" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.75rem", color: "hsl(var(--foreground))" }} />
                    <Legend />
                    <Line type="monotone" dataKey="p50" stroke="hsl(61 100% 59%)" strokeWidth={2.5} dot={false} name="P50" />
                    <Line type="monotone" dataKey="p95" stroke="hsl(220 70% 60%)" strokeWidth={2.5} dot={false} strokeDasharray="5 3" name="P95" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlowCard>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <GlowCard className="bg-card/80 h-full">
              <div className="p-6">
                <h3 className="font-bold text-foreground">Error Rates</h3>
                <p className="text-xs text-muted-foreground mt-0.5 mb-5">Failed requests per day (%)</p>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={errorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.75rem", color: "hsl(var(--foreground))" }} formatter={(v: number) => [`${v}%`]} />
                    <Bar dataKey="rate" fill="hsl(0 70% 60%)" radius={[4, 4, 0, 0]} opacity={0.8} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>

        {/* Resource + Load Distribution */}
        <div className="grid gap-4 md:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <GlowCard className="bg-card/80">
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-5">Resource Utilization</h3>
                <div className="space-y-4">
                  {resourceData.map((res) => (
                    <div key={res.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-foreground font-medium">{res.name}</span>
                        <span className={`font-bold ${res.value > 80 ? "text-red-400" : res.value > 60 ? "text-amber-400" : "text-green-400"}`}>{res.value}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${res.value > 80 ? "bg-red-400" : res.value > 60 ? "bg-amber-400" : "bg-green-400"}`}
                          style={{ width: `${res.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <GlowCard className="bg-card/80">
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-1">Query Load Distribution</h3>
                <p className="text-xs text-muted-foreground mb-4">Request share by feature type</p>
                <div className="flex items-center gap-4">
                  <ResponsiveContainer width={150} height={150}>
                    <PieChart>
                      <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                        {PIE_DATA.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.75rem" }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2">
                    {PIE_DATA.map((entry, i) => (
                      <div key={entry.name} className="flex items-center gap-2 text-xs">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                        <span className="text-muted-foreground flex-1">{entry.name}</span>
                        <span className="font-bold text-foreground">{entry.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </DashboardLayout>
  );
}

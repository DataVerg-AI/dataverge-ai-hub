import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Cloud, Cpu, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  { icon: Database, title: "Unified Data Layer", desc: "Consolidate APIs, databases, and cloud storage into a single source of truth." },
  { icon: Cloud, title: "Cloud-Native", desc: "Built for modern cloud infrastructure with auto-scaling and high availability." },
  { icon: Cpu, title: "AI-Powered Insights", desc: "DataVerGAI uses machine learning to surface patterns and predict trends." },
  { icon: Zap, title: "Real-Time Sync", desc: "Sub-second data synchronization across all connected sources." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption and role-based access." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Interactive dashboards and reporting built right into the platform." },
];

const stats = [
  { value: "10M+", label: "Data points processed daily" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Enterprise clients" },
  { value: "<50ms", label: "Average response time" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="container relative flex flex-col items-center py-24 text-center lg:py-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Now in Public Beta
        </div>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          The Future of Data{" "}
          <span className="relative">
            Convergence
            <span className="absolute -bottom-2 left-0 h-3 w-full bg-accent/30 -skew-x-6" />
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Merge fragmented data from APIs, cloud platforms, and databases into one intelligent, unified system powered by AI.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button variant="accent" size="xl" asChild>
            <Link to="/product">
              Explore DataVerGAI <ArrowRight size={20} />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border bg-secondary">
      <div className="container grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-foreground md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Everything you need to converge your data</h2>
          <p className="mt-4 text-muted-foreground">One platform, infinite possibilities. DataVerge brings all your data together.</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card-elevated p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <f.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-foreground py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">Ready to unify your data?</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/60">
          Join hundreds of enterprises already using DataVerge to make smarter decisions faster.
        </p>
        <Button variant="accent" size="xl" className="mt-8" asChild>
          <Link to="/product">Start Free Trial <ArrowRight size={20} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Brain, LineChart, Workflow, RefreshCw, Lock } from "lucide-react";

const capabilities = [
  { icon: Layers, title: "Real-Time Data Synthesis", desc: "Automatically combine and reconcile data from hundreds of sources in real time." },
  { icon: Brain, title: "AI-Powered Mapping", desc: "Machine learning models that understand your data schema and auto-map fields." },
  { icon: LineChart, title: "Predictive Insights", desc: "Surface trends and anomalies before they impact your business." },
  { icon: Workflow, title: "Visual Pipeline Builder", desc: "Drag-and-drop interface to design complex data workflows without code." },
  { icon: RefreshCw, title: "Continuous Sync", desc: "Always-on synchronization with conflict resolution and versioning." },
  { icon: Lock, title: "Zero-Trust Security", desc: "Every data transaction is encrypted, audited, and compliant." },
];

const ProductShowcase = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            DataVerGAI
          </div>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            AI-Powered Data Convergence
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            DataVerGAI is the intelligent engine at the heart of DataVerge — synthesizing, mapping, and predicting across all your data sources.
          </p>
          <Button variant="accent" size="xl" className="mt-8" asChild>
            <Link to="/pricing">Start Free Trial <ArrowRight size={20} /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Dashboard Mockup */}
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
          <div className="flex items-center gap-2 border-b border-border px-6 py-3">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-accent/60" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            <span className="ml-4 text-xs text-muted-foreground">DataVerGAI Dashboard — Live Demo</span>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-3">
            <div className="rounded-xl bg-secondary p-4">
              <div className="text-xs text-muted-foreground">Sources Connected</div>
              <div className="mt-1 text-2xl font-bold">247</div>
              <div className="mt-2 h-2 rounded-full bg-accent/20">
                <div className="h-2 w-4/5 rounded-full bg-accent" />
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <div className="text-xs text-muted-foreground">Data Processed</div>
              <div className="mt-1 text-2xl font-bold">1.2M</div>
              <div className="mt-2 h-2 rounded-full bg-accent/20">
                <div className="h-2 w-3/5 rounded-full bg-accent" />
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <div className="text-xs text-muted-foreground">AI Predictions</div>
              <div className="mt-1 text-2xl font-bold">98.7%</div>
              <div className="mt-2 h-2 rounded-full bg-accent/20">
                <div className="h-2 w-[98%] rounded-full bg-accent" />
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <div className="rounded-xl border border-border p-6">
              <div className="mb-4 text-sm font-semibold">Real-Time Data Flow</div>
              <div className="flex items-center justify-between gap-4">
                {["APIs", "Cloud", "DB", "DataVerGAI", "Insights"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className={`flex h-10 w-16 items-center justify-center rounded-lg text-xs font-semibold ${
                      step === "DataVerGAI" ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                    }`}>
                      {step}
                    </div>
                    {i < 4 && <span className="text-muted-foreground">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="bg-background py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Core Capabilities</h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="card-elevated p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <c.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductShowcase;

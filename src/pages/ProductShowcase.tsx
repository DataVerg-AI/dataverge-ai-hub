import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Brain, LineChart, Workflow, RefreshCw, Lock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";

const capabilities = [
  { icon: Layers, title: "Real-Time Data Synthesis", desc: "Automatically combine and reconcile data from hundreds of sources in real time.", span: "md:col-span-2" },
  { icon: Brain, title: "AI-Powered Mapping", desc: "Machine learning models that understand your data schema and auto-map fields.", span: "md:col-span-1 md:row-span-2" },
  { icon: LineChart, title: "Predictive Insights", desc: "Surface trends and anomalies before they impact your business.", span: "md:col-span-1" },
  { icon: Workflow, title: "Visual Pipeline Builder", desc: "Drag-and-drop interface to design complex data workflows without code.", span: "md:col-span-1" },
  { icon: RefreshCw, title: "Continuous Sync", desc: "Always-on synchronization with conflict resolution and versioning.", span: "md:col-span-1" },
  { icon: Lock, title: "Zero-Trust Security", desc: "Every data transaction is encrypted, audited, and compliant.", span: "md:col-span-2" },
];

const integrations = ["PostgreSQL", "MongoDB", "AWS S3", "Snowflake", "Salesforce", "HubSpot", "Stripe", "BigQuery", "Redis", "Kafka", "GraphQL", "REST API"];

const ProductShowcase = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            <Sparkles size={14} /> DataVerGAI — Flagship AI Engine
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold md:text-6xl lg:text-7xl">
            AI-Powered Data <span className="text-shine">Convergence</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground">
            DataVerGAI is the intelligent engine at the heart of DataVerge — synthesizing, mapping, and predicting across all your data sources.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Button variant="accent" size="xl" className="mt-8 glow-accent" asChild>
              <Link to="/pricing">Start Free Trial <ArrowRight size={20} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Dashboard Mockup */}
    <section className="bg-secondary py-16">
      <div className="container">
        <AnimatedSection>
          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-6 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-accent/60" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-4 text-xs text-muted-foreground">DataVerGAI Dashboard — Live Demo</span>
              <div className="ml-auto flex items-center gap-1">
                <motion.div className="h-2 w-2 rounded-full bg-accent" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
            </div>
            {/* Bento dashboard cards */}
            <div className="grid auto-rows-[120px] gap-3 p-5 md:grid-cols-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
                className="col-span-2 row-span-2 rounded-xl bg-secondary p-5 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Sources Connected</div>
                  <div className="mt-1 text-3xl font-bold">247</div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-accent/20">
                  <motion.div className="h-2 rounded-full bg-accent" initial={{ width: 0 }} whileInView={{ width: "80%" }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="col-span-2 rounded-xl bg-secondary p-5">
                <div className="text-xs text-muted-foreground">Data Processed</div>
                <div className="mt-1 text-2xl font-bold">1.2M</div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-accent/20">
                  <motion.div className="h-2 rounded-full bg-accent" initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }} />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="col-span-1 rounded-xl bg-accent/10 p-5 flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold">98.7%</div>
                <div className="text-[10px] text-muted-foreground">AI Accuracy</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="col-span-1 rounded-xl bg-background border border-border shadow-sm p-5 flex flex-col items-center justify-center text-center">
                <div className="text-2xl font-bold text-foreground">Live</div>
                <div className="text-[10px] text-muted-foreground">Streaming</div>
              </motion.div>
            </div>
            <div className="px-5 pb-5">
              <div className="rounded-xl border border-border p-5">
                <div className="mb-3 text-sm font-semibold">Real-Time Data Flow</div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {["APIs", "Cloud", "DB", "DataVerGAI", "Insights"].map((step, i) => (
                    <motion.div key={step} className="flex items-center gap-3" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                      <div className={`flex h-10 items-center justify-center rounded-lg px-4 text-xs font-semibold ${step === "DataVerGAI" ? "bg-accent text-accent-foreground shadow-md shadow-accent/20" : "bg-secondary text-foreground"}`}>{step}</div>
                      {i < 4 && <motion.span className="text-muted-foreground" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>→</motion.span>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

    {/* Capabilities — Bento grid */}
    <section className="bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">Capabilities</span>
            <h2 className="text-3xl font-extrabold md:text-5xl">Core Capabilities</h2>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 grid max-w-5xl auto-rows-[180px] gap-4 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}
                className={`card-elevated border-glow group flex h-full flex-col justify-between p-6 ${c.span}`}>
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                    <c.icon size={20} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-base font-bold">{c.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Integrations — scattered bubble cloud */}
    <section className="relative overflow-hidden bg-secondary/50 py-24 border-y border-border/50">
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
              Connects to <span className="text-accent">everything</span>
            </h2>
            <p className="mt-6 text-muted-foreground">200+ pre-built connectors and counting. New integrations added weekly.</p>
          </div>
        </AnimatedSection>
        {/* Organic bubble cloud */}
        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {integrations.map((name, i) => {
            const sizes = ["px-5 py-3 text-xs", "px-6 py-4 text-sm", "px-5 py-3 text-xs", "px-7 py-4 text-sm"];
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className={`rounded-full bg-background border border-border font-semibold text-foreground/70 shadow-sm transition-all hover:bg-accent/10 hover:text-accent hover:border-accent/30 ${sizes[i % sizes.length]}`}
              >
                {name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <FAQ />

    {/* CTA */}
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
            Experience the power of <span className="text-shine">DataVerGAI</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Start your free trial today. No credit card required.</p>
          <Button variant="accent" size="xl" className="mt-10 glow-accent" asChild>
            <Link to="/pricing">Get Started Free <ArrowRight size={20} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ProductShowcase;

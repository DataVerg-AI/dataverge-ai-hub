import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Brain, LineChart, Workflow, RefreshCw, Lock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";

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
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent-foreground"
          >
            <Sparkles size={14} />
            DataVerGAI — Flagship AI Engine
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold md:text-6xl lg:text-7xl"
          >
            AI-Powered Data{" "}
            <span className="text-shine">Convergence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            DataVerGAI is the intelligent engine at the heart of DataVerge — synthesizing, mapping, and predicting across all your data sources.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
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
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-6 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-accent/60" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-4 text-xs text-muted-foreground">DataVerGAI Dashboard — Live Demo</span>
              <div className="ml-auto flex items-center gap-1">
                <motion.div
                  className="h-2 w-2 rounded-full bg-accent"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-3">
              {[
                { label: "Sources Connected", value: "247", pct: "80%" },
                { label: "Data Processed", value: "1.2M", pct: "60%" },
                { label: "AI Accuracy", value: "98.7%", pct: "98%" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-secondary p-4"
                >
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                  <div className="mt-1 text-2xl font-bold">{metric.value}</div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-accent/20">
                    <motion.div
                      className="h-2 rounded-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="rounded-xl border border-border p-6">
                <div className="mb-4 text-sm font-semibold">Real-Time Data Flow</div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {["APIs", "Cloud", "DB", "DataVerGAI", "Insights"].map((step, i) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                    >
                      <div className={`flex h-10 items-center justify-center rounded-lg px-4 text-xs font-semibold ${
                        step === "DataVerGAI"
                          ? "bg-accent text-accent-foreground shadow-md shadow-accent/20"
                          : "bg-secondary text-foreground"
                      }`}>
                        {step}
                      </div>
                      {i < 4 && (
                        <motion.span
                          className="text-muted-foreground"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        >
                          →
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

    {/* Capabilities */}
    <section className="bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              Capabilities
            </span>
            <h2 className="text-3xl font-extrabold md:text-5xl">Core Capabilities</h2>
          </div>
        </AnimatedSection>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-elevated border-glow group p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                  <c.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Integration Grid */}
    <section className="relative overflow-hidden bg-foreground py-24">
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-primary-foreground md:text-5xl">
              Connects to <span className="text-accent">everything</span>
            </h2>
            <p className="mt-4 text-primary-foreground/60">200+ pre-built connectors and counting.</p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {["PostgreSQL", "MongoDB", "AWS S3", "Snowflake", "Salesforce", "HubSpot", "Stripe", "BigQuery", "Redis", "Kafka", "GraphQL", "REST API"].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex h-20 items-center justify-center rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-xs font-semibold text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <FAQ />

    {/* CTA */}
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
            Experience the power of <span className="text-shine">DataVerGAI</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Start your free trial today. No credit card required.
          </p>
          <Button variant="accent" size="xl" className="mt-10 glow-accent" asChild>
            <Link to="/pricing">Get Started Free <ArrowRight size={20} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ProductShowcase;

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Brain, LineChart, Workflow, RefreshCw, Lock, Sparkles, Database, DatabaseZap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DataStreamBg from "@/components/DataStreamBg";

const integrations = ["PostgreSQL", "MongoDB", "AWS S3", "Snowflake", "Salesforce", "HubSpot", "Stripe", "BigQuery", "Redis", "Kafka", "GraphQL", "REST API"];

const ProductShowcase = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-[url('/images/23.webp')] bg-cover bg-center py-24 lg:py-32">
      <DataStreamBg density="medium" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            <Sparkles size={14} /> DataVerGAI — Flagship AI Engine
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold md:text-6xl lg:text-7xl">
            Intelligent Data <span className="text-shine">Convergence</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground">
            DataVerGAI is the intelligent engine at the heart of DataVerg — synthesizing, mapping, and predicting across all your data sources.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Button variant="accent" size="xl" className="mt-8 glow-accent" asChild>
              <Link to="/dashboard" target="_blank" rel="noopener noreferrer">Start Free Trial <ArrowRight size={20} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Dashboard Mockup - Redesigned to be darker and more dramatic */}
    <section className="bg-background py-16">
      <div className="container relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-accent/20 blur-[100px] rounded-full" />
        <AnimatedSection>
          <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#01030e] text-white shadow-[0_0_50px_rgba(255,255,44,0.1)]">

            {/* Window controls */}
            <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4 bg-white/5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-medium text-white/50 tracking-wider uppercase">DataVerGAI Command Center</span>
              <div className="ml-auto flex items-center gap-1.5">
                <motion.div className="h-2 w-2 rounded-full bg-accent" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-xs font-bold text-accent">LIVE</span>
              </div>
            </div>

            {/* Dash Grid Mockup - Replaced with Image Placeholder */}
            <div className="p-6">
              <img src="/images/dashboard.webp" alt="Dashboard" className="w-full h-auto rounded-2xl" />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>

    {/* Custom Bento Capabilities */}
    <section className="bg-secondary py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">Platform Power</span>
            <h2 className="text-3xl font-extrabold md:text-5xl">Advanced capabilities that empower your unified data platform.</h2>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-12 auto-rows-[220px]">

          {/* Card 1: Data Synthesis (8 col hero) */}
          <AnimatedSection delay={0} className="md:col-span-8 md:row-span-1">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full overflow-hidden rounded-3xl bg-[url('/images/28.webp')] bg-cover bg-center border border-border shadow-lg"
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="flex flex-1 flex-col justify-center p-8 md:max-w-[55%] z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10">
                  <img src="/images/24.webp" alt="Data Synthesis" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-extrabold">Real-Time Data Synthesis</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Automatically combine and reconcile data from hundreds of sources in sub-second time, creating a unified and consistent data layer.</p>
              </div>
              <div className="hidden md:flex absolute right-0 inset-y-0 w-1/2 items-center justify-end pr-8 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
                <svg viewBox="0 0 200 200" className="w-[120%] h-[120%] opacity-20 text-rose-500">
                  {[1, 2, 3, 4, 5].map(i => (
                    <motion.rect key={i} x={50 - i * 10} y={100 - i * 15} width={100 + i * 20} height={40} rx={8} fill="none" stroke="currentColor" strokeWidth={2}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: [0, -5, 0], opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 4, repeat: Infinity }}
                      style={{ transformOrigin: "center", transform: "rotateX(60deg) rotateZ(45deg)" }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 2: AI Mapping (4 col tall) */}
          <AnimatedSection delay={0.1} className="md:col-span-4 md:row-span-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[url('/images/29.webp')] bg-cover bg-center border border-indigo-200 shadow-lg text-center p-8"
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10" />
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 relative z-10">
                <img src="/images/25.webp" alt="Data Synthesis" className="w-12 h-12" />
                <motion.div className="absolute inset-0 rounded-2xl border-2 border-indigo-400" animate={{ rotate: 180, scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground relative z-10">Intelligent Mapping</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1 relative z-10">Machine learning models intelligently understand your data schema, auto-mapping fields with human-level precision.</p>

              <div className="mt-6 rounded-xl bg-background border border-border p-4 text-xs font-mono text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                <div className="text-muted-foreground">{"{"}</div>
                <div className="pl-4">
                  <div className="flex items-center justify-between">
                    <span className="text-red-500">"usr_id"</span>
                    <motion.span className="text-indigo-500" animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
                    <span className="text-green-500">"user_id"</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-red-500">"dt_c"</span>
                    <motion.span className="text-indigo-500" animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
                    <span className="text-green-500">"created_at"</span>
                  </div>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 3: Predictive Insights (4 col dark) */}
          <AnimatedSection delay={0.2} className="md:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[url('/images/30.webp')] bg-cover bg-center border border-indigo-200 shadow-lg text-white p-8 shadow-2xl"
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full z-10" />
              <div className="relative z-10">
                <img src="/images/26.webp" alt="Data Synthesis" className="w-12 h-12 bg-white rounded-lg" />
                <h3 className="text-lg font-extrabold text-foreground">Predictive Insights</h3>
                <p className="mt-1 text-sm text-foreground/50">Instantly surface trends, anomalies, and patterns across all your data.</p>
              </div>
              {/* Mini sparkline */}
              <svg className="w-full h-16 mt-4 opacity-80 z-10" viewBox="0 0 100 40" >
                <motion.path d="M0,35 Q10,35 20,25 T40,20 T60,30 T80,10 T100,5" fill="none" stroke="#ffff2c" strokeWidth="2.5" strokeLinecap="round"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
                <motion.circle cx="100" cy="5" r="3" fill="#01030e" stroke="#ffff2c" strokeWidth="2" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
              </svg>
            </motion.div>
          </AnimatedSection>

          {/* Card 4: Visual Pipeline Builder (4 col) */}
          <AnimatedSection delay={0.3} className="md:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[url('/images/31.webp')] bg-cover bg-center border border-border p-8 shadow-lg"
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 via-75% to-transparent z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full z-10" />
              <div className="relative z-10">
                <img src="/images/27.webp" alt="Data Synthesis" className="w-12 h-12" />
                <h3 className="text-lg font-extrabold text-foreground">Pipeline Builder</h3>
                <p className="mt-1 text-sm text-foreground/50">Drag-and-drop workflows to automate data processes without writing a single line of code.</p>
              </div>
              {/* Mini node visual */}
              <div className="relative mt-4 h-16 w-full rounded-xl bg-secondary/50 border border-border/50 p-2 overflow-hidden flex items-center justify-center gap-2 z-10">
                <DatabaseZap size={16} className="text-muted-foreground/40" />
                <motion.div className="h-px w-8 bg-blue-500" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} />
                <motion.div className="rounded-md bg-blue-500 px-2 py-1 text-[8px] font-bold text-white shadow-sm" whileHover={{ scale: 1.1 }}>Transform</motion.div>
                <motion.div className="h-px w-8 bg-blue-500" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} />
                <Database size={16} className="text-muted-foreground/40" />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Tech Stack — Powered by NVIDIA */}
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background py-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 10px 10px, hsl(var(--accent)) 2px, transparent 0)",
        backgroundSize: "80px 80px",
      }} />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">AI Infrastructure</span>
            <h2 className="text-3xl font-extrabold md:text-5xl">Built on NVIDIA's most advanced AI frameworks</h2>
            <p className="mt-6 text-muted-foreground">Enterprise-grade performance, real-time intelligence, and production-ready deployment</p>
          </div>
        </AnimatedSection>

        {/* AI Data Engine & Analytics */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <AnimatedSection delay={0}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-border bg-secondary/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-rose-500/10">
                <Brain size={28} className="text-rose-500" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">AI Data Engine & Core Analytics</h3>
              <p className="text-muted-foreground mb-6">The quantitative foundation of your platform—GPU-accelerated data processing and predictive intelligence.</p>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-background p-4 border border-border/50">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-rose-500/20 text-xs font-bold text-rose-500">1</span>
                    NVIDIA RAPIDS
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">GPU-accelerated libraries for end-to-end data science and analytics</p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span><strong>cuDF:</strong> GPU-accelerated ETL for Auto-clean and Smart Mapping</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span><strong>cuML:</strong> High-performance ML algorithms for predictive intelligence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Real-time Sync & Alerts */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-border bg-secondary/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
                <RefreshCw size={28} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Real-Time Sync & Proactive Alerts</h3>
              <p className="text-muted-foreground mb-6">Ingest continuous data streams and immediately flag anomalies and critical events.</p>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-background p-4 border border-border/50">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500/20 text-xs font-bold text-blue-500">2</span>
                    NVIDIA Morpheus
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Real-time AI application framework for streaming data pipelines</p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span><strong>GPU-Speed Ingestion:</strong> Process 30+ connectors at scale</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span><strong>Live Alerts:</strong> AI-powered anomaly detection in real-time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Strategic Reports & Deployment */}
        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-border bg-secondary/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">
                <Sparkles size={28} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Strategic Report Generation</h3>
              <p className="text-muted-foreground mb-6">Transform complex analytics into actionable, human-readable insights.</p>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-background p-4 border border-border/50">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-purple-500/20 text-xs font-bold text-purple-500">3</span>
                    NVIDIA NeMo Framework
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Build and deploy custom LLMs for business intelligence</p>
                  <ul className="text-sm space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span><strong>Business Analyst LLM:</strong> Fine-tuned for your metrics</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span><strong>Board-Ready Reports:</strong> Automated narrative generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border border-border bg-secondary/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Layers size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Production Deployment</h3>
              <p className="text-muted-foreground mb-6">Unified infrastructure for deploying all AI models and pipelines.</p>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-background p-4 border border-border/50 mb-3">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-accent/20 text-xs font-bold text-accent">✓</span>
                    NVIDIA Triton Inference Server
                  </h4>
                  <p className="text-sm text-muted-foreground">Single unified server for Morpheus pipelines, RAPIDS models, and NeMo LLMs</p>
                </div>
                <div className="rounded-lg bg-background p-4 border border-border/50">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-accent/20 text-xs font-bold text-accent">✓</span>
                    NVIDIA TensorRT
                  </h4>
                  <p className="text-sm text-muted-foreground">Model optimization for lowest latency and highest throughput</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Integrations — Bubble cloud (unchanged structurally, visually updated) */}
    <section className="relative overflow-hidden bg-background py-24 border-y border-border/50">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 10px 10px, hsl(var(--foreground)) 2px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
              Connects to <span className="text-accent underline underline-offset-8 decoration-accent/20">everything</span>
            </h2>
            <p className="mt-6 text-muted-foreground">200+ pre-built connectors and counting. New integrations added weekly.</p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {integrations.map((name, i) => {
            const sizes = ["px-5 py-3 text-xs", "px-6 py-4 text-sm font-bold", "px-5 py-3 text-xs", "px-8 py-5 text-base font-extrabold"];
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -4, backgroundColor: "hsl(var(--brand-yellow) / 0.1)", color: "hsl(var(--foreground))", borderColor: "hsl(var(--brand-yellow))" }}
                animate={{
                  y: [0, -4 + Math.random() * 8, 0],
                }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200, y: { duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "mirror" } }}
                className={`rounded-full bg-secondary border border-border text-foreground/70 shadow-sm transition-all cursor-pointer ${sizes[i % sizes.length]}`}
              >
                {name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden bg-secondary py-32">
      <DataStreamBg density="low" />
      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
            Experience the power of <span className="text-accent">DataVerGAI</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Start your free trial today. No credit card required.</p>
          <Button variant="accent" size="xl" className="mt-10 glow-accent" asChild>
            <Link to="/dashboard" target="_blank" rel="noopener noreferrer">Get Started Free <ArrowRight size={20} /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ProductShowcase;

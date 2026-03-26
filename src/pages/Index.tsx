import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Database, Cloud, Cpu, Zap, Shield, BarChart3, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroOrb from "@/components/HeroOrb";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const features = [
  { icon: Database, title: "Unified Data Layer", desc: "Consolidate APIs, databases, and cloud storage into a single source of truth.", span: "md:col-span-2 md:row-span-1" },
  { icon: Cloud, title: "Cloud-Native", desc: "Built for modern cloud infrastructure with auto-scaling and high availability.", span: "md:col-span-1 md:row-span-2" },
  { icon: Cpu, title: "AI-Powered Insights", desc: "DataVerGAI uses machine learning to surface patterns and predict trends.", span: "md:col-span-1 md:row-span-1" },
  { icon: Zap, title: "Real-Time Sync", desc: "Sub-second data synchronization across all connected sources.", span: "md:col-span-1 md:row-span-1" },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption and role-based access.", span: "md:col-span-1 md:row-span-1" },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Interactive dashboards and reporting built right into the platform.", span: "md:col-span-2 md:row-span-1" },
];

const stats = [
  { value: 10, suffix: "M+", label: "Data points processed daily" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 500, suffix: "+", label: "Enterprise clients" },
  { value: 50, prefix: "<", suffix: "ms", label: "Average response time" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      <HeroOrb />
      <div className="container relative flex flex-col items-center py-24 text-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-accent" />
          Now in Public Beta — Try it Free
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
        >
          The Future of Data{" "}
          <span className="relative inline-block">
            <span className="text-shine">Convergence</span>
            <motion.span
              className="absolute -bottom-2 left-0 h-3 w-full bg-accent/30 -skew-x-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Merge fragmented data from APIs, cloud platforms, and databases into one intelligent, unified system powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="accent" size="xl" className="glow-accent" asChild>
            <Link to="/product">
              Explore DataVerGAI <ArrowRight size={20} />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div className="h-2 w-full rounded-full bg-accent" animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </div>
    </section>

    <TrustedBy />

    {/* Stats — Premium full-width section */}
    <section className="relative overflow-hidden bg-secondary py-20">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--brand-yellow)) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }} />
      {/* Glow blobs */}
      <div className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-48 w-48 translate-y-1/2 rounded-full bg-violet-500/5 blur-3xl" />
 
      <div className="container relative">
        <AnimatedSection>
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-foreground/40">
            Trusted by data teams worldwide
          </p>
        </AnimatedSection>
 
        <div className="grid grid-cols-2 gap-px rounded-2xl border border-border bg-background/50 overflow-hidden md:grid-cols-4 shadow-sm">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center px-6 py-10 text-center"
              >
                {/* Accent line at top */}
                <motion.div
                  className="mb-6 h-0.5 w-12 rounded-full bg-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
                <div className="text-4xl font-extrabold text-foreground md:text-5xl">
                  <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground leading-snug">{s.label}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Features — Bento Grid */}
    <section className="bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              Platform Features
            </span>
            <h2 className="text-3xl font-extrabold md:text-5xl">Everything you need to converge your data</h2>
            <p className="mt-4 text-lg text-muted-foreground">One platform, infinite possibilities.</p>
          </div>
        </AnimatedSection>

        {/* Bento layout */}
        <div className="mx-auto mt-16 grid max-w-5xl auto-rows-[180px] gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`card-elevated border-glow group flex h-full flex-col justify-between p-6 ${f.span}`}
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                    <f.icon size={20} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-base font-bold">{f.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <HowItWorks />

    {/* Data Flow Visualization — asymmetric converging layout */}
    <section className="relative overflow-hidden bg-secondary/30 py-24 border-y border-border/50">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--brand-yellow)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
              Watch your data come <span className="text-accent underline underline-offset-8 decoration-accent/20">alive</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              See how DataVerGAI transforms fragmented data streams into actionable intelligence in real-time.
            </p>
          </div>
        </AnimatedSection>
 
        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-16 max-w-4xl">
            {/* Converging funnel layout */}
            <div className="flex flex-col items-center gap-6">
              {/* Source row — spread wide */}
              <div className="flex w-full flex-wrap justify-center gap-3">
                {["REST APIs", "Cloud (AWS)", "PostgreSQL", "MongoDB", "Kafka"].map((node, i) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-xl bg-background border border-border px-5 py-3 text-xs font-semibold text-foreground/70 shadow-sm"
                  >
                    {node}
                  </motion.div>
                ))}
              </div>
 
              {/* Converging lines */}
              <div className="flex h-12 w-full items-center justify-center">
                <motion.div
                  className="h-full w-px bg-gradient-to-b from-border to-accent/60"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
 
              {/* Central engine — large card */}
              <motion.div
                className="relative rounded-2xl bg-accent px-10 py-6 text-center shadow-lg glow-accent"
                animate={{ boxShadow: ["0 0 0px hsl(var(--brand-yellow))", "0 0 40px hsl(var(--brand-yellow) / 0.3)", "0 0 0px hsl(var(--brand-yellow))"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Cpu size={28} className="mx-auto mb-2 text-accent-foreground" />
                <span className="text-lg font-extrabold text-accent-foreground">DataVerGAI</span>
                <div className="mt-1 text-xs text-accent-foreground/70">Processing 10M+ records/day</div>
              </motion.div>
 
              <div className="flex h-12 w-full items-center justify-center">
                <motion.div
                  className="h-full w-px bg-gradient-to-b from-accent/60 to-border"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
 
              {/* Output row — narrower */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Dashboards", "Alerts", "Predictions"].map((node, i) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-xl bg-accent/10 border border-accent/20 px-5 py-3 text-xs font-semibold text-accent"
                  >
                    {node}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Testimonials />
    <FAQ />

    {/* Final CTA */}
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative text-center">
        <AnimatedSection>
          <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">Ready to unify your data?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Join hundreds of enterprises already using DataVerge to make smarter decisions faster.</p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="accent" size="xl" className="glow-accent" asChild>
                <Link to="/product">Start Free Trial <ArrowRight size={20} /></Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">No credit card required · 14-day free trial · Cancel anytime</p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;

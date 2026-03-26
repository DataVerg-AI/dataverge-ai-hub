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
  { icon: Database, title: "Unified Data Layer", desc: "Consolidate APIs, databases, and cloud storage into a single source of truth." },
  { icon: Cloud, title: "Cloud-Native", desc: "Built for modern cloud infrastructure with auto-scaling and high availability." },
  { icon: Cpu, title: "AI-Powered Insights", desc: "DataVerGAI uses machine learning to surface patterns and predict trends." },
  { icon: Zap, title: "Real-Time Sync", desc: "Sub-second data synchronization across all connected sources." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption and role-based access." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Interactive dashboards and reporting built right into the platform." },
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              className="h-2 w-full rounded-full bg-accent"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Trusted By Marquee */}
    <TrustedBy />

    {/* Stats */}
    <section className="bg-background py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-foreground md:text-5xl">
                  <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
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
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-elevated border-glow group p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                  <f.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <HowItWorks />

    {/* Data Flow Visualization */}
    <section className="relative overflow-hidden bg-foreground py-24">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--brand-yellow)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-primary-foreground md:text-5xl">
              Watch your data come{" "}
              <span className="text-accent">alive</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/60">
              See how DataVerGAI transforms fragmented data streams into actionable intelligence in real time.
            </p>
          </div>
        </AnimatedSection>

        {/* Animated data flow */}
        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-4 md:grid-cols-5">
              {["REST APIs", "Cloud (AWS)", "PostgreSQL", "DataVerGAI", "Insights"].map((node, i) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative flex flex-col items-center gap-2 rounded-2xl p-4 text-center ${
                    node === "DataVerGAI"
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                      : "bg-primary-foreground/10 text-primary-foreground"
                  }`}
                >
                  {node === "DataVerGAI" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-accent"
                      animate={{ boxShadow: ["0 0 0px hsl(var(--brand-yellow))", "0 0 30px hsl(var(--brand-yellow) / 0.4)", "0 0 0px hsl(var(--brand-yellow))"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <span className="relative z-10 text-sm font-bold">{node}</span>
                  {i < 4 && (
                    <motion.div
                      className="absolute -right-4 top-1/2 hidden h-0.5 w-4 bg-accent/50 md:block"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Streaming data particles */}
            <div className="relative mt-8 h-16 overflow-hidden rounded-xl bg-primary-foreground/5">
              <motion.div
                className="absolute inset-y-0 flex items-center gap-4 px-4"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-3 rounded-full bg-accent/60" style={{ width: `${20 + Math.random() * 60}px` }} />
                ))}
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative z-10 rounded-full bg-foreground px-4 py-1 text-xs font-medium text-primary-foreground">
                  Processing 10M+ records/day
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Testimonials */}
    <Testimonials />

    {/* FAQ */}
    <FAQ />

    {/* Final CTA */}
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative text-center">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
              Ready to unify your data?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Join hundreds of enterprises already using DataVerge to make smarter decisions faster.
            </p>
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

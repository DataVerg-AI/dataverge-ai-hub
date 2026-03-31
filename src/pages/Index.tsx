import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Database, Cloud, Cpu, Zap, Shield, BarChart3, Sparkles, TrendingUp, Activity, Globe2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroOrb from "@/components/HeroOrb";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import DataStreamBg from "@/components/DataStreamBg";

const Index = () => (
  <Layout>
    {/* Hero — unchanged */}
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

    


    {/* ═══════════════ STATS — Completely Custom Design ═══════════════ */}
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">
            The numbers speak
          </p>
          <h2 className="text-center text-3xl font-extrabold md:text-5xl">
            Trusted by data teams <span className="text-accent">worldwide</span>
          </h2>
        </AnimatedSection>

        {/* Stats — 4 completely unique cards with different layouts */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-12">
          {/* Card 1: Data Points — Large hero card with live counter + mini bar chart */}
          <AnimatedSection delay={0} className="md:col-span-5">
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-full overflow-hidden rounded-3xl bg-[#01030e] p-8 text-white shadow-2xl"
            >
              {/* Animated background grid */}
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "linear-gradient(0deg, transparent 49.5%, rgba(255,255,44,0.3) 49.5%, rgba(255,255,44,0.3) 50.5%, transparent 50.5%), linear-gradient(90deg, transparent 49.5%, rgba(255,255,44,0.3) 49.5%, rgba(255,255,44,0.3) 50.5%, transparent 50.5%)",
                backgroundSize: "30px 30px"
              }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider"><Activity size={12} /> Live processing</div>
                <div className="mt-4 text-6xl font-black tracking-tight md:text-7xl">
                  <AnimatedCounter end={10} suffix="M+" />
                </div>
                <p className="mt-2 text-sm text-white/50">Data points processed every single day</p>
              </div>
              {/* Mini bar chart visualization */}
              <div className="relative z-10 mt-8 flex items-end gap-1.5 h-20">
                {[35, 55, 40, 70, 85, 60, 92, 75, 88, 95, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{ background: i >= 10 ? "#ffff2c" : "rgba(255,255,44,0.25)" }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-white/20">
                <span>Jan</span><span>Jun</span><span>Dec</span>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Card 2 + 3: Stacked right side */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Card 2: Uptime SLA — Circular gauge */}
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-lg"
              >
                <div className="flex items-center gap-5">
                  <div className="relative flex-shrink-0">
                    <svg viewBox="0 0 120 120" className="h-24 w-24 -rotate-90">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
                      <motion.circle
                        cx="60" cy="60" r="52"
                        fill="none"
                        stroke="#ffff2c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 52}
                        initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * 0.001 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-black">99.9%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Uptime SLA</div>
                    <div className="mt-1 text-sm text-muted-foreground">Enterprise-grade reliability with 99.9% guaranteed uptime</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Card 3: Enterprise Clients — Growing counter with avatars */}
            <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-3xl bg-accent p-7 shadow-lg"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-accent-foreground/60"><Globe2 size={12} className="inline mr-1" />Global reach</div>
                <div className="mt-3 text-5xl font-black text-accent-foreground">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-accent-foreground/60">Enterprise clients across 42 countries</p>
                {/* Fake avatar stack */}
                <div className="mt-4 flex -space-x-2">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-accent shadow-sm"
                      style={{ background: `hsl(${40 + i * 30}, 60%, ${88 - i * 4}%)` }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                    />
                  ))}
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-accent-foreground text-[9px] font-bold text-accent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    +493
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Card 4: Response Time — Vertical speed gauge */}
          <AnimatedSection delay={0.2} className="md:col-span-3">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-background to-secondary p-7 text-center shadow-lg"
            >
              <Zap size={16} className="text-accent mb-3" />
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Response</div>
              <div className="mt-3 text-5xl font-black text-foreground">&lt;50</div>
              <div className="text-lg font-bold text-foreground/40">ms</div>

              {/* Speed indicator bars */}
              <div className="mt-6 flex flex-col items-center gap-1.5 w-full max-w-[120px]">
                {[100, 90, 75, 55, 30].map((w, i) => (
                  <motion.div
                    key={i}
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${w}%`,
                      background: i < 2 ? "#ffff2c" : i < 4 ? "rgba(255,255,44,0.3)" : "rgba(255,255,44,0.1)",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  />
                ))}
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground">Average response time across all endpoints</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ═══════════════ FEATURES — Asymmetric Bento with Embedded Visuals ═══════════════ */}
    <section className="bg-secondary py-24">
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-12 auto-rows-[200px]">
          {/* FEATURE 1: Unified Data Layer — HERO card spanning 8 cols with embedded schema viz */}
          <AnimatedSection delay={0} className="md:col-span-8 md:row-span-1">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full overflow-hidden rounded-3xl bg-background border border-border shadow-lg"
            >
              <div className="flex flex-1 flex-col justify-center p-8 md:max-w-[55%]">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10">
                  <Database size={22} className="text-violet-500" />
                </div>
                <h3 className="text-xl font-extrabold">Unified Data Layer</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Consolidate APIs, databases, and cloud storage into a single source of truth.</p>
              </div>
              {/* Right: Animated schema lines visual */}
              <div className="hidden md:flex flex-1 items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-secondary/60 to-transparent" />
                <svg viewBox="0 0 200 160" className="w-full h-full p-4">
                  {/* Database nodes */}
                  {[{ x: 30, y: 30 }, { x: 30, y: 80 }, { x: 30, y: 130 }].map((pos, i) => (
                    <g key={`src-${i}`}>
                      <motion.rect x={pos.x - 10} y={pos.y - 8} width="20" height="16" rx="3" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.8" opacity="0.2"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} />
                      <motion.line x1={pos.x + 10} y1={pos.y} x2={110} y2={80} stroke="hsl(var(--brand-yellow))" strokeWidth="0.8" opacity="0.3"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                        strokeDasharray="3 2" />
                    </g>
                  ))}
                  {/* Central merge node */}
                  <motion.circle cx="120" cy="80" r="12" fill="hsl(var(--brand-yellow))" opacity="0.15"
                    animate={{ r: [12, 14, 12] }} transition={{ duration: 3, repeat: Infinity }} />
                  <motion.circle cx="120" cy="80" r="5" fill="hsl(var(--brand-yellow))" opacity="0.6" />
                  {/* Output */}
                  <motion.line x1="132" y1="80" x2="180" y2="80" stroke="hsl(var(--brand-yellow))" strokeWidth="1.5" opacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} />
                  <motion.rect x="168" y="70" width="20" height="20" rx="4" fill="hsl(var(--brand-yellow))" opacity="0.12"
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, type: "spring" }} />
                </svg>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* FEATURE 2: Cloud-Native — Tall card with floating cloud shapes */}
          <AnimatedSection delay={0.1} className="md:col-span-4 md:row-span-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-sky-500/5 border border-sky-200 shadow-lg"
            >
              <div className="flex-1 p-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
                  <Cloud size={22} className="text-sky-500" />
                </div>
                <h3 className="text-xl font-extrabold">Cloud-Native</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Built for modern cloud infrastructure with auto-scaling and high availability.</p>
              </div>

              {/* Cloud blob animation */}
              <div className="relative h-32 overflow-hidden">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-sky-400/10"
                    style={{
                      width: 80 + i * 30,
                      height: 40 + i * 10,
                      left: `${10 + i * 25}%`,
                      bottom: 10 + i * 15,
                    }}
                    animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  />
                ))}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1.5 text-[10px] font-semibold text-sky-600"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Activity size={10} /> Auto-scaling active
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* FEATURE 3: AI-Powered — Card with mini neural-net visual */}
          <AnimatedSection delay={0.12} className="md:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl bg-background border border-border p-7 shadow-lg"
            >
              <div className="flex-1">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                  <Cpu size={18} className="text-purple-500" />
                </div>
                <h3 className="text-base font-extrabold">AI-Powered Insights</h3>
                <p className="mt-1 text-xs text-muted-foreground">ML models that surface patterns and predict trends.</p>
              </div>
              {/* Mini neural net */}
              <svg viewBox="0 0 80 80" className="h-20 w-20 flex-shrink-0">
                {[{x:10,y:15},{x:10,y:40},{x:10,y:65}].map((n,i)=>(
                  <g key={`l-${i}`}>
                    {[{x:45,y:25},{x:45,y:55}].map((m,j)=>(
                      <motion.line key={`c-${i}-${j}`} x1={n.x+5} y1={n.y} x2={m.x} y2={m.y} stroke="hsl(var(--brand-yellow))" strokeWidth="0.5" opacity="0.3"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + (i*2+j)*0.08 }} />
                    ))}
                    <motion.circle cx={n.x+5} cy={n.y} r="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.4)" strokeWidth="0.8"
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} />
                  </g>
                ))}
                {[{x:45,y:25},{x:45,y:55}].map((n,i)=>(
                  <g key={`m-${i}`}>
                    <motion.line x1={n.x+5} y1={n.y} x2={75} y2={40} stroke="hsl(var(--brand-yellow))" strokeWidth="0.5" opacity="0.3"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5+i*0.1 }} />
                    <motion.circle cx={n.x+5} cy={n.y} r="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.4)" strokeWidth="0.8"
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3+i*0.1 }} />
                  </g>
                ))}
                <motion.circle cx="75" cy="40" r="6" fill="rgba(255,255,44,0.2)" stroke="rgba(255,255,44,0.6)" strokeWidth="1"
                  animate={{ r: [6, 7.5, 6] }} transition={{ duration: 2, repeat: Infinity }} />
              </svg>
            </motion.div>
          </AnimatedSection>

          {/* FEATURE 4: Real-Time Sync — Heartbeat EKG line */}
          <AnimatedSection delay={0.15} className="md:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-emerald-500/5 border border-emerald-200 p-7 shadow-lg"
            >
              <div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Zap size={18} className="text-emerald-500" />
                </div>
                <h3 className="text-base font-extrabold">Real-Time Sync</h3>
                <p className="mt-1 text-xs text-muted-foreground">Sub-second data synchronization across all sources.</p>
              </div>
              {/* EKG heartbeat line */}
              <svg viewBox="0 0 200 40" className="mt-3 w-full h-10">
                <motion.polyline
                  points="0,20 30,20 40,20 50,5 55,35 60,10 65,25 70,20 100,20 130,20 140,20 150,5 155,35 160,10 165,25 170,20 200,20"
                  fill="none"
                  stroke="rgba(16,185,129,0.4)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </svg>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                <motion.div className="h-1.5 w-1.5 rounded-full bg-emerald-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                Syncing in real-time
              </div>
            </motion.div>
          </AnimatedSection>

          {/* FEATURE 5: Enterprise Security — Shield with animated lock */}
          <AnimatedSection delay={0.18} className="md:col-span-5">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full items-center overflow-hidden rounded-3xl bg-background border border-border p-8 shadow-lg"
            >
              <div className="flex-1">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10">
                  <Shield size={22} className="text-amber-500" />
                </div>
                <h3 className="text-lg font-extrabold">Enterprise Security</h3>
                <p className="mt-2 text-sm text-muted-foreground">SOC 2 compliant with end-to-end encryption and role-based access.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["SOC 2", "AES-256", "RBAC", "SSO"].map((badge) => (
                    <span key={badge} className="rounded-full bg-amber-500/8 border border-amber-200 px-2.5 py-1 text-[10px] font-bold text-amber-700">{badge}</span>
                  ))}
                </div>
              </div>
              <motion.div
                className="hidden md:flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-500/5"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Shield size={36} className="text-amber-400/40" />
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* FEATURE 6: Advanced Analytics — Live chart mockup */}
          <AnimatedSection delay={0.2} className="md:col-span-7">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex h-full overflow-hidden rounded-3xl bg-[#01030e] text-white p-8 shadow-2xl"
            >
              <div className="flex-1 flex flex-col justify-center md:max-w-[45%]">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <BarChart3 size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-extrabold">Advanced Analytics</h3>
                <p className="mt-2 text-sm text-white/50">Interactive dashboards and reporting built right into the platform.</p>
              </div>
              {/* Animated line chart */}
              <div className="hidden md:flex flex-1 items-center justify-center relative">
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffff2c" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#ffff2c" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[25, 50, 75].map((y) => (
                    <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="rgba(255,255,255,0.05)" />
                  ))}
                  {/* Area fill */}
                  <motion.path
                    d="M0,85 Q20,80 40,70 T80,50 T120,35 T160,25 T200,15 L200,100 L0,100 Z"
                    fill="url(#chartFill)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  {/* Line */}
                  <motion.path
                    d="M0,85 Q20,80 40,70 T80,50 T120,35 T160,25 T200,15"
                    fill="none"
                    stroke="#ffff2c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  {/* Data point pulse */}
                  <motion.circle cx="200" cy="15" r="4" fill="#ffff2c"
                    animate={{ r: [4, 6, 4], opacity: [0.8, 0.4, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }} />
                  <circle cx="200" cy="15" r="2" fill="#ffff2c" />
                </svg>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] text-white/50">
                  <TrendingUp size={10} className="text-accent" /> +34.7%
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <HowItWorks />

    {/* ═══════════════ DATA FLOW — Horizontal Pipeline ═══════════════ */}
    <section className="relative overflow-hidden bg-background py-24 border-y border-border/50">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--brand-yellow)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
              Watch your data come <span className="text-accent">alive</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              See how DataVerGAI transforms fragmented data streams into actionable intelligence in real-time.
            </p>
          </div>
        </AnimatedSection>

        {/* Horizontal pipeline - completely new design */}
        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-[#01030e] p-8 md:p-12 shadow-2xl">
            {/* Top label row */}
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-white/20">
              <span>Input Sources</span>
              <span>Processing</span>
              <span>Output</span>
            </div>

            {/* Main pipeline */}
            <div className="flex items-center justify-between w-full overflow-x-auto pb-4">
              {/* Source pills */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                {["REST APIs", "AWS S3", "PostgreSQL", "MongoDB", "Kafka"].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/60 whitespace-nowrap"
                  >
                    {s}
                  </motion.div>
                ))}
              </div>

              {/* Converging arrows */}
              <div className="relative flex-1 min-w-[40px] h-40">
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                  {[20, 50, 80, 110, 140].map((y, i) => (
                    <motion.line key={i} x1="0%" y1={y} x2="100%" y2="80" stroke="rgba(255,255,44,0.3)" strokeWidth="1.5" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }} />
                  ))}
                  {/* Traveling dots */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.circle key={`dot-${i}`} r="3" fill="#ffff2c"
                      animate={{
                        cx: ["0%", "100%"],
                        cy: [20 + i * 30, 80],
                      }}
                      transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random(), ease: "linear" }}
                      style={{ filter: "drop-shadow(0 0 4px rgba(255,255,44,0.8))" }}
                      opacity="0.9"
                    />
                  ))}
                </svg>
              </div>

              {/* Central engine */}
              <motion.div
                className="relative flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-accent flex flex-col items-center justify-center shadow-lg"
                animate={{ boxShadow: ["0 0 0px rgba(255,255,44,0)", "0 0 40px rgba(255,255,44,0.3)", "0 0 0px rgba(255,255,44,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Cpu size={28} className="text-accent-foreground mb-1" />
                <span className="text-sm font-black text-accent-foreground">DataVerGAI</span>
                <span className="text-[9px] text-accent-foreground/50">Processing</span>
                {/* Spinning ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-accent-foreground/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ borderStyle: "dashed" }}
                />
              </motion.div>

              {/* Diverging arrows */}
              <div className="relative flex-1 min-w-[40px] h-24">
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                  {[20, 48, 76].map((y, i) => (
                    <motion.line key={i} x1="0%" y1="48" x2="100%" y2={y} stroke="rgba(255,255,44,0.3)" strokeWidth="1.5" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1 + i * 0.1, duration: 0.8 }} />
                  ))}
                  {[0, 1, 2].map((i) => (
                    <motion.circle key={`dot2-${i}`} r="3" fill="#ffff2c"
                      animate={{
                        cx: ["0%", "100%"],
                        cy: [48, 20 + i * 28],
                      }}
                      transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: 0.7 + Math.random(), ease: "linear" }}
                      style={{ filter: "drop-shadow(0 0 4px rgba(255,255,44,0.8))" }}
                      opacity="0.9"
                    />
                  ))}
                </svg>
              </div>

              {/* Output cards */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                {[{label: "Dashboards", icon: BarChart3}, {label: "Alerts", icon: Activity}, {label: "Predictions", icon: TrendingUp}].map((o, i) => (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-semibold text-accent whitespace-nowrap"
                  >
                    <o.icon size={12} />
                    {o.label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom stats bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white/5 px-6 py-3">
              {[{label: "Throughput", val: "10M/day"}, {label: "Latency", val: "<50ms"}, {label: "Accuracy", val: "98.7%"}, {label: "Sources", val: "200+"}].map((s, i) => (
                <motion.div key={s.label} className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 + i * 0.1 }}>
                  <div className="text-sm font-bold text-accent">{s.val}</div>
                  <div className="text-[10px] text-white/30">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Testimonials />
    <FAQ />

    {/* Final CTA */}
    <section className="relative overflow-hidden bg-background py-32">
      <DataStreamBg density="low" />
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

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Lightbulb, Globe, Award, Heart, Network, Code, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import DataStreamBg from "@/components/DataStreamBg";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useRef } from "react";
import { FaLinkedin, FaYoutube, FaPinterest, FaXTwitter, FaFacebook, FaRocket } from "react-icons/fa6";
import { SiCrunchbase } from "react-icons/si";

const milestones = [
  { year: "2024", title: "The Convergence Engine", desc: "DataVerge started by completely rethinking data pipelines. 3 engineers built the first unified mapping engine in 6 weeks.", img: "/images/46.webp" },
  { year: "2024", title: "Seed Funding", desc: "Raised $4M from tier-1 investors who saw the potential for an AI-native integration paradigm.", img: "/images/47.webp" },
  { year: "2025", title: "DataVerGAI Goes Live", desc: "Launched our flagship engine. Reached 50+ enterprise-grade connectors in the first month.", img: "/images/48.webp" },
  { year: "2025", title: "Enterprise Adoption", desc: "Crossed 500 active clients. Processing billions of rows daily with sub-50ms latency.", img: "/images/49.webp" },
  { year: "2026", title: "Global Scale", desc: "Series A funding secured. Expanding the convergence engine to handle multi-cloud global infrastructure.", img: "/images/50.webp" },
];

const teamStats = [
  { img: "/images/43.webp", value: 12, label: "Global Regions Active", format: "" },
  { img: "/images/44.webp", value: 85, label: "Platform Engineers", format: "+" },
  { img: "/images/45.webp", value: 99.9, label: "Uptime SLA", format: "%" },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-40">
        <DataStreamBg density="low" />
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                <Target size={14} className="text-accent" /> Our Story
              </span>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-7xl">
                We believe data should <span className="text-shine">converge</span>.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
                Founded on July 05, 2023, DataVerge was born from a simple observation: enterprises waste millions wrestling with fragmented data silos. We built the definitive AI-native platform to stop the wrestling.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values - Custom Bento Grid */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="container">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold md:text-5xl">Engineered by First Principles</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Our core values reflect how we build the platform.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[400px]">
            {/* Mission-Driven: Tall Card */}
            <AnimatedSection className="md:col-span-1 md:row-span-2" delay={0.1}>
              <GlowCard className="h-full group overflow-hidden bg-[url('/images/37.webp')] bg-cover bg-center" hoverScale={1.02}>
                <div className="flex h-full flex-col justify-between p-8 relative z-10">
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                      <img src="/images/40.webp" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h3 className="text-2xl font-bold">Mission-Driven</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      We exist to solve the universal problem of fragmented data. Every feature, every line of code, and every infrastructure decision is made to simplify the complex web of enterprise pipelines.
                    </p>
                  </div>

                </div>
              </GlowCard>
            </AnimatedSection>

            {/* Customer-First: Wide Top Card */}
            <AnimatedSection className="md:col-span-2 md:row-span-1" delay={0.2}>
              <GlowCard className="h-full group overflow-hidden bg-[url('/images/38.webp')] bg-cover bg-center border-border" hoverScale={1.02}>
                <div className="flex h-full flex-col md:flex-row p-8 relative z-10">
                  <div className="flex-1 shrink-0">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
                      <img src="/images/41.webp" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h3 className="text-2xl font-bold">Customer-First Architecture</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                      Every feature is built from real enterprise feedback. We don't build in a vacuum. We sit with data engineers, understand their pain points, and engineer automated solutions that respect their workflows.
                    </p>
                  </div>
                  <div className="flex-1 mt-6 md:mt-0 relative flex items-center justify-end">
                    {/* Floating feedback nodes */}
                    <div className="relative w-full h-full min-h-[150px]">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute right-0 bg-background border border-border rounded-lg p-3 shadow-lg flex items-center gap-3 w-48"
                          style={{ top: `${(i - 1) * 35}%`, zIndex: 10 - i }}
                          animate={{ x: [0, -10, 0], y: [0, i % 2 === 0 ? 5 : -5, 0] }}
                          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-500/20" />
                          <div className="flex-1 space-y-1.5">
                            <div className="h-1.5 w-full bg-border rounded-full" />
                            <div className="h-1.5 w-2/3 bg-border rounded-full" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            {/* Innovation: Wide Bottom Card */}
            <AnimatedSection className="md:col-span-2 md:row-span-1" delay={0.3}>
              <GlowCard className="h-full group overflow-hidden bg-[url('/images/39.webp')] bg-cover bg-center border-border" hoverScale={1.02}>
                <div className="flex h-full flex-col justify-center p-8 relative z-10">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <img src="/images/42.webp" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                      <img src="/images/42.webp" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h3 className="text-2xl font-bold">Relentless Innovation</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      We push the boundaries of what AI can do with data. While others rely on static regex and manual mapping, we've deployed deep learning models that semantically understand data schemas. Our engine learns and improves with every pipeline it builds.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="bg-background py-24 sm:py-32 border-t border-border/50">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-extrabold md:text-5xl">Built for <br /><span className="text-shine">Global Scale</span></h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Our distributed team operates globally, managing infrastructure that spans continents. We maintain rigid SLAs because we know your data is the lifeblood of your business.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamStats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1} className={i === 2 ? "sm:col-span-2" : ""}>
                  <GlowCard className="h-full bg-card" hoverY={-4}>
                    <div className="p-8 flex flex-col justify-between h-full">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                        <img src={stat.img} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <div className="text-5xl font-extrabold text-foreground mb-2 flex items-baseline gap-1">
                          <AnimatedCounter end={stat.value} />
                          <span className="text-2xl text-accent">{stat.format}</span>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">{stat.label}</div>
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="bg-secondary py-24 sm:py-32 overflow-hidden" ref={containerRef}>
        <div className="container relative">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl font-extrabold md:text-5xl">The Journey Here</h2>
            </div>
          </AnimatedSection>

          <div className="relative mx-auto max-w-4xl">
            {/* The bold central timeline path */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-border"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              {/* Highlight sweep */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-accent to-transparent"
                style={{ y: y2 }}
              />
            </motion.div>

            <div className="space-y-16 lg:space-y-24">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.title} delay={0.1}>
                  <div className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                    {/* Node on the line */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent md:-translate-x-1/2 -translate-x-[6px] z-10 shadow-[0_0_15px_hsl(var(--brand-yellow))]" />

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                      <GlowCard hoverScale={1.03} className="bg-card">
                        <div className="p-6 md:p-8">
                          <motion.span
                            className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-xs font-black text-accent-foreground tracking-widest"
                            whileHover={{ scale: 1.05 }}
                          >
                            {m.year}
                          </motion.span>
                          <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">{m.title}</h4>
                          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{m.desc}</p>
                        </div>
                      </GlowCard>
                    </div>

                    {/* Image Card on opposite side */}
                    <div className={`hidden md:flex flex-col justify-center w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                      {m.img && (
                        <div className={`w-full max-w-sm ${i % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                          <div className="p-2 overflow-hidden">
                            <img src={m.img} alt={m.title} className="w-full h-auto rounded-xl object-cover" />
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect with our Community */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 rounded-3xl border border-accent/20 bg-accent/5 p-12 lg:p-16 overflow-hidden relative">
              {/* Decorative data stream in background */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, hsl(var(--brand-yellow)) 0%, transparent 50%)' }}
              />

              <div className="max-w-xl relative z-10 text-center md:text-left">
                <h2 className="text-3xl font-extrabold md:text-5xl">Connect with our <span className="text-shine">Community</span></h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Stay synchronized with our latest engineering breakthroughs, enterprise integrations, and industry insights across our digital presence.
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 relative z-10">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/dataverg-tech/", label: "LinkedIn" },
                  { icon: FaXTwitter, href: "https://x.com/dataverg", label: "X" },
                  { icon: FaYoutube, href: "https://www.youtube.com/@DataVergTech", label: "YouTube" },
                  { icon: FaFacebook, href: "https://www.facebook.com/dataVerg/", label: "Facebook" },
                  { icon: FaPinterest, href: "https://www.pinterest.com/Dataverg/", label: "Pinterest" },
                  { icon: SiCrunchbase, href: "https://www.crunchbase.com/organization/dataverg-tech", label: "Crunchbase" },
                  { icon: FaRocket, href: "https://www.f6s.com/dataverg-tech", label: "F6S" },
                ].map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl hover:bg-background hover:border-border hover:text-foreground shadow-sm transition-all bg-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -5, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    title={s.label}
                  >
                    <s.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
};

export default About;


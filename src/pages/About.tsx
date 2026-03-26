import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Globe, Award, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We exist to solve the universal problem of fragmented data." },
  { icon: Users, title: "Customer-First", desc: "Every feature is built from real enterprise feedback." },
  { icon: Lightbulb, title: "Innovation", desc: "We push the boundaries of what AI can do with data." },
];

const milestones = [
  { year: "2024", title: "Founded", desc: "DataVerge started with 3 engineers and a bold vision." },
  { year: "2024", title: "Seed Round", desc: "$4M raised to build the convergence engine." },
  { year: "2025", title: "DataVerGAI Launch", desc: "AI-native engine goes live with 50+ connectors." },
  { year: "2025", title: "500 Clients", desc: "Rapid enterprise adoption across 12 industries." },
  { year: "2026", title: "Series A", desc: "Scaling globally with 200+ connectors." },
];

const teamStats = [
  { icon: Globe, value: "12", label: "Countries" },
  { icon: Award, value: "85+", label: "Team members" },
  { icon: Heart, value: "4.9/5", label: "Glassdoor" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="container relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              Our Story
            </span>
            <h1 className="text-4xl font-extrabold md:text-6xl">About DataVerge</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 2024, DataVerge was born from a simple observation: enterprises waste millions wrestling with fragmented data. We built the definitive platform for data convergence.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Values — horizontal scrolling cards with stagger */}
    <section className="bg-secondary py-20">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-extrabold md:text-4xl">Our Values</h2>
        </AnimatedSection>
        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6 md:flex-row">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, rotate: i === 1 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`card-elevated border-glow flex-1 p-8 ${
                  i === 1 ? "md:-mt-6" : i === 2 ? "md:mt-4" : ""
                }`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <v.icon size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline — alternating left/right */}
    <section className="bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-extrabold md:text-4xl">Our Journey</h2>
        </AnimatedSection>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:left-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.title} delay={i * 0.1}>
                  <div className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden flex-1 md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="card-elevated inline-block p-6"
                      >
                        <div className="text-xs font-bold text-accent-foreground">{m.year}</div>
                        <h4 className="mt-1 text-base font-bold">{m.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                      </motion.div>
                    </div>
                    {/* Dot */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background shadow-md">
                      <span className="text-xs font-bold text-foreground">{m.year.slice(2)}</span>
                    </div>
                    {/* Mobile card */}
                    <div className="flex-1 md:hidden">
                      <div className="card-elevated p-5">
                        <div className="text-xs font-bold text-accent-foreground">{m.year}</div>
                        <h4 className="mt-1 text-base font-bold">{m.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                    <div className="hidden flex-1 md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team stats — floating cards */}
    <section className="bg-foreground py-20">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-extrabold text-primary-foreground md:text-4xl">Our Team</h2>
        </AnimatedSection>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-6">
          {teamStats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex flex-col items-center rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 ${
                  i === 1 ? "w-52 h-52 mt-4" : "w-44 h-44"
                }`}
              >
                <s.icon size={24} className="mb-3 text-accent" />
                <div className="text-3xl font-extrabold text-primary-foreground">{s.value}</div>
                <div className="mt-1 text-xs text-primary-foreground/60">{s.label}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="bg-background py-24">
      <div className="container">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <motion.div
              whileHover={{ y: -4 }}
              className="card-elevated border-glow overflow-hidden"
            >
              <div className="bg-gradient-to-r from-accent/5 to-transparent p-10 md:p-14">
                <h2 className="text-2xl font-extrabold">Our Story</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  After years of watching enterprises struggle with disconnected data silos, our founding team — veterans of data engineering, machine learning, and enterprise software — decided to take a fundamentally different approach. Instead of building yet another integration tool, we built DataVerGAI: an AI-native convergence engine that doesn't just move data — it understands it.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Today, DataVerge serves over 500 enterprise clients, processing millions of data points daily across dozens of industries.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;

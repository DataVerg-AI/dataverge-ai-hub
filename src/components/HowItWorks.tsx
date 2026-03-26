import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Database, Cpu, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Database,
    title: "Connect Your Sources",
    desc: "Plug in APIs, databases, cloud storage, and SaaS tools in minutes with 200+ pre-built connectors.",
    color: "bg-accent/10",
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI Maps & Merges",
    desc: "DataVerGAI automatically discovers schemas, maps relationships, and resolves conflicts across all sources.",
    color: "bg-foreground/5",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Unified Insights",
    desc: "Access a single source of truth with real-time dashboards, predictive analytics, and automated alerts.",
    color: "bg-accent/10",
  },
];

const HowItWorks = () => (
  <section className="relative bg-background py-24 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
    </div>

    <div className="container relative">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            How It Works
          </span>
          <h2 className="text-3xl font-extrabold md:text-5xl">Three steps to unified data</h2>
        </div>
      </AnimatedSection>

      <div className="mx-auto mt-20 max-w-5xl">
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative text-center"
              >
                {/* Step number bubble */}
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl ${step.color}`}>
                    <step.icon size={32} className="text-foreground" />
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-extrabold text-accent-foreground shadow-lg">
                      {step.num}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Database, Cpu, BarChart3, ArrowDown } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Database,
    title: "Connect Your Sources",
    desc: "Plug in APIs, databases, cloud storage, and SaaS tools in minutes with 200+ pre-built connectors.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI Maps & Merges",
    desc: "DataVerGAI automatically discovers schemas, maps relationships, and resolves conflicts across all sources.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Unified Insights",
    desc: "Access a single source of truth with real-time dashboards, predictive analytics, and automated alerts.",
  },
];

const HowItWorks = () => (
  <section className="relative bg-secondary py-24 overflow-hidden">
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

      {/* Zigzag / alternating card layout */}
      <div className="mx-auto mt-20 max-w-4xl space-y-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.15}>
            <div className="flex flex-col items-center gap-6">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`card-elevated border-glow flex w-full max-w-2xl items-start gap-6 p-8 ${
                  i % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                }`}
              >
                <div className="relative shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <step.icon size={28} className="text-foreground" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[10px] font-extrabold text-accent-foreground shadow-lg">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={20} className="text-accent/40" />
                </motion.div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

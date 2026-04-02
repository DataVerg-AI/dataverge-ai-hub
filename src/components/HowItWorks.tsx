import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Database, Cpu, BarChart3 } from "lucide-react";
import GlowCard from "./GlowCard";

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
    desc: "Access your unified data layer with real-time dashboards, predictive analytics, and automated alerts.",
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

      {/* Steps with animated connecting lines */}
      <div className="mx-auto mt-20 max-w-4xl space-y-4">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.15}>
            <div className="flex flex-col items-center gap-4">
              <GlowCard
                className={`w-full max-w-2xl ${i % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                  }`}
                hoverY={-6}
              >
                <div className="flex items-start gap-6 p-8">
                  <div className="relative shrink-0">
                    {/* Animated progress ring around icon */}
                    <svg className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)]" viewBox="0 0 80 80">
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="hsl(var(--brand-yellow))"
                        strokeWidth="1.5"
                        strokeDasharray="226"
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
                        opacity={0.3}
                      />
                    </svg>
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <step.icon size={28} className="text-foreground" />
                    </motion.div>
                    <motion.div
                      className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[10px] font-extrabold text-accent-foreground shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.3 + i * 0.15 }}
                    >
                      {step.num}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </GlowCard>

              {/* Animated connecting data-stream line */}
              {i < steps.length - 1 && (
                <div className="flex h-10 items-center">
                  <motion.div
                    className="relative h-full w-px"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                    style={{ transformOrigin: "top" }}
                  >
                    <div className="h-full w-px bg-gradient-to-b from-accent/40 to-accent/10" />
                    {/* Pulsing data dot traveling down */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-accent"
                      animate={{ y: [0, 32, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

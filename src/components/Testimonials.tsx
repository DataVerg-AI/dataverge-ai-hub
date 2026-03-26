import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    quote: "DataVerge eliminated 80% of our data pipeline complexity overnight. The AI mapping is genuinely magical.",
    companyMetric: "Saved 30hrs/week",
    metricIcon: TrendingUp,
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Engineering, ScaleUp",
    quote: "We went from 47 fragmented data sources to one unified view in under a week.",
    companyMetric: "100% Uptime",
    metricIcon: ShieldCheck,
  },
  {
    name: "Emily Nakamura",
    role: "Head of Data, Nexus Corp",
    quote: "The predictive insights caught a revenue anomaly that saved us $2M. DataVerGAI pays for itself in days.",
    companyMetric: "10x ROI",
    metricIcon: Zap,
  },
];

const Testimonials = () => (
  <section className="relative overflow-hidden bg-background py-24">
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    <div className="container relative">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl font-extrabold md:text-5xl">Engineers <span className="text-accent underline underline-offset-8 decoration-accent/20">love</span> us</h2>
        </div>
      </AnimatedSection>

      {/* Completely Custom Bento Layout for Testimonials */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-12 auto-rows-[250px] md:auto-rows-[280px]">
        
        {/* Card 1: Main Dark Review */}
        <AnimatedSection delay={0} className="md:col-span-8">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#01030e] text-white p-8 md:p-10 shadow-2xl"
          >
            {/* Background glowing quote */}
            <div className="absolute -right-8 -top-8 text-white/5 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
              <Quote size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Star size={16} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              <p className="text-2xl font-bold leading-tight md:text-4xl md:leading-tight">
                "{testimonials[0].quote}"
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-white">{testimonials[0].name}</div>
                  <div className="text-sm text-white/50">{testimonials[0].role}</div>
                </div>
              </div>
              
              {/* Highlight Metric Badge */}
              <div className="hidden md:flex flex-col items-end">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-accent">
                  {(() => {
                    const Icon = testimonials[0].metricIcon;
                    return <Icon size={14} />;
                  })()} {testimonials[0].companyMetric}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Card 2: Light metric-focused review */}
        <AnimatedSection delay={0.15} className="md:col-span-4">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-lg"
          >
            <div className="absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
            
            <Quote size={32} className="text-emerald-500/20" />
            
            <p className="mt-4 text-lg font-semibold leading-snug">
              "{testimonials[1].quote}"
            </p>

            <div className="mt-8 border-t border-border/50 pt-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-border">
                  <div className="flex h-full w-full items-center justify-center bg-emerald-500/10 text-sm font-bold text-emerald-600">
                    {testimonials[1].name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">{testimonials[1].name}</div>
                  <div className="text-[10px] text-muted-foreground">{testimonials[1].role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                {(() => {
                  const Icon = testimonials[1].metricIcon;
                  return <Icon size={14} />;
                })()} {testimonials[1].companyMetric}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Card 3: Wide Bottom Card */}
        <AnimatedSection delay={0.2} className="md:col-span-12">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative flex h-full overflow-hidden rounded-3xl bg-secondary border border-border/50 shadow-md"
          >
            <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-purple-500 to-indigo-500" />
            
            <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
              <div className="flex max-w-3xl items-start gap-6">
                <div className="hidden md:flex">
                  <Quote size={48} className="text-foreground/5" />
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={14} className="fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                  <p className="text-xl md:text-3xl font-semibold leading-tight text-foreground/80">
                    "{testimonials[2].quote}"
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:pl-16">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-xl border border-border">
                    <div className="flex h-full w-full items-center justify-center bg-purple-500/10 text-lg font-bold text-purple-600">
                      {testimonials[2].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-bold">{testimonials[2].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[2].role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-purple-200 bg-purple-500/10 px-4 py-2 text-sm font-bold text-purple-700">
                  {(() => {
                    const Icon = testimonials[2].metricIcon;
                    return <Icon size={16} />;
                  })()} Impact: {testimonials[2].companyMetric}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

      </div>
    </div>
  </section>
);

export default Testimonials;

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    quote: "DataVerge eliminated 80% of our data pipeline complexity overnight. The AI mapping is genuinely magical.",
    rating: 5,
    size: "large",
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Engineering, ScaleUp",
    quote: "We went from 47 fragmented data sources to one unified view in under a week. Our team saves 30 hours per sprint.",
    rating: 5,
    size: "small",
  },
  {
    name: "Emily Nakamura",
    role: "Head of Data, Nexus Corp",
    quote: "The predictive insights caught a revenue anomaly that saved us $2M. DataVerGAI pays for itself in days.",
    rating: 5,
    size: "small",
  },
  {
    name: "James O'Brien",
    role: "Director of Analytics, Forge",
    quote: "I've used every integration tool on the market. DataVerge is the first one that actually understands our data.",
    rating: 5,
    size: "large",
  },
];

const Testimonials = () => (
  <section className="relative overflow-hidden bg-background py-24">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    <div className="container relative">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl font-extrabold md:text-5xl">What our customers say</h2>
        </div>
      </AnimatedSection>

      {/* Masonry-style staggered layout */}
      <div className="mx-auto mt-16 max-w-5xl columns-1 gap-6 space-y-6 md:columns-2">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`card-elevated border-glow break-inside-avoid ${
                t.size === "large" ? "p-10" : "p-7"
              }`}
            >
              <Quote size={24} className="mb-4 text-accent/30" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className={`leading-relaxed text-foreground ${t.size === "large" ? "text-xl" : "text-base"}`}>
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

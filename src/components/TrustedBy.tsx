import { motion } from "framer-motion";

const logos = [
  "TechFlow", "ScaleUp", "Nexus", "Forge", "Quantum", "Apex",
  "Zenith", "Vortex", "Prism", "Atlas", "Cipher", "Helix",
];

const TrustedBy = () => (
  <section className="border-y border-border bg-secondary/50 py-12 overflow-hidden">
    <div className="container mb-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted by 500+ forward-thinking companies
      </p>
    </div>
    <div className="relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-secondary/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-secondary/50 to-transparent" />

      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex h-12 items-center gap-2 text-lg font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
          >
            <div className="h-6 w-6 rounded bg-muted-foreground/10" />
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustedBy;

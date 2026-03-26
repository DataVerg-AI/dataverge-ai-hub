import { motion } from "framer-motion";

const logos = [
  "TechFlow", "ScaleUp", "Nexus", "Forge", "Quantum", "Apex",
  "Zenith", "Vortex", "Prism", "Atlas", "Cipher", "Helix",
];

const TrustedBy = () => (
  <section className="relative border-y border-border bg-secondary/50 py-12 overflow-hidden">
    {/* Pulsing gradient underline */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background: "linear-gradient(90deg, transparent, hsl(var(--brand-yellow) / 0.3), transparent)",
      }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mb-6 text-center">
      <motion.p
        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by 500+ forward-thinking companies
      </motion.p>
    </div>
    <div className="relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-secondary/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-secondary/50 to-transparent" />

      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <motion.div
            key={`${logo}-${i}`}
            className="flex h-12 items-center gap-2.5 text-lg font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Hexagonal logo placeholder */}
            <svg viewBox="0 0 28 28" className="h-7 w-7 shrink-0">
              <polygon
                points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
                fill="hsl(var(--muted-foreground) / 0.08)"
                stroke="hsl(var(--muted-foreground) / 0.15)"
                strokeWidth="1"
              />
              <text
                x="14"
                y="16"
                textAnchor="middle"
                fill="hsl(var(--muted-foreground) / 0.3)"
                fontSize="10"
                fontWeight="bold"
              >
                {logo.charAt(0)}
              </text>
            </svg>
            {logo}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustedBy;

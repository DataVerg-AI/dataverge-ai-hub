import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const HeroOrb = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Main glow */}
    <motion.div
      className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
      style={{ background: "radial-gradient(circle, hsl(var(--brand-yellow)), transparent 70%)" }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Orbiting dots */}
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-accent"
          style={{ opacity: 0.3 - i * 0.04 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <div
            className="absolute h-2 w-2 rounded-full bg-accent"
            style={{ transform: `translateX(${80 + i * 40}px)` }}
          />
        </motion.div>
      ))}
    </div>

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />

    {/* Floating geometric shapes */}
    <motion.div
      className="absolute right-[15%] top-[20%] h-16 w-16 rotate-45 rounded-xl border border-accent/20"
      animate={{ y: [-10, 10, -10], rotate: [45, 50, 45] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute left-[10%] top-[60%] h-12 w-12 rounded-full border border-foreground/10"
      animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute right-[25%] bottom-[20%] h-8 w-8 rounded-lg bg-accent/5"
      animate={{ y: [-8, 8, -8], rotate: [0, 90, 0] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default HeroOrb;

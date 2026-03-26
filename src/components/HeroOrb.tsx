import { motion } from "framer-motion";

const HeroOrb = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Main glow */}
    <motion.div
      className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
      style={{ background: "radial-gradient(circle, hsl(var(--brand-yellow)), transparent 70%)" }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Pulsing ring around center */}
    <motion.div
      className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
      style={{ width: 240, height: 240 }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
      style={{ width: 320, height: 320 }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />

    {/* Orbiting dots */}
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-accent"
          style={{ opacity: 0.3 - i * 0.04 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear", delay: i * 2 }}
        >
          <div
            className="absolute h-2 w-2 rounded-full bg-accent"
            style={{ transform: `translateX(${80 + i * 40}px)` }}
          />
        </motion.div>
      ))}
    </div>

    {/* Converging data-stream lines (SVG) */}
    <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
      {[
        { x1: "0%", y1: "0%", delay: 0 },
        { x1: "100%", y1: "0%", delay: 0.8 },
        { x1: "0%", y1: "100%", delay: 1.6 },
        { x1: "100%", y1: "100%", delay: 2.4 },
        { x1: "50%", y1: "0%", delay: 0.4 },
        { x1: "50%", y1: "100%", delay: 1.2 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2="50%"
          y2="35%"
          stroke="hsl(var(--brand-yellow))"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 5, delay: line.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>

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
    {/* Hexagon shape */}
    <motion.div
      className="absolute left-[20%] top-[25%] h-10 w-10"
      animate={{ y: [-6, 6, -6], rotate: [0, 30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 40 40" className="h-full w-full">
        <polygon
          points="20,2 37,11 37,29 20,38 3,29 3,11"
          fill="none"
          stroke="hsl(var(--brand-yellow))"
          strokeWidth="1"
          opacity="0.15"
        />
      </svg>
    </motion.div>
    {/* Data node cluster (bottom-left) */}
    <motion.div
      className="absolute left-[8%] bottom-[35%]"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {[0, 1, 2].map((j) => (
        <div
          key={j}
          className="absolute h-1 w-1 rounded-full bg-accent/30"
          style={{
            left: j * 12,
            top: Math.sin(j * 1.5) * 8,
          }}
        />
      ))}
    </motion.div>
  </div>
);

export default HeroOrb;

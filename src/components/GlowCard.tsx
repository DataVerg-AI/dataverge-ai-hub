import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
  hoverY?: number;
}

const GlowCard = ({
  children,
  className = "",
  hoverScale = 1.02,
  hoverY = -6,
}: GlowCardProps) => (
  <motion.div
    whileHover={{ y: hoverY, scale: hoverScale }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/5 ${className}`}
  >
    {/* Animated gradient border overlay */}
    <motion.div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background: "linear-gradient(135deg, hsl(var(--brand-yellow) / 0.15), transparent 40%, transparent 60%, hsl(var(--brand-yellow) / 0.1))",
      }}
    />

    {/* Top accent shimmer line */}
    <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
      <motion.div
        className="h-full w-1/3 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        animate={{ x: ["-100%", "400%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
    </div>

    {/* Content */}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default GlowCard;

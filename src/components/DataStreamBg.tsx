import { motion } from "framer-motion";

interface DataStreamBgProps {
  className?: string;
  density?: "low" | "medium" | "high";
  color?: string;
}

const DataStreamBg = ({ className = "", density = "medium", color = "accent" }: DataStreamBgProps) => {
  const lineCount = density === "low" ? 3 : density === "high" ? 8 : 5;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Converging data lines from edges to center */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {Array.from({ length: lineCount }).map((_, i) => {
          const startX = (i / (lineCount - 1)) * 100;
          const delay = i * 0.4;
          return (
            <motion.line
              key={`top-${i}`}
              x1={`${startX}%`}
              y1="0%"
              x2="50%"
              y2="50%"
              stroke={`hsl(var(--brand-yellow) / 0.06)`}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.4, 0] }}
              transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
        {Array.from({ length: lineCount }).map((_, i) => {
          const startX = (i / (lineCount - 1)) * 100;
          const delay = i * 0.4 + 2;
          return (
            <motion.line
              key={`bottom-${i}`}
              x1={`${startX}%`}
              y1="100%"
              x2="50%"
              y2="50%"
              stroke={`hsl(var(--brand-yellow) / 0.06)`}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.4, 0] }}
              transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Pulsing center convergence point */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      </motion.div>

      {/* Floating data-node dots */}
      {Array.from({ length: density === "low" ? 4 : density === "high" ? 12 : 7 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent/20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20 + Math.random() * 40, 0],
            x: [0, -10 + Math.random() * 20, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default DataStreamBg;

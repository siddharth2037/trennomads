import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const BLUR_VARIANTS: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
  visible: { filter: "blur(0px)", opacity: 1, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** true = animate in on scroll into view; false = animate in immediately on mount (for above-the-fold hero content) */
  onScroll?: boolean;
}

/** Shared blur/fade/rise entrance used across the whole site: blur(10px)+opacity0+y20 -> blur(0)+opacity1+y0, 0.8s easeOut. */
export function Reveal({ children, delay = 0, className, onScroll = false }: RevealProps) {
  const shared = {
    className,
    variants: BLUR_VARIANTS,
    initial: "hidden" as const,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  };

  if (onScroll) {
    return (
      <motion.div {...shared} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div {...shared} animate="visible">
      {children}
    </motion.div>
  );
}

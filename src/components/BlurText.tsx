import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
}

/** Word-by-word blur/rise-in on scroll into view, once. */
export function BlurText({ text, className }: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {/* real, space-separated text for screen readers / find-in-page / textContent */}
      <span className="sr-only">{text}</span>
      <div
        aria-hidden="true"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            style={{ display: "inline-block", marginRight: "0.28em" }}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

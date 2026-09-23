import type { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBirdProps {
  src: string;
  /** The section to scroll-track — the bird drifts across this section's own scroll range. */
  containerRef: RefObject<HTMLElement | null>;
}

/**
 * A large, soft-edged bird sitting behind the hero text (ref: the Dribbble
 * BluebirSecurity hero). No autonomous flapping/flight animation — that's
 * exactly what went wrong last time ("bird can't fly properly"). Instead
 * the "flight" is pure scroll parallax: as the hero scrolls past, the bird
 * drifts slightly right and down and fades, so it reads as flying off.
 */
export function ParallaxBird({ src, containerRef }: ParallaxBirdProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.9, 0.6, 0.15]);

  if (!src) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, opacity }}
      className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center md:justify-end md:pr-[4%]"
    >
      <div
        className="h-[78%] w-[88%] max-w-[760px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 62% 68% at 52% 46%, black 42%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 68% at 52% 46%, black 42%, transparent 78%)",
        }}
      >
        <img src={src} alt="" className="h-full w-full object-cover" loading="eager" />
      </div>
    </motion.div>
  );
}

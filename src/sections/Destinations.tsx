import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight, CloseIcon } from "../components/icons";
import { CONTENT, type Destination } from "../data/content";

interface DestinationsProps {
  onBookTrip: (tripTitle: string) => void;
}

export function Destinations({ onBookTrip }: DestinationsProps) {
  const [active, setActive] = useState<Destination | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="destinations" className="relative overflow-hidden bg-brand-pale/40 px-8 py-24 md:px-16 lg:px-20">
      <div className="blue-glow">
        <div className="blue-glow__orb blue-glow__orb--a" />
        <div className="blue-glow__orb blue-glow__orb--b" />
      </div>

      <div className="relative z-10">
        <Reveal onScroll>
          <p className="mb-6 text-sm text-black/50 font-body">// Destinations</p>
        </Reveal>
        <Reveal onScroll delay={0.1}>
          <h2 className="font-heading text-6xl italic leading-[0.9] tracking-[-3px] text-black md:text-7xl lg:text-[6rem]">
            {CONTENT.destinations.length} stops,
            <br />
            one weekend.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {CONTENT.destinations.map((dest, i) => (
            <Reveal key={dest.id} onScroll delay={(i % 4) * 0.08}>
              <button
                onClick={() => setActive(dest)}
                className="group relative block w-full overflow-hidden rounded-[0.9rem] border border-brand-pale bg-white text-left shadow-[0_4px_18px_rgba(13,71,161,0.08)] transition-shadow hover:shadow-[0_6px_24px_rgba(13,71,161,0.14)]"
              >
                <img
                  src={dest.poster}
                  alt={dest.title}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <span className="absolute left-2.5 top-2.5 inline-block rounded-full bg-brand/90 px-2.5 py-0.5 text-[10px] text-white font-body">
                  {dest.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <h3 className="font-heading text-lg italic leading-none tracking-[-0.3px] text-white">
                    {dest.title}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-[11px] leading-snug text-white/75 font-body">
                    {dest.blurb}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              className="glass-light-strong relative z-10 max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem]"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-md"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
              <img src={active.poster} alt={active.title} className="h-56 w-full object-cover md:h-72" />
              <div className="p-6 md:p-8">
                <span className="inline-block rounded-full bg-brand-pale px-3 py-1 text-[11px] text-brand-dark font-body">
                  {active.tag}
                </span>
                <h3 className="mt-4 font-heading text-3xl italic tracking-[-1px] text-black md:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-black/75 font-body">
                  {active.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      onBookTrip(active.title);
                      setActive(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white font-body hover:bg-brand-dark"
                  >
                    Book This Trip
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  {active.price && (
                    <span className="text-sm text-black/60 font-body">{active.price}</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

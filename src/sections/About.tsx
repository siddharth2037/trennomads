import { Reveal } from "../components/Reveal";
import { CONTENT } from "../data/content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-8 py-24 md:px-16 lg:px-20">
      <div className="blue-glow">
        <div className="blue-glow__orb blue-glow__orb--a" />
        <div className="blue-glow__orb blue-glow__orb--b" />
      </div>

      <div className="relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal onScroll>
            <p className="mb-6 text-sm text-black/50 font-body">// About</p>
          </Reveal>
          <Reveal onScroll delay={0.1}>
            <h2 className="font-heading text-5xl italic leading-[0.95] tracking-[-2px] text-black md:text-6xl">
              Not a travel agency.
              <br />A travelling cartel.
            </h2>
          </Reveal>
          <Reveal onScroll delay={0.2}>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-black/70 font-body">
              {CONTENT.business.brandName} started as a handful of friends doing Chikmagalur
              on weekends and getting asked "can we come next time?" one too many times. Now
              it's a proper — if still small — operation: the same waterfalls, the same
              coffee-estate stops, and the same insistence on keeping every batch small enough
              that it still feels like your friends' trip, not a tour bus.
            </p>
          </Reveal>
        </div>

        <Reveal onScroll delay={0.15}>
          <div className="flex min-h-[220px] flex-col justify-center rounded-[1.5rem] bg-brand-dark p-8 shadow-[0_12px_36px_rgba(13,71,161,0.25)] md:p-10">
            <p className="font-heading text-3xl italic leading-tight tracking-[-1px] text-white md:text-4xl">
              "{CONTENT.business.tagline}."
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide text-white/60 font-body">
              — {CONTENT.business.brandName}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

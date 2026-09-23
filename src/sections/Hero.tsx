import { FadingVideo } from "../components/FadingVideo";
import { BlurText } from "../components/BlurText";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight, ClockIcon, GlobeIcon, Play } from "../components/icons";
import { CONTENT } from "../data/content";

export function Hero() {
  const trustNames = CONTENT.destinations.slice(0, 5).map((d) => d.title);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      <FadingVideo
        src={CONTENT.media.heroVideo}
        className="absolute left-1/2 top-0 z-0 -translate-x-1/2 object-cover object-top"
        style={{ width: "120%", height: "120%" }}
      />
      {/* readability wash over the aurora/video */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/25 to-black/60" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          <Reveal delay={0.4}>
            <div className="liquid-glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4">
              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-black font-body">
                Open
              </span>
              <span className="text-sm text-white/90 font-body">
                {CONTENT.trip.schedule} — {CONTENT.trip.groupSize}
              </span>
            </div>
          </Reveal>

          <div className="mt-6 max-w-3xl">
            <BlurText
              text="Chikmagalur Weekends, Without the Planning"
              className="font-heading text-6xl italic leading-[0.8] tracking-[-4px] text-white md:text-7xl lg:text-[5.5rem]"
            />
          </div>

          <Reveal delay={0.8}>
            <p className="mt-4 max-w-2xl text-sm font-light leading-tight text-white font-body md:text-base">
              We're a small crew running weekend trips from Bangalore into Chikmagalur —
              waterfalls, peaks, coffee estates, and a driver who already knows the
              shortcuts. You show up, we handle the rest.
            </p>
          </Reveal>

          <Reveal delay={1.1}>
            <div className="mt-6 flex items-center gap-6">
              <a
                href="#book"
                className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white font-body"
              >
                Book Your Seat
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 text-sm font-medium text-white font-body"
              >
                <Play className="h-3.5 w-3.5" />
                See the Route
              </a>
            </div>
          </Reveal>

          <Reveal delay={1.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="liquid-glass w-[220px] rounded-[1.25rem] p-5 text-left">
                <ClockIcon className="h-5 w-5 text-white/80" />
                <div className="mt-4 font-heading text-4xl italic leading-none tracking-[-1px] text-white">
                  Weekly
                </div>
                <div className="mt-2 text-xs text-white/70 font-body">
                  New Batch Departs Every Weekend
                </div>
              </div>
              <div className="liquid-glass w-[220px] rounded-[1.25rem] p-5 text-left">
                <GlobeIcon className="h-5 w-5 text-white/80" />
                <div className="mt-4 font-heading text-4xl italic leading-none tracking-[-1px] text-white">
                  {CONTENT.destinations.length}
                </div>
                <div className="mt-2 text-xs text-white/70 font-body">
                  Waterfalls, Peaks &amp; Coffee Estates Covered
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1.4} className="flex flex-col items-center gap-4 pb-8">
          <div className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80 font-body">
            This weekend's route runs through
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-6 md:gap-x-14">
            {trustNames.map((name) => (
              <span
                key={name}
                className="font-heading text-lg italic tracking-tight text-white/85 md:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

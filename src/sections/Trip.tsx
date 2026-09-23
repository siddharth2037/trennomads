import { Reveal } from "../components/Reveal";
import { CompassIcon, MountainIcon, UsersIcon } from "../components/icons";
import { CONTENT } from "../data/content";

const CARDS = [
  {
    title: "The Route",
    icon: MountainIcon,
    tags: ["Waterfalls", "Peaks", "Viewpoints", "Coffee Estates"],
    body: "Nine hand-picked stops across Chikmagalur — waterfalls, sunrise peaks, viewpoints and coffee country — sequenced into one weekend that doesn't feel rushed.",
  },
  {
    title: "The Crew",
    icon: UsersIcon,
    tags: ["Max 10 Travellers", "On-ground Lead", "Vetted Drivers", "Small Groups Only"],
    body: "Every batch is capped small on purpose — an on-ground lead who knows the route, a driver who's done it a hundred times, and a group size that still feels personal.",
  },
  {
    title: "The Logistics",
    icon: CompassIcon,
    tags: ["Pickup Across Bangalore", CONTENT.trip.schedule, CONTENT.trip.price, "Booked on WhatsApp"],
    body: "Pickup points across the city, a fixed weekend schedule, and a booking flow that's just a WhatsApp message — no apps, no accounts, no back-and-forth.",
  },
];

export function Trip() {
  return (
    <section id="trip" className="relative overflow-hidden bg-white">
      <div className="blue-glow">
        <div className="blue-glow__orb blue-glow__orb--a" />
        <div className="blue-glow__orb blue-glow__orb--b" />
      </div>

      <div className="relative z-10 px-8 py-24 md:px-16 lg:px-20">
        <Reveal onScroll>
          <p className="mb-6 text-sm text-black/50 font-body">// The Trip</p>
        </Reveal>
        <Reveal onScroll delay={0.1}>
          <h2 className="font-heading text-6xl italic leading-[0.9] tracking-[-3px] text-black md:text-7xl lg:text-[6rem]">
            Chikmagalur,
            <br />
            covered end to end
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} onScroll delay={i * 0.12}>
                <div className="glass-light flex min-h-[360px] flex-col rounded-[1.25rem] p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-brand">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-full bg-brand-pale px-3 py-1 text-[11px] text-brand-dark font-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1" />

                  <div>
                    <h3 className="font-heading text-3xl italic leading-none tracking-[-1px] text-black md:text-4xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[32ch] text-sm font-light leading-snug text-black/70 font-body">
                      {card.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { CONTENT } from "../data/content";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "The Trip", href: "#trip" },
  { label: "About", href: "#about" },
  { label: "Book", href: "#book" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-brand-dark px-8 py-16 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-heading text-3xl italic tracking-[-1px] text-white">
            {CONTENT.business.brandName}
          </p>
          <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/65 font-body">
            {CONTENT.business.tagline} — small-group weekend trips from Bangalore into
            Chikmagalur's waterfalls, peaks and coffee estates.
          </p>
        </div>

        <div>
          <p className="mb-3 text-[11px] uppercase tracking-wide text-white/45 font-body">Explore</p>
          <ul className="flex flex-col gap-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/75 font-body hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-[11px] uppercase tracking-wide text-white/45 font-body">Reach us</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={`https://wa.me/${CONTENT.business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 font-body hover:text-white"
              >
                {CONTENT.business.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTENT.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 font-body hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTENT.business.email}`} className="text-sm text-white/75 font-body hover:text-white">
                {CONTENT.business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-xs text-white/50 font-body md:flex-row">
        <span>
          © {year} {CONTENT.business.brandName}. All rights reserved.
        </span>
        <span>Bangalore → Chikmagalur, every weekend.</span>
      </div>
    </footer>
  );
}

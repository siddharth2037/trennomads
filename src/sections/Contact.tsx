import { Reveal } from "../components/Reveal";
import { ArrowUpRight, InstagramIcon, MailIcon, WhatsAppIcon } from "../components/icons";
import { CONTENT } from "../data/content";
import { waLink } from "../lib/whatsapp";

export function Contact() {
  const rows = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: CONTENT.business.whatsappDisplay,
      href: waLink(CONTENT.business.defaultWhatsappMessage),
      external: true,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: `@${CONTENT.business.instagramHandle.replace(/[._]+$/, "")}`,
      href: CONTENT.business.instagramUrl,
      external: true,
    },
    {
      icon: MailIcon,
      label: "Email",
      value: CONTENT.business.email,
      href: `mailto:${CONTENT.business.email}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-8 py-24 md:px-16 lg:px-20">
      <div className="blue-glow">
        <div className="blue-glow__orb blue-glow__orb--a" />
        <div className="blue-glow__orb blue-glow__orb--b" />
      </div>

      <div className="relative z-10">
        <Reveal onScroll>
          <p className="mb-6 text-sm text-black/50 font-body">// Contact</p>
        </Reveal>
        <Reveal onScroll delay={0.1}>
          <h2 className="font-heading text-5xl italic leading-[0.95] tracking-[-2px] text-black md:text-6xl">
            Say hi before the
            <br />
            next batch fills up.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {rows.map((row, i) => {
            const Icon = row.icon;
            return (
              <Reveal key={row.label} onScroll delay={i * 0.1}>
                <a
                  href={row.href}
                  target={row.external ? "_blank" : undefined}
                  rel={row.external ? "noopener noreferrer" : undefined}
                  className="glass-light group flex items-center justify-between gap-4 rounded-[1.25rem] p-6"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-wide text-black/45 font-body">
                        {row.label}
                      </span>
                      <span className="block text-sm text-black font-body">{row.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-black/35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

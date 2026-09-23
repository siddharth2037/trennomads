import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CloseIcon, MenuIcon } from "./icons";
import logoIcon from "../assets/logo-icon-t.png";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "The Trip", href: "#trip" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  // Hero is the only dark/full-bleed section — once it's mostly scrolled
  // past, the nav switches from the dark glass to the light glass so it
  // stays readable over the white sections underneath.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillClass = scrolled ? "glass-light" : "liquid-glass";
  const linkClass = scrolled
    ? "text-black/70 hover:text-black"
    : "text-white/90 hover:text-white";
  const iconTextClass = scrolled ? "text-black" : "text-white";

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16">
        <a
          href="#home"
          className={`${pillClass} h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300`}
          aria-label="TrenNomads home"
        >
          <img src={logoIcon} alt="" className="h-7 w-7 object-contain" />
        </a>

        <nav
          className={`hidden md:flex ${pillClass} rounded-full px-1.5 py-1.5 items-center gap-0.5 transition-colors duration-300`}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-sm font-medium font-body transition-colors ${linkClass}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-brand text-white px-4 py-2 text-sm font-medium font-body hover:bg-brand-dark transition-colors"
          >
            Book a Seat
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <div className="h-12 w-12 flex items-center justify-center shrink-0">
          <button
            type="button"
            className={`md:hidden ${pillClass} h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300 ${iconTextClass}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 glass-light-strong rounded-[1.75rem] p-3 flex flex-col gap-0.5"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium text-black/80 font-body rounded-2xl hover:bg-brand-pale/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand text-white px-4 py-3 text-sm font-medium font-body hover:bg-brand-dark"
            >
              Book a Seat <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

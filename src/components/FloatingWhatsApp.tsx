import { WhatsAppIcon } from "./icons";
import { CONTENT } from "../data/content";
import { waLink } from "../lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(CONTENT.business.defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgba(13,71,161,0.35)] hover:bg-brand-dark transition-colors"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

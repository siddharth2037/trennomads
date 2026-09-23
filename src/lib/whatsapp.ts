import { CONTENT } from "../data/content";

/** Build a wa.me link that opens WhatsApp with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${CONTENT.business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Open a wa.me link via a synthetic <a target="_blank"> click — survives popup blockers better than window.open. */
export function openWhatsApp(message: string) {
  const a = document.createElement("a");
  a.href = waLink(message);
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export interface BookingDetails {
  name: string;
  phone: string;
  tripTitle: string; // destination title, or the "undecided" label
  date: string;
  travellers: string;
  pickup: string;
  notes: string;
}

export function buildBookingMessage(d: BookingDetails): string {
  const lines = [
    `Hi TrenNomads! I'd like to book a trip.`,
    ``,
    `*Trip:* ${d.tripTitle}`,
    `*Name:* ${d.name}`,
    `*Phone:* ${d.phone}`,
    `*Date:* ${d.date}`,
    `*Travellers:* ${d.travellers}`,
    `*Pickup point:* ${d.pickup}`,
  ];
  if (d.notes.trim()) {
    lines.push(`*Notes:* ${d.notes.trim()}`);
  }
  return lines.join("\n");
}

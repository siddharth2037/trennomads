import { useEffect, useState, type FormEvent } from "react";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight, ChevronDown } from "../components/icons";
import { CONTENT } from "../data/content";
import { buildBookingMessage, openWhatsApp, waLink } from "../lib/whatsapp";

export interface BookingPrefill {
  title: string;
  nonce: number;
}

interface BookingProps {
  prefill: BookingPrefill | null;
}

const inputClass =
  "w-full border-b border-black/15 bg-transparent py-2.5 text-sm text-black font-body placeholder:text-black/35 focus:border-brand focus:outline-none transition-colors";

const labelClass = "mb-1.5 block text-[11px] uppercase tracking-wide text-black/45 font-body";

export function Booking({ prefill }: BookingProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [trip, setTrip] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [pickup, setPickup] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [lastMessage, setLastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefill) setTrip(prefill.title);
  }, [prefill]);

  const tripOptions = [
    ...CONTENT.destinations.map((d) => d.title),
    CONTENT.booking.undecidedLabel,
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: Record<string, boolean> = {
      name: !name.trim(),
      phone: !phone.trim(),
      trip: !trip,
      date: !date,
      travellers: !travellers.trim(),
      pickup: !pickup,
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const message = buildBookingMessage({ name, phone, tripTitle: trip, date, travellers, pickup, notes });
    setLastMessage(message);
    openWhatsApp(message);
  }

  return (
    <section id="book" className="relative overflow-hidden bg-brand-pale/40 px-8 py-24 md:px-16 lg:px-20">
      <div className="blue-glow">
        <div className="blue-glow__orb blue-glow__orb--a" />
        <div className="blue-glow__orb blue-glow__orb--b" />
      </div>

      <Reveal onScroll className="relative z-10">
        <p className="mb-6 text-sm text-black/50 font-body">// Book</p>
      </Reveal>
      <Reveal onScroll delay={0.1} className="relative z-10">
        <h2 className="font-heading text-5xl italic leading-[0.9] tracking-[-2px] text-black md:text-6xl">
          {CONTENT.booking.heading}
        </h2>
      </Reveal>
      <Reveal onScroll delay={0.15} className="relative z-10">
        <p className="mt-4 max-w-xl text-sm font-light text-black/65 font-body">{CONTENT.booking.sub}</p>
      </Reveal>

      <Reveal onScroll delay={0.2} className="relative z-10 mt-10">
        <form onSubmit={handleSubmit} noValidate className="glass-light-strong rounded-[1.5rem] p-6 md:p-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="bf-name">
                Name
              </label>
              <input
                id="bf-name"
                className={inputClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-rose-600 font-body">Please add your name.</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="bf-phone">
                Phone
              </label>
              <input
                id="bf-phone"
                className={inputClass}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 ..."
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-600 font-body">Please add a phone number.</p>}
            </div>

            <div className="relative">
              <label className={labelClass} htmlFor="bf-trip">
                Trip
              </label>
              <select
                id="bf-trip"
                className={`${inputClass} appearance-none pr-6`}
                value={trip}
                onChange={(e) => setTrip(e.target.value)}
              >
                <option value="" disabled className="bg-white">
                  Choose a trip
                </option>
                {tripOptions.map((t) => (
                  <option key={t} value={t} className="bg-white">
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute bottom-3 right-0 h-4 w-4 text-black/40" />
              {errors.trip && <p className="mt-1 text-xs text-rose-600 font-body">Please pick a trip.</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="bf-date">
                Preferred date
              </label>
              <input
                id="bf-date"
                type="date"
                className={inputClass}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <p className="mt-1 text-xs text-rose-600 font-body">Please pick a date.</p>}
            </div>

            <div>
              <label className={labelClass} htmlFor="bf-travellers">
                Travellers
              </label>
              <input
                id="bf-travellers"
                type="number"
                min={1}
                className={inputClass}
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                placeholder="e.g. 2"
              />
              {errors.travellers && <p className="mt-1 text-xs text-rose-600 font-body">How many travellers?</p>}
            </div>

            <div className="relative">
              <label className={labelClass} htmlFor="bf-pickup">
                Pickup point
              </label>
              <select
                id="bf-pickup"
                className={`${inputClass} appearance-none pr-6`}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              >
                <option value="" disabled className="bg-white">
                  Choose a pickup point
                </option>
                {CONTENT.booking.pickupPoints.map((p) => (
                  <option key={p} value={p} className="bg-white">
                    {p}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute bottom-3 right-0 h-4 w-4 text-black/40" />
              {errors.pickup && <p className="mt-1 text-xs text-rose-600 font-body">Please pick a pickup point.</p>}
            </div>

            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="bf-notes">
                Notes (optional)
              </label>
              <input
                id="bf-notes"
                className={inputClass}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything we should know?"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white font-body hover:bg-brand-dark transition-colors"
            >
              Send on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </button>
            {lastMessage && (
              <a
                href={waLink(lastMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-black/55 underline font-body"
              >
                WhatsApp didn't open? Tap here
              </a>
            )}
          </div>
        </form>
      </Reveal>
    </section>
  );
}

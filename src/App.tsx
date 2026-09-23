import { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Hero } from "./sections/Hero";
import { Trip } from "./sections/Trip";
import { Destinations } from "./sections/Destinations";
import { Booking, type BookingPrefill } from "./sections/Booking";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  const [prefill, setPrefill] = useState<BookingPrefill | null>(null);

  const startBooking = useCallback((tripTitle: string) => {
    setPrefill({ title: tripTitle, nonce: Date.now() });
    // let the modal-close/state update settle before scrolling
    requestAnimationFrame(() => {
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Trip />
        <Destinations onBookTrip={startBooking} />
        <About />
        <Booking prefill={prefill} />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

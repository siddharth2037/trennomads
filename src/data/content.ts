/* =========================================================
   CONTENT.TS
   ---------------------------------------------------------
   THIS IS THE ONE FILE YOU EDIT for day-to-day updates:
     - contact details (WhatsApp, Instagram, email)
     - overall trip info (price, schedule, group size)
     - every destination's text and photos
     - booking form options

   You never need to open any of the component files.
   Edit this file, then rebuild (`npm run build`) or just
   save while `npm run dev` is running.
   ========================================================= */

import heroValleyVideo from "../assets/video/hero-valley.mp4";

export interface Destination {
  id: string;
  title: string;
  tag: string;
  price: string;
  blurb: string;
  description: string;
  poster: string;
  photos: string[];
  video: string;
}

export const CONTENT = {
  /* ---------------------------------------------------------
     1. BUSINESS / CONTACT INFO
     --------------------------------------------------------- */
  business: {
    brandName: "TrenNomads",
    tagline: "Your Travelling Cartel",

    // WhatsApp number in international format, digits only
    whatsappNumber: "918861866814",
    whatsappDisplay: "+91 88618 66814",

    defaultWhatsappMessage:
      "Hi TrenNomads! I'd like to know more about your upcoming trips.",

    instagramHandle: "trenomad._",
    instagramUrl: "https://www.instagram.com/trenomad._?stkn=MW0xYzI4bDdmMGdxYw==",

    email: "trennomads@gmail.com",
  },

  /* ---------------------------------------------------------
     2. OVERALL TRIP INFO
     --------------------------------------------------------- */
  trip: {
    price: "₹3,499 / person",
    schedule: "Every Weekend",
    groupSize: "Max 10 travelers",
  },

  /* ---------------------------------------------------------
     2b. BOOKING FORM
     --------------------------------------------------------- */
  booking: {
    heading: "Book your seat.",
    sub: "Fill this in and it opens WhatsApp with your details already written out — you just press send.",
    pickupPoints: [
      "Majestic / Kempegowda Bus Stand",
      "Marathahalli",
      "Silk Board",
      "Hebbal",
      "Banashankari",
      "Yeshwanthpur",
      "Other (I'll tell you on WhatsApp)",
    ],
    undecidedLabel: "Not decided yet — suggest one",
  },

  /* ---------------------------------------------------------
     3. DESTINATIONS
     --------------------------------------------------------- */
  destinations: [
    {
      id: "mullayanagiri-peak",
      title: "Mullayanagiri Peak",
      tag: "Peak",
      price: "",
      blurb: "Karnataka's highest point, and one of its best sunrises.",
      description:
        "An early climb up Mullayanagiri for a sunrise that's worth the alarm — clouds sitting below you, the Western Ghats stretching out on every side. The kind of view that ends up as everyone's new wallpaper.",
      poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "ukuda-falls",
      title: "Ukuda Falls",
      tag: "Waterfall",
      price: "",
      blurb: "A quieter falls tucked just off the main trail.",
      description:
        "Ukuda Falls doesn't get the crowd the bigger waterfalls do — which is exactly the point. A short walk in, a proper waterfall payoff, and enough space to actually enjoy it. Bring water shoes.",
      poster: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "honnamana-falls",
      title: "Honnamana Falls",
      tag: "Waterfall",
      price: "",
      blurb: "A forest trek in for a proper waterfall payoff.",
      description:
        "Tucked inside the forest, Honnamana Falls rewards the walk in with cool water and quiet — a good stop to slow the trip down for an hour before the next spot.",
      poster: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "jerry-falls",
      title: "Jerry Falls",
      tag: "Waterfall",
      price: "",
      blurb: "Less crowded, more jumping-in-the-water energy.",
      description:
        "A laid-back waterfall stop built for actually getting in the water, not just photographing it from a ledge. Bring a change of clothes.",
      poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&q=80",
        "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "hirekolale-lake",
      title: "Hirekolale Lake",
      tag: "Lake",
      price: "",
      blurb: "Still water, hills in the background, good for slowing down.",
      description:
        "A calm lake stop with the hills sitting quietly behind it — the trip's built-in breather between the more active spots. Good light for photos in the early evening.",
      poster: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=900&q=80",
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "bande-kallu-gudda",
      title: "Bande Kallu Gudda",
      tag: "Viewpoint",
      price: "",
      blurb: "A rock climb up for one of the widest views on the route.",
      description:
        "A short scramble up an open rock face for a 360° view of the surrounding hills — one of the best spots on the whole route for a group photo.",
      poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "shooting-point",
      title: "Shooting Point",
      tag: "Viewpoint",
      price: "",
      blurb: "The classic Kemmangundi viewpoint — clouds roll right past you.",
      description:
        "One of the region's most photographed viewpoints, and it earns the reputation — on a good day, the clouds roll in low enough that you're standing right in them.",
      poster: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&q=80",
        "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "siri-cafe",
      title: "Siri Cafe",
      tag: "Cafe",
      price: "",
      blurb: "Coffee-country coffee, with the view to match.",
      description:
        "A relaxed café break in the middle of the estates — good coffee, a slower pace, and a nice spot to regroup before the next stop.",
      poster: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=900&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=80",
      ],
      video: "",
    },
    {
      id: "baba-budangiri",
      title: "Baba Budangiri",
      tag: "Peak",
      price: "",
      blurb: "Hills, a dargah, and a trail that mixes faith with a workout.",
      description:
        "A hill range with real elevation and a well-known dargah at the top — part trek, part pilgrimage, and a solid way to close out the trip.",
      poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
      photos: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      ],
      video: "",
    },
  ] satisfies Destination[],

  /* ---------------------------------------------------------
     4. BACKGROUND VIDEO (Hero / The Trip sections)
     ---------------------------------------------------------
     Leave these empty to show the animated aurora fallback.
     To use real trip footage: drop short, muted, looping mp4
     clips into src/assets/video/ (a few MB each, no audio
     needed since FadingVideo always renders muted), import
     them, and set the path(s) here. Pass an array to cycle
     through several clips.
     --------------------------------------------------------- */
  media: {
    // Aerial drone clip (client-supplied, audio stripped — FadingVideo is
    // always muted anyway) that pans from a lake to a sunrise valley.
    heroVideo: [heroValleyVideo] as string[],
    tripVideo: [] as string[],
    // Decorative bird behind the hero text (see components/ParallaxBird.tsx).
    // Free-license Unsplash photo — swap for your own if you'd rather.
    heroBird: "https://images.unsplash.com/photo-1591625794921-6b73ff0ffebd?w=1600&q=80",
  },
};

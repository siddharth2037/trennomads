/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Instrument Serif'", "serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      colors: {
        // https://colorhunt.co/palette/e3f2fd90caf92196f30d47a1
        brand: {
          pale: "#E3F2FD",
          light: "#90CAF9",
          DEFAULT: "#2196F3",
          dark: "#0D47A1",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#020617",      // navbar, footer, overall frame
        hero: "#0f172a",      // hero section background
        accent: "#22c55e",    // primary CTAs (buttons, highlights)
        navhover: "#38bdf8",  // navbar hover & focus (UX guidance)
      },
    },
  },
  plugins: [],
};

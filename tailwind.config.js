/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "desktop-lg": "1400px",
      "desktop-md": "1200px",
      "desktop-sm": "1024px",
      "tablet-lg": "840px",
      "tablet-md": "768px",
      "tablet-sm": "640px",
      "mobile-lg": "532px",
      "mobile-md": "440px",
      "mobile-sm": "360px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "desktop-lg": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
}

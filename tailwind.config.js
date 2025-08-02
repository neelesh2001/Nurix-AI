/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        loader: "loaderAnim 2s ease-out forwards",
      },
      keyframes: {
        loaderAnim: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#020887", // Deep Indigo
          accent: "#A7FFEB", // Calm Mint
          secondary: "#2979FF", // Sky Blue
          background: "#F9FAFB", // Cloud White
          surface: "#ECEFF1", // Neutral Grey
          text: "#263238", // Rich Charcoal
          error: "#FF6E6E", // Soft Coral
          success: "#00C853", // Leafy Green
          highlight: "#E4FF8F", // Lemon Ice
          bot: "#D9F1FF", // Aqua Blue
        },
      },
    },
  },
  plugins: [],
};

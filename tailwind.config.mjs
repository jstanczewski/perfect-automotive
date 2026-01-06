/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#01a2d0",
          black: "#010204",
          white: "#ffffff",
          bg: "#f6f7fb",
          card: "#ffffff",
          border: "#e6e8f0",
          text: "#0f172a",
          muted: "#475569",
        },
      },
    },
  },
  plugins: [],
};

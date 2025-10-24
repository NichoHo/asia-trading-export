/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004AAD", // deep blue
          light: "#0F6EEB",
          dark: "#4C8EF7",
        },
        secondary: {
          DEFAULT: "#D62828", // vivid red
          light: "#E94B4B",
          dark: "#FF5C5C",
        },
        accent: {
          DEFAULT: "#00B4D8", // modern cyan accent
          dark: "#4FD1C5",
        },
        neutral: {
          light: "#F8FAFC",
          dark: "#0B1221",
          surface: "#FFFFFF",
          "surface-dark": "#1A2235",
          border: "#E2E8F0",
          "border-dark": "#334155",
          text: "#1E293B",
          "text-dark": "#E2E8F0",
          "subtext": "#475569",
          "subtext-dark": "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

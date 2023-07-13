/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      background: "#111827",
      primary: "#132538",
      secondary: "#01b4e4",
      tertiary: "#90cea1",
      "neutral-100": "#f3f4f6",
      "neutral-200": "#e5e7eb",
      "neutral-400": "#9ca3af",
      "neutral-500": "#6b7280",
      "neutral-800": "#1f2937",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "6rem",
        xl: "10rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

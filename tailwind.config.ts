import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg": "#ffffff",
        "primary-text": "#1a1a1a",
        "dark-primary-bg": "#1a1a1a",
        "dark-primary-text": "#ffffff",
      },
      fontFamily: {
        heading: ["Karla", "sans-serif"],
        body: ["Inconsolata", "sans-serif"],
      },
      animation: {
        "spin-reverse": "spin-reverse 1s linear infinite",
        "fade-in": "fadeIn 0.3s ease-in forwards",
        wave: "wave 2s ease-in-out 1s",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(10deg)" },
          "75%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

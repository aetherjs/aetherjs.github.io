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
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

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
        // Light mode
        "primary-bg": "#ffffff",
        "primary-text": "#1a1a1a",
        // Dark mode
        "dark-primary-bg": "#1a1a1a",
        "dark-primary-text": "#ffffff",
      },
      fontFamily: {
        heading: ["Karla", "sans-serif"],
        body: ["Inconsolata", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

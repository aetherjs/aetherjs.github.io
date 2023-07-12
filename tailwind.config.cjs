/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        basteleur: ['Basteleur', 'sans serif'],
      },
    },
  },

  plugins: [],
};

module.exports = config;
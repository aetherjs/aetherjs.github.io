/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        basteleur: ['Basteleur', 'sans serif'],
        karla: ['Karla', 'sans serif'],
        inconsolata: ['Inconsolata', 'monospace']
      },
    },
  },

  plugins: [],
};

module.exports = config;

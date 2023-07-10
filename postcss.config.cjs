const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// This entire file came from adding Tailwind, thank you npx very cool!

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
};

module.exports = config;

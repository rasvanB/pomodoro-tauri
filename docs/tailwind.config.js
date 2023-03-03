/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./assets/bg.png')",
      },
    },
  },
  plugins: [],
};

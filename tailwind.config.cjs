const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Titan One"],
    },
    extend: {
      colors: {
        accent: "#F49729",
        primary: "#3C302E",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        special: "0.065em",
      },
    },
  },
  plugins: [],
};

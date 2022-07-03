const defaultTheme = require("tailwindcss/defaulttheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",

        ...defaultTheme.screens,
      },
    },

    screens: {
      xl: "1200px",
    },
  },
  plugins: [],
};

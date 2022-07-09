/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "500px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },

    colors: {
      yellow: "#bc9d50",
      brown: "#5c4f25",
      gray: "#343331",
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [],
};

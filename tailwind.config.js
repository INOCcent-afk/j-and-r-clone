/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "500px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [],
};

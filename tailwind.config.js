/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9C27B0",
        secondary: "#E1BEE7",
        accent: "#FFC107",
        gray1: "#BDBDBD",
        back: "#FFFFFF",
        gray2: "#757575",
      },
    },
  },
  plugins: [],
}


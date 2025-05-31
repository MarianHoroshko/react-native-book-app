/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#00bcff",
        secondary: "#fff",
        mainblue: {
          50: "#effaff",
          100: "#def4ff",
          200: "#b6eaff",
          300: "#75ddff",
          400: "#2cccff",
          500: "#00bcff",
          600: "#0092d4",
          700: "#0074ab",
          800: "#00628d",
          900: "#065174",
          950: "#04334d",
        },
      },
    },
  },
  plugins: [],
};

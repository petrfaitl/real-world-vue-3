/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "ui-sans-serif",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
        ],
      },
    },
  },
  plugins: [],
};

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
        sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "vue-slate": "#2c3e50",
        "vue-green": "#42b883",
        "vue-green-dark": "#33a06f",
        "vue-green-light": "#42d392",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#EFF0F1",
        "dark-grey": "#3C3C4399",
        dark: "#1F2029",
      },
      fontFamily: {
        display: ["SF Pro Display"],
        text: ["SF Pro Text"],
      },
    },
  },
  plugins: [],
};

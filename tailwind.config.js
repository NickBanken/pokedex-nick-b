/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#EFF0F1",
        grey: "#919698",
        "dark-grey": "#3C3C4399",
        dark: "#1F2029",
        app: "#F9F9F9",
      },
      fontFamily: {
        display: ["SF Pro Display"],
        text: ["SF Pro Text"],
      },
      fontSize: {
        large: "17px",
        normal: "15px",
      },
    },
  },
  plugins: [],
};

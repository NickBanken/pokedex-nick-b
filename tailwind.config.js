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
        water: "#4592C3",
        ghost: "#7B62A3",
        poison: "#BA7EC8",
        grass: "#95C24D",
        normal: "#A3ACAE",
        fire: "#FD7D25",
        flying: "#A890F0",
        bug: "#A8B820",
        electric: "#F8D030",
        ground: "#E0C068",
        fairy: "#EE99AC",
        fighting: "#C03028",
        psychic: "#F85888",
        steel: "#B8B8D0",
        ice: "#98D8D8",
        dragon: "#7038F8",
        rock: "#B8A038",
      },
      fontFamily: {
        display: ["SF Pro Display"],
        text: ["SF Pro Text"],
      },
      fontSize: {
        large: "17px",
        normal: "15px",
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(250px, 1fr))",
        cards: "repeat(auto-fit, minmax(335px, 1fr))",
      },
      boxShadow: {
        card: "0px 15px 15px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        slowSpin: {
          "0%": { transform: "rotate(0deg)" },
          "70%,100%": { transform: "rotate(720deg)" },
        },
      },
      animation: {
        "spin-slow": "slowSpin 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

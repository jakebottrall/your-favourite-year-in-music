/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(1turn)",
          },
        },
        "stroke-dash": {
          "0%": {
            "stroke-dasharray": "1, 200",
            "stroke-dashoffset": "0",
          },
          "50%": {
            "stroke-dasharray": "90, 200",
            "stroke-dashoffset": "-35px",
          },
          "100%": {
            "stroke-dasharray": "1, 200",
            "stroke-dashoffset": "-125px",
          },
        },
      },
    },
    animation: {
      "stroke-dash": "stroke-dash 1.5s ease-in-out both infinite",
      spin: "spin 2s linear both infinite",
    },
  },
  plugins: [],
};

module.exports = config;

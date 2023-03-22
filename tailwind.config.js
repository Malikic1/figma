/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "black",
        light: "white",
        golden: "orange",
        whitesmoke: "grey",
        goldensmoke: "rgba(179, 151, 81, 0.522)",
        smoke: "rgba(255, 255, 255, 0.322)",
        wine: "rgba(36, 11, 11, 0.305)",
        royal: "rgb(23, 61, 175)",
        darkgrey: "rgb(30 30 30)",
      },
    },
  },
  plugins: [],
};

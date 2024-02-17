module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_b2: "#ffffffb2",
          A700_99: "#ffffff99",
          A700: "#ffffff",
        },
        black: { 900: "#000000", "900_7f": "#0000007f", "900_cc": "#000000cc" },
        orange: { 200: "#ffcc70", "200_33": "#ffcc7033" },
        gray: { 500: "#a5a5a5" },
        indigo: { A200_01: "#527ff6", A200: "#4270ec", "500_33": "#4158d033" },
        purple: { "300_33": "#c850c033", A100: "#e16dd9" },
        blue: { 50: "#ecf0fc" },
        deep_orange: { 600: "#f15a2b" },
        yellow: { 700: "#f0bb1f" },
        blue_gray: { 800: "#394149" },
        cyan: { 900: "#006380" },
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#4158d033,#c850c033,#ffcc7033)",
        gradient1: "linear-gradient(150deg ,#527ff6,#e16dd9,#ffcc70)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

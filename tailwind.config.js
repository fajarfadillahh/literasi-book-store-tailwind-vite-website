module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1024px",
    },
    fontFamily: {
      title: ["Source Serif Pro", "serif"],
      text: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      text: "185%",
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#5bf0d9",
        brandPurple: "#c337f6",
        brandOrange: "#F17950",
        dark: "#1d1d1d",
        darker: "#181818",
        lighter: "#2b2b2b",
      },
      fontFamily: {
        mark: ["Marck Script", "cursive"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
      animation: {
        crash: "crash 0.8s ease-in-out 1",
        wiggle: "wiggle 1.25s ease-in-out infinite",
      },
      keyframes: {
        crash: {
          "0%": {
            transform: "scale(1,1)",
          },
          "45%": {
            transform: "scale(1.25,0.75)",
          },
          "50%": {
            transform: "scale(0.85,1.25)",
          },
          "65%": {
            transform: "scale(1.18,0.9)",
          },
          "75%": {
            transform: "scale(0.9, 1.05)",
          },
          "87%": {
            transform: "scale(1.02,0.98)",
          },
          "90%": {
            transform: "scale(1, 1)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-1rem)",
          },
        },
      },
    },
    safelist: ["animate-crash", { pattern: /(w|h|bg|text|border)-./ }],
  },
  plugins: [],
};

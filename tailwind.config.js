/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "475px",
        md: "650px",
      },

      colors: {
        brandGreen: "#5bf0d9",
        brandPurple: "#c337f6",
        brandOrange: "#F17950",
        dark: "#1d1d1d",
        darker: "#181818",
        lighter: "#2b2b2b",
        lightest: "#8d8d8d",
      },
      fontFamily: {
        mark: ["Marck Script", "cursive"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
      animation: {
        crash: "crash 0.8s ease-in-out 1",
        wiggle: "wiggle 1.1s ease-in infinite",
        fadeIn: "fadeIn 0.8s ease-in-out 1",
        rotateIn: "rotateIn 0.8s ease-in-out 1",
        appear: "appear 0.6s ease-in-out 1",
      },
      keyframes: {
        crash: {
          "0%": {
            transform: "scale(1,1)",
          },
          "45%": {
            transform: "scale(1.3,0.75)",
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
          "100%": {
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
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "40%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        rotateIn: {
          "0%": {
            transform: "rotate(-600deg)",
          },
          "70%": {
            transform: "rotate(0deg)",
          },
        },
        appear: {
          "0%": {
            transform: "translateX(120%) ",
            fontSize: "0px",
            padding: "0",
            marginTop: "0",
            marginBottom: "0",
          },
          "30%": {
            margin: "15px",
            fontSize:"16px"
          },
          "70%": {
            transform: "translateX(-30%)",
          },
          "100%":{
            transform: "translateX(0)",
            marginTop: "6px",
            marginBottom: "6px",
          }
        },
      },
    },
    safelist: ["animate-crash", { pattern: /(w|h|bg|text|border)-./ }],
  },
  plugins: [],
};

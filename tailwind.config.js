/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: '#83D1c4',
        brandPurple: '#c337f6',
        brandOrange: '#F17950',
        dark: '#1d1d1d',
        darker: '#181818',
        lighter: '#2b2b2b'
      },
    },
  },
  plugins: [],
};

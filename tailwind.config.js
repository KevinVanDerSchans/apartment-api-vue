/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          navbar: '#38b2a4',
          navbarLinks: '#e3ebea',
          green700: '#009483',
          grey300: '#B5B1B0',
          black500: '#252525',
        }
      }
    },
  },
  plugins: [],
}


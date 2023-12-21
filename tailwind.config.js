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
          500: '#009483',
          grey300: '#B5B1B0',
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple':"#352f5b",
        'custom-purple2':"rgba(0, 0, 0, .2)",
        'custom-purple3':"#423a6f",
        'custom-white':"#F8F9FA",
      },
    },
  },
  plugins: [],
}


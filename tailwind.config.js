/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
            primary : "#E52020",
            secondary :"#FFEFC8"
        }
      },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
  }
  
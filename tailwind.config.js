/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09507B',
        secondary: '#0E78B9',
        tertiary: '#ecf4f9',
        quaternary: '#506683',
      },
    },
  },
  plugins: [

  ],
}


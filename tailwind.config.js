/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      spacing: {
        '42px': '42px'
      },
      colors: {
        primary: '#16538E'
      }
    },
  },
  plugins: [],
}


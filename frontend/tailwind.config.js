/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '90': '38rem',
        '128':'40rem',
        '130': '43rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}


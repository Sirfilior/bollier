/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Forum', 'cursive'],
        body: ['Montserrat', 'serif'],
        special: ['Rufina', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

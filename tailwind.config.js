/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // Using modern `hsl`
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
      grayish: 'hsl(var(--color-grayish) / <alpha-value>)',
      darkgrayish: 'hsl(var(--color-darkgrayish) / <alpha-value>)',
      darkblue: 'hsl(var(--color-darkblue) / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}

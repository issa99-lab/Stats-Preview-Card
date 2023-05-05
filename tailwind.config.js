/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    screens: {
      'sm': '370px',
      'md': '690px',
      'lg': '1024px',
    },
    fontFamily: {
      inter: ['sans-serif'],
      Montserrat: ['sans-serif'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      white: '#ffffff',
      whitish: 'hsla(0, 0%, 100%, 0.75)',
      stats: 'hsla(0, 0%, 100%, 0.6)',
      main: 'hsl(233, 47%, 7%)',
      card: 'hsl(244, 38%, 16%)',
      violet: 'hsl(277, 64%, 61%)'
    },
  },

  plugins: [],
}


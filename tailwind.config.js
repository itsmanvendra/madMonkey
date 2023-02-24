/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '750px',
      lg: '1024px',
      xl: '1430px'
    },
     fontFamily: {
      display: ['Prompt', 'sans-serif'],
      xyz: ['Montserrat',  'sans-serif'],
    },
    extend: {
      colors: {
        bgBlack: '#000212',
        btnStart: 'rgb(225, 70, 124)',
        btnEnd: '#205284',
        headingCol: '#FFFF00',
        cardCol: '#E63946',
        lightBlack: '#00000080',
      },
    },
  },
  plugins: [],
}

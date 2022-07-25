/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', ' ./assets/**/*.{html,js,}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
      },
      colors: {
        'imcol': {
          100 : '#2B2B2B',
          200 : 'rgba(43, 43, 43, 0.45)',
          300 : '#8B74EB',
          400 : '#FFA4DA',
          500 : 'rgba(255, 255, 255, 0.7)',
          600 : '#121212',
        },
        'imgrad': {
          100 : '#524FD0',
          200 : '#B0AEFB',
          300 : '#AAA8FA',
          
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

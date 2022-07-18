/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', ' ./assets/**/*.{html,js,}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
      },
      colors: {
        'imcolor': {
          100 : '#2B2B2B',
          200 : 'rgba(43, 43, 43, 0.45)',
          300 : '#8B74EB',
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

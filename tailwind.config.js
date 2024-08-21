/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      flex: {
        '2': '2 1 0',
        '3': '3 1 0',

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addUtilities }) {
      const newUtilities = {
        '@media screen and (max-width: 1290px) and (min-width: 768px)': {
          '.hidden-1290-668': {
        
            display:'none !important',
          },
          '.visible-1290-668': {
           
            display:'flex !important',
          },
          '.paddingleft-1290-668': {
                       paddingLeft:'0.5rem !important',
          },
          
          
        },
      };

      addUtilities(newUtilities);
    },
  ],
}


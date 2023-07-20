/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
      container:{
        center: 'true',
        padding: '15px'
      },
      extend:{
        colors:{
          primary: '#D82148',
          secondary: '#E5E5E5',
          dark:'#151D3B',
          light:'#F5EFEF'
        },
        screens:{
          '2xl': '1320px'
        }
      }
  },
  plugins: [],
}


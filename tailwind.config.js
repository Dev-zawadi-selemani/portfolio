/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl': '1536px'
    },
    colors: {
        'mainColor' : '#d1d9df',
        'orangeColor' : '#ff7b00ea',
        'blueColor' : '#10375c',
        'linearGradien' : 'linear-gradient(8deg, rgba(8,52,83,1) 0%, rgba(0,230,173,1) 41%, rgba(41,17,4,1) 100%)'
    },
    extend: {
      
    },
  }
  // plugins: [
  //   plugin(function({ addComponents }) {
  //     addComponents({
  //       '.btn': {
  //         padding: '.5rem 1rem',
  //         borderRadius: '.25rem',
  //         fontWeight: '600',
  //       },
  //       '.btn-blue': {
  //         backgroundColor: '#3490dc',
  //         color: '#fff',
  //         '&:hover': {
  //           backgroundColor: '#2779bd'
  //         },
  //       },
  //       '.btn-red': {
  //         backgroundColor: '#e3342f',
  //         color: '#fff',
  //         '&:hover': {
  //           backgroundColor: '#cc1f1a'
  //         },
  //       },
  //     })
  //   })
  // ],
}


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend:{
        colors: {
            aqua: {
                600: '#48CAE4',
                450:'rgba(72, 202, 228,0.3)'
            },
            gray: {
                850: '#595C5F',
                950: '#181818'
            },
            white: {
                50: '#FFFFFF',
            }
        },
      
        fontFamily: {
            poppins: ['Poppins', 'sans-serif']
        },
        fontWeight: {
            black: '900',
            semiBold: '600',
            medium: '500',
            regular: '400',
            light:'300',
            extralight:'100'
        },
        backgroundImage: {
           100: 'linear-gradient(90deg, #181818 0%, #252627 100%)',  
        },
        boxShadow:{
            btn:'-1px -1px 0px rgba(89, 92, 95, 0.25), 6px 10px 5px rgba(24, 24, 24, 0.25), 1px 1px 4px rgba(89, 92, 95, 0.2)'
        },
        screens:{
            'mb':{'max':'768px'}
        },
        spacing:{
            '84':'22rem',
            '86':'23rem',
            '17':'4.3rem'
        }
      }
    
},
  variants: {
    extend: {},
  },
  plugins: [],
}

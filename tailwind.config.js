/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form': "url('/images/Get_in_touch.png')",
      },
      colors:{
        'white': '#FCFBFA',
        'black': '#27272A',
        'greydark': '#696969',
        'greylight': '#E5E7EB',
        'lavanda': "#7E3AF2",
      },
      fontFamily:{
        Mont: ["Montserrat", 'sans-serif']
      },
      boxShadow:{
        '3xl': '0px 0px 0px 3px #CABFFD'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form': "url('/public/images/Get_in_touch.png')",
        'person': "url('/public/images/Person.png)",
      },
      colors:{
        'white': '#FCFBFA',
        'black': '#27272A',
        'greydark': '#696969',
        'greylight': '#E5E7EB'
      },
      fontFamily:{
        Mont: ["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}
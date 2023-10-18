/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**.html",
    "./src/*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'roboto':'Roboto',
        'poppins': ['Poppins','Padauk']
        },
    },
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
  },
  plugins: [],
}
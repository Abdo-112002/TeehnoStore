/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : "800px",
      colors: {
        blackColor: '#191C1F',
        textColor: '#5F6C72',
        grayColor: '#929FA5',
        dangerColor: '#EE5858',
        wornColor: '#EFD33D',
        successColor: '#2DB224',
        primaryColor: '#2DA5F3',
        orangeColor: '#FA8232',
        mainColor: '#1B6392',
      },
    },
  },
  plugins: [],
}
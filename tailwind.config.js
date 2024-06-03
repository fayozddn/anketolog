const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {
      backgroundImage: {
        'bg_img': "url('./images/bg_img.png')",
      },
      colors: {
        'dark_blue': '#34495E',
        'light_blue': '#2D9CDB',
        'red': '#EF4744',
        'dark_gray': '#E0E0E0',
        'gray': '#333',
        'light_gray': '#e0e0e0',
      },
    },
  },
  plugins: [],
});














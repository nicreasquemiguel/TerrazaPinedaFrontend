// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  safelist: [
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../public/terraza/IMG_4025.jpg')",
        
      },
      colors: {
        'redo': '#f12711',
        'oranger': '#f5af19',
        'purpleb': '#8E2DE2',
        'bluep': '#4A00E0',
        'skyp': '#12c2e9',
        'pinkp': '#c471ed',
        'fush': '#f64f59'
      },
    },
    container: {
      center: true,
    },
    // screens: {
    //   'xxs': '340px', // min-width
    // },

  },
  plugins: [
    require('flowbite/plugin')
]
}
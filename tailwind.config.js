/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '240px',
      // => @media (min-width: 240px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // primary
        'Very-dark-blue': '#070439',
        'Desaturated-blue': 'hsl(238, 22%, 44%)',

        // Accent
        'Bright-Blue': 'hsl(224, 93%, 58%)',
        'Moderate-Cyan': 'hsl(170, 45%, 43%)',

        // Neutral
        'Light-Grayish-Blue': 'hsl(240, 75%, 98%)',
        'Light-Gray': 'hsl(0, 0%, 75%)',
      },

      backgroundImage: {
        'mobile-size': "url('./images/bg-curve-mobile.svg')",
        'desktop-size': "url('./images/bg-curve-desktop.svg')",
      },
    },
  },
};

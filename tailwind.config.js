/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      xs: { min: "220", max: "320px" },
      sm: { min: "321px", max: "1023px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "1024px", max: "1536px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      // lg: { min: "1024px", max: "1279px" },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // xl: { min: "1280px", max: "1535px" },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1536px" },
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // primary

        "Very-dark-blue": "#070439",
        "Desaturated-blue": "hsl(238, 22%, 44%)",

        // Accent

        "Bright-Blue": "hsl(224, 93%, 58%)",
        "Moderate-Cyan": "hsl(170, 45%, 43%)",

        // Neutral
        "Light-Grayish-Blue": "hsl(240, 75%, 98%)",
        "Light-Gray": "hsl(0, 0%, 75%)",
      },

      backgroundImage: {
        "mobile-size": "url('./images/bg-curve-mobile.svg')",
        "desktop-size": "url('./images/bg-curve-desktop.svg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // primary

        "Very-dark-blue": "#070439",
        "Desaturated-blue": "hsl(238, 22%, 44%)",

        // Accent

        "Bright-Blue": "hsl(224, 93%, 58%)",
        "Moderate Cyan": "hsl(170, 45%, 43%)",

        // Neutral
        "Light Grayish Blue": "hsl(240, 75%, 98%)",
        "Light Gray": "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],

  body: {
    // paragraph
    "font size": "16px",
  },
  fonts: {
    // headings,call-to-action, header navigation
    "font-family": "'Raleway', sans-serif",

    // Body

    "font-family": "'Open Sans', sans-serif",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      tablet: { max: "991px", min: "768px" },
      // => @media (max-width: 991px) { ... }
      desktop: { max: "1231px", min: "992px" },
      // => @media (max-width: 1231px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ["FONT_NAME", "system-ui", "sans-serif"],
        secondary: ["FONT_NAME_2", "system-ui", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.3125rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.6875rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
      },
      colors: {
        primary: "#5952e4",
        secondary: {
          gray: "#eeeff6",
          dark: "#24242a",
        },
        message: "#f4f4f4",
      },
    },
  },
  plugins: [],
};

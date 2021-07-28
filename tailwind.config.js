module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff9f4",
          100: "#fef2e9",
          200: "#fee0c9",
          300: "#fdcda8",
          400: "#fba766",
          500: "#f98125",
          600: "#e07421",
          700: "#bb611c",
          800: "#954d16",
          900: "#7a3f12",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

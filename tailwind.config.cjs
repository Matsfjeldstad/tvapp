/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#111111",
        "primary-grey": "#202020",
        "primary-lightGrey": "#393939"
      }
    },
  },
  plugins: [],
};

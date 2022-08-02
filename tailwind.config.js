module.exports = {
  plugins: [
    require("@tailwindcss/typography")
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Inter'
      },
      colors: {
        'yellowish': '#726012'
      }
    },
  },
}

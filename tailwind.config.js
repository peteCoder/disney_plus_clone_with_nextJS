module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home": "url('/images/background.png')"
      })
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}

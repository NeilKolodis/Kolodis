export default {
  darkMode: 'class', // 👈 IMPORTANT
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#334155",
        accent: "#2563EB",

        darkBg: "#020617",
        darkCard: "#020617",
        darkText: "#E5E7EB",
      },
    },
  },
  plugins: [],
}

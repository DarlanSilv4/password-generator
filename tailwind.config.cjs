module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0e0d12',
        'foreground': '#24232b',
        'green': '#a3ffae',
        'red': '#f64a4a',
        'orange': '#fb7c58',
        'yellow': '#f8cd65',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace']
      },
    },
  },
  plugins: [],
}
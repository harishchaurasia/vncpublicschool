/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#64B6AC',
        'brand-dark': '#4a9990',
        darkGreen: '#64B6AC',
        accent: '#F59E0B',
        'accent-dark': '#D97706',
        'accent-light': '#FEF3C7',
        energy: '#EA580C',
        'energy-light': '#FFF7ED',
        spark: '#FBBF24',
        surface: '#F8FAFC',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'cursive': ['New Rocker', 'cursive'],
        'display': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

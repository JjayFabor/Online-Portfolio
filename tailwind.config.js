/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
        },
      },
      animation: {
        fall: 'fall linear infinite',
      },
    },
  },
  plugins: [],
}

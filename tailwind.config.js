/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backimage': "url('/assets/Tumblr.gif')",
        'aboutbg': "url('/assets/smoke.gif')",
      },
      scale: {
        '-100': '-1',
    }
    },
  },
  plugins: [],
}


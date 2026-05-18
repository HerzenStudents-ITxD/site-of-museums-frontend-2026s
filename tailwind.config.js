/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        museum: {
          paper: '#ffffff',
          ink: '#003896',
          muted: '#949494',
          line: '#d9d9d9',
          blue: '#003896',
          dark: '#003896',
        },
      },
    },
  },
  plugins: [],
};

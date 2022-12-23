/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3a526a',

          secondary: '#2e363a',

          accent: '#1d2738',

          neutral: '#1B1F27',

          'base-100': '#FBF9FB',

          info: '#4DABEA',

          success: '#228C4E',

          warning: '#D6770A',

          error: '#F03D6C',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        'extra-bold': 800,
        bold: 700,
        regular: 400,
        light: 200,
      },
      colors: {
        'dark-green': '#438997',
        'light-blue': '#8CCEDC',
        'dull-blue': '#81A7AE',
        'white-blue': '#DEEDF0',
        'strong-green': '#2DB742',
        'swamp-green': '#68C482',
        'forest-green': '#029E7D',
        yellow: '#F0DF7D',
        red: '#ff8282 ',
        'yellow-green': '#8CE88F',
        'lemon-green': '#AEFA94',
        'gray-1': '#DDDDDD',
        'gray-2': '#CCCCCC',
        'gray-3': '#BBBBBB',
        'gray-4': '#AAAAAA',
        'gray-5': '#999999',
        'gray-6': '#888888',
        'gray-7': '#777777',
        'gray-8': '#666666',
        'gray-9': '#555555',
        'gray-10': '#444444',
        'gray-11': '#333333',
        'gray-12': '#222222',
      },
      fontSize: {
        h1: '64px',
        h2: '48px',
        h3: '36px',
        h4: '28px',
        h5: '24px',
        h6: '20px',
        base: '16px',
        sm: '14px',
        xs: '12px',
      },
      lineHeight: {
        h1: '75px',
        h2: '60px',
        h3: '48px',
        h4: '36px',
        h5: '30px',
        h6: '24px',
      },
      maxWidth: {
        320: '320px',
        440: '440px',
        540: '540px',
        640: '640px',
        720: '720px',
        840: '840px',
      },
      maxHeight: {
        740: '740px',
      },
      width: {
        140: '140px',
        220: '220px',
        248: '248px',
        335: '335px',
        320: '320px',
        540: '540px',
        640: '640px',
      },
    },
  },
  plugins: [
    // Agrega el plugin de fuentes personalizadas de Tailwind CSS
    require('@tailwindcss/typography'),
  ],
};

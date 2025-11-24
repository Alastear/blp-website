/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        inknutAntiqua: ["Inknut Antiqua", "serif"],
        ibm: ["IBM Plex Sans Thai", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite', // 2 seconds per rotation
        'spin-fast': 'spin 0.5s linear infinite', // 0.5 seconds per rotation
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      about: '2.5rem',
    },
  },
  plugins: []
}


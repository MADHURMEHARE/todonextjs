/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pink-purple': 'linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #7c3aed 100%)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in': {
          'from': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}

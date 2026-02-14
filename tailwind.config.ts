const config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        'dark-bg': '#0B0F19',
        'dark-bg-lighter': '#071018',
        'cyan-glow': '#00D9FF',
        'cyan-dark': '#00A3CC'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B0F19 0%, #071018 100%)'
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 217, 255, 0.5)',
        'glow-cyan-lg': '0 0 50px rgba(0, 217, 255, 0.3)',
        'glow-sm': '0 0 15px rgba(0, 217, 255, 0.2)'
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in': 'slide-in 0.5s ease-out'
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 50px rgba(0, 217, 255, 0.7)' }
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;

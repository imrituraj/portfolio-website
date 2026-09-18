/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FFFDF5',
          cream: '#FFF9E6',
          darkBg: '#121212',
          cardDark: '#1E1E1E',
          yellow: '#FFE600',
          cyan: '#00F0FF',
          green: '#99FF33',
          pink: '#FF5E7E',
          purple: '#B794F4',
          orange: '#FF7B00',
          blue: '#4D96FF',
          border: '#000000',
        }
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo': '4px 4px 0px 0px #000000',
        'neo-md': '5px 5px 0px 0px #000000',
        'neo-lg': '7px 7px 0px 0px #000000',
        'neo-xl': '10px 10px 0px 0px #000000',
        'neo-dark': '4px 4px 0px 0px #FFE600',
        'neo-dark-lg': '7px 7px 0px 0px #FFE600',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};

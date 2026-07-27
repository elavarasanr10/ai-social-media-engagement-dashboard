/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        ink: { 950: '#05080f', 900: '#0a0f1c', 850: '#0d1424', 800: '#111a2e' },
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        growBar: { '0%': { transform: 'scaleY(0)' }, '100%': { transform: 'scaleY(1)' } },
        pulseGlow: { '0%, 100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
      },
      animation: {
        fadeUp: 'fadeUp .55s cubic-bezier(.22,1,.36,1) both',
        growBar: 'growBar .9s cubic-bezier(.22,1,.36,1) both',
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

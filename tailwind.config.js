/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#030712',
          card: '#111827',
          elevated: '#1a2234',
        },
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
        },
        accent: {
          DEFAULT: '#22D3EE',
          light: '#67E8F9',
        },
        muted: '#6B7280',
        border: '#1F2937',
        'border-light': '#374151',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #6366F120 0px, transparent 50%), radial-gradient(at 80% 0%, #8B5CF620 0px, transparent 50%), radial-gradient(at 0% 50%, #22D3EE15 0px, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, #111827 0%, #1a2234 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #6366F140' },
          '50%': { boxShadow: '0 0 40px #6366F180' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'card': '0 0 0 1px #1F2937, 0 4px 24px #00000060',
        'card-hover': '0 0 0 1px #374151, 0 8px 40px #00000080, 0 0 40px #6366F115',
        'glow': '0 0 30px #6366F140',
        'glow-accent': '0 0 30px #22D3EE40',
        'inner-glow': 'inset 0 1px 0 #ffffff08',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

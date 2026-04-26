/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
      maxWidth: {
        '8xl': '90rem',   // 1440px
        '9xl': '96rem',   // 1536px
        '10xl': '104rem', // 1664px
        '11xl': '112rem', // 1792px
        'screen-2xl': '95vw', // 95% of viewport width for very large screens
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
      },
      colors: {
        // Primary Dark Theme Colors (from Figma App)
        "mind-black": "#000000",
        "mind-navy": "#0A081A",
        "mind-deep-purple": "#1A0A2E",
        "mind-purple": "#50005C",
        "mind-violet": "#6D5FF7",
        "mind-violet-light": "#8B7FFF",
        "mind-lavender": "#BDA8F3",
        "mind-blue": "#288DFF",
        // Legacy colors kept for compatibility
        "indigo-night": "#2A1A6F",
        "tranquil-violet": "#6C4DC1",
        "soft-lavender": "#BDA8F3",
        "mindful-aqua": "#9FE7E4",
        "primary-blue": "#3652E3",
        // Supporting Neutrals
        "mist-grey": "#F5F6FA",
        "soft-charcoal": "#444444",
        // Dark theme surface colors
        "surface-dark": "#0D0B1A",
        "surface-card": "rgba(255, 255, 255, 0.05)",
        "surface-card-hover": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        wix: ['"Wix Madefor Text"', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/hero-bg.svg')",
        'mind-gradient': 'linear-gradient(180deg, #000000 0%, #0A081A 30%, #1A0A2E 60%, #50005C 100%)',
        'mind-gradient-subtle': 'linear-gradient(180deg, #0A081A 0%, #1A0A2E 50%, #2A1040 100%)',
        'mind-gradient-card': 'linear-gradient(135deg, rgba(109, 95, 247, 0.1) 0%, rgba(80, 0, 92, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

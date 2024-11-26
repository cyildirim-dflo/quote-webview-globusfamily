/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./main.css"],
  theme: {
    extend: {
      colors: {
        primary: "#691B16",
        secondary: "#1E1E1E",
        accent: "#EAE8E8",
        border: "#00174454",
        accentalt: "#333333"
      },
      fontFamily: {
        sans: ["Open Sans Variable", "sans-serif"],
        serif: ["Cardo", "serif"],
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'lg': '16px',
        'xl': '22px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': ['38px', '38px'],
        '5xl': ['67px', '67px'],
        '6xl': ['72px', '72px'],
      },
      backgroundImage: {
        'hero-image': "url('/assets/hero-image.jpg')",
      },
      height: {
        '90svh': '80svh',
        '80svh': '80svh',
        '70svh': '70svh',
        '60svh': '60svh',
      },
      maxHeight: {
        '90svh': '90svh',
        '80svh': '80vh'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}; 
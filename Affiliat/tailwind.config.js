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
        // Red theme
        'red-primary': '#ef4444',
        'red-hover': '#dc2626',
        'red-light': '#fef2f2',
        // Blue theme
        'blue-primary': '#3b82f6',
        'blue-hover': '#2563eb',
        'blue-light': '#eff6ff',
        // Green theme
        'green-primary': '#10b981',
        'green-hover': '#059669',
        'green-light': '#ecfdf5',
        // Purple theme
        'purple-primary': '#8b5cf6',
        'purple-hover': '#7c3aed',
        'purple-light': '#f5f3ff',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 4px 6px -1px rgba(255, 255, 255, 0.05), 0 2px 4px -1px rgba(255, 255, 255, 0.03)',
        'card-hover-dark': '0 10px 15px -3px rgba(255, 255, 255, 0.05), 0 4px 6px -2px rgba(255, 255, 255, 0.025)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


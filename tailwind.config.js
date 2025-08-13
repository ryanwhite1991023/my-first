/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2563eb',
        'secondary-color': '#1e40af',
        'accent-color': '#3b82f6',
        'text-primary': '#1f2937',
        'text-secondary': '#6b7280',
        'text-light': '#9ca3af',
        'bg-primary': '#ffffff',
        'bg-secondary': '#f9fafb',
        'bg-accent': '#f3f4f6',
        'border-color': '#e5e7eb',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}


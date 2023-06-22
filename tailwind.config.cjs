/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'text-light': '#0e0609',
      'background-light': '#efdce2',
      'primary': '#be7c6f',
      'secondary': '#f9f6f1',
      'accent-light': '#89703e',
      'text-dark': '#f0f9f6f1',
      'background-dark': '#1F2937',
      'secondary-dark': '#100f0e',
      'accent-dark': '#796c52',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite-typography'),
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp")
  ],
};

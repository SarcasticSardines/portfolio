const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mymidnightblue' : 'rgba(43, 45, 128, 1)',
        'softlightlilac' : 'rgba(219, 227, 251, 1)',
        'lightmidnightblue' : 'rgba(50, 53, 173, 1)'
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};

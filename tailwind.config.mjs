/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "hsl(12, 6.5%, 15.1%)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        bounced: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateX(-40px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
        bounced: "bounced 4s infinite",
      },
    },
  },
  plugins: [animations],
};

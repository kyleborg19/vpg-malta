/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "vpg-malta": "url('/src/assets/vpgmalta.png')",
        facebook: "url('/src/assets/facebook.svg')",
        instagram: "url('/src/assets/instagram.svg')",
        twitter: "url('/src/assets/twitter.svg')",
      },
      fontFamily: {
        alex: "Alexandria, sans-serif",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(80px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { opacity: 1 },
        },
        "fade-down": {
          "0%": { opacity: 0, transform: "translateY(-80px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { opacity: 1 },
        },
        "move-down": {
          "0%": { transform: "translateY(-40px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade 2s ease-in-out",
        "fade-up": "fade-up 2s ease-in-out",
        "fade-down": "fade-down 2s ease-in-out",
        "move-down": "move-down 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        "text-reveal-down" : {
          "0%": {
            transform: "translate(0, 100%)",
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1
          }
        },
        "text-reveal-up" : {
          "0%": {
            transform: "translate(0, -100%)",
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1
          }
        },
        "text-reveal-right" : {
          "0%": {
            transform: "translate(-100%, 0)",
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1
          }
        },
        "text-reveal-left" : {
          "0%": {
            transform: "translate(100%, 0)",
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [],
}


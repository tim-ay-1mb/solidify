/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ["Courier", "monospace"]
      },
      colors: {
        primary: {
          "50": "#e1f5fe",
          "100": "#b3e5fc",
          "200": "#81d4fa",
          "300": "#4fc3f7",
          "400": "#29b6f6",
          "500": "#03a9f4",
          "600": "#039be5",
          "700": "#0288d1",
          "800": "#0277bd",
          "900": "#01579b"
        }
      },
      animation: {
        typing: 'typing 2.5s steps(6, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '5ch' },
          '100%': { width: '11ch' },
        },
        'blink-caret': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'initial' },
        },
      },
    }
  },
  plugins: []
};

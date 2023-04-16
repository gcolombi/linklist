/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    future: {
        hoverOnlyWhenSupported: true
    },
    theme: {
        extend: {
            fontFamily: {
                primary: ["var(--font-spaceMono)", "system-ui", "sans-serif"],
                secondary: ["var(--font-inter)", "system-ui", "sans-serif"]
            },
        }
    },
    plugins: []
}
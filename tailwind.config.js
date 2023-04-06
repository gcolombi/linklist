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
        extend: {}
    },
    plugins: []
}
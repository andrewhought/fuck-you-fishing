/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#231f20",
                white: "#f0eeee",
            },
            fontFamily: {
                teko: ["Teko", "sans-serif"],
                hurricane: ["Rock Salt", "cursive"]
            }
        }
    },
    plugins: []
};

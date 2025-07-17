/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}


// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{astro,html,js,ts}"],
    theme: {
        extend: {
            animation: {
                'fade-down': 'fadeDown 0.8s ease-out',
                'fade-up': 'fadeUp 0.8s ease-out',
            },
            keyframes: {
                fadeDown: {
                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

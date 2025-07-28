    // tailwind.config.js
    export default {
    content: ["./src/**/*.{astro,html,js,ts}"],
    safelist: ['card'],
    theme: {
        extend: {
        animation: {
            'fade-down': 'fadeDown 0.8s ease-out',
            'fade-up': 'fadeUp 0.8s ease-out',
            'bounce-down': 'bounceDown 1.5s infinite',
            'bounceOnce': 'bounceOnce 1.2s ease-out',
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
            bounceDown: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10px)' },
            },
            bounceOnce: {
            '0%': { transform: 'translateY(-10px)', opacity: 0 },
            '50%': { transform: 'translateY(4px)', opacity: 1 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
            },
        },
        },
    },
    plugins: [],
    };

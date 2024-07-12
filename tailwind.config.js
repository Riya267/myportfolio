/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1.5rem',
                    lg: '3.5rem',
                },
            },
            screens: {
                sm: '640px',
                md: '768px',      
                lg: '1024px'
            },
            fontFamily: {
                jetBrains: ["JetBrains Mono"],
            },
            fontWeight: {
                light: 300,
                regular: 400,
                bold: 700,
                regular_bold: 500,
            },
            gap: {
                desktop: '2rem',
                mobile: '1rem',
            },
        },
    },
    variants: {
        extend: {},
    },
}


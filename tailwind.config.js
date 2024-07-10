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
                robotoSlab: ["Roboto Slab"],
                openSans: ["Open Sans"],
                lato: ["Lato:ital"],
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
            margin: {
                xs: '1.625rem',
                small: '3.625rem',
                medium: '5rem',
                large: '6rem',
                XL: '7.5rem',
            },
            letterSpacing: {
                regular: '0.019rem',
                small: '0.00625rem',
            },
        },
    },
    variants: {
        extend: {},
    },
}


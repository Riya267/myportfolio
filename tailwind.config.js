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
                lg: '1024px',
            },
            colors: {
                white: {
                    100: '#ffffff',
                    200: '#fefcfc',
                },
                black: {
                    100: '#000000',
                    200: '#181818',
                    300: '#483248',
                },
                primary: {
                    100: '#E19898',
                    200: '#A2678A',
                    300: '#4D3C77',
                    400: '#3F1D38',
                    500: '#1e0f1b',
                },
                secondary: {
                    100: '#D4E8ED',
                    200: '#A0C9D2',
                    300: '#6BA8B6',
                    400: '#32789A',
                    500: '#005C81',
                },
                tertiary: {
                    100: '#F4F4F4',
                    200: '#C9C9C9',
                    300: '#7F7F7F',
                    400: '#454545',
                    500: '#2A2A2A',
                },            
                success: {
                    100: '#D2010D',
                    200: '#99D7DB',
                    300: '#4CBAC1',
                    400: '#4263EB',
                    500: '#1F8292',
                },
                error: {
                    100: '#FFF1E8',
                    200: '#FFC39B',
                    300: '#FF9650',
                    400: '#FF6905',
                    500: '#FF6905',
                },
                disabled: {
                    100: '#D6D6D6',
                    200: '#959392',
                    300: '#555859',
                    400: '#F3F3F3',
                    500: '#8B8989',
                },
            },
            fontFamily: {
                inter: ["Inter"],
                petitFormal: ["Petit Formal Script"],
                russonOne: ["Russon One"],
            },
            fontWeight: {
                light: 300,
                regular: 400,
                bold: 700,
                regular_bold: 700,
            },
            fontSize: {
                sm: '0.75rem',
                base: '1rem',
                l: '1.125rem',
                xl: '1.313rem',
                '2xl': '1.75rem',
                '3xl': '2.375rem',
                '4xl': '4rem',
            },
            lineHeight: {
                normal: '1',
                16: '1rem',
                24: '1.5rem',
                28: '1.75rem',
                32: '2rem',
                40: '2.5rem',
                72: '4.5rem',
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


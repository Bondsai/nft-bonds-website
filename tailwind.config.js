module.exports = {
    content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
    theme: {
        fontFamily: {
            'archivo': ['Archivo'],
        },
        screens: {
            'xxs': '310px',
            'xs': '500px',
            'sm': '660px',
            'md': '768px',
            'lg': '990px',
            'xl': '1320px',
            '2xl': '1536px',

            'max-xxs': {'max': '310px'},
            'max-xs': {'max': '500px'},
            'max-sm': {'max': '660px'},
            'max-md': {'max': '768px'},
            'max-lg': {'max': '990px'},
            'max-xl': {'max': '1320px'},
            'max-2xl': {'max': '1536px'},
        },

        extend: {
            colors: {
                'sol-gray': 'rgb(35, 39, 45)',
                'sol-gray-button-hover': 'rgb(55, 59, 65)',
                'sol-gray-button-focus': 'rgb(75, 79, 85)',
                'sol-gray-button-active': 'rgb(85, 89, 95)',
                'sol-green': 'rgb(122, 255, 170)',
                'sol-purple': 'rgb(152, 91, 256)',
                'sol-white': 'rgb(174, 185, 196)',
                'sol-sea' : 'rgb(85, 205, 234)',
                'sol-dark-blue': 'rgb(12, 27, 47)',
                'gray-inch': '#7e96b8',
                'solana-blue': 'rgb(128, 236, 255)',
                'dark-gray': '#131823',
            }
        },
    },
    plugins: [],
}
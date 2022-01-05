import {defineConfig} from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    content: ['./index.html','src/**/*.{html,js,css,tsx}'],
    // https://windicss.org/posts/v30.html#attributify-mode
    attributify: true,

    plugins: [
        typography({
            dark: true
        }),
        forms
    ],
    // theme: {
    //     backgroundColor: {
    //         dark: {
    //             backgroundColor: '#2f2f2f'
    //         }
    //     },
    //     extend: {
    //         typography: {
    //             DEFAULT: {
    //                 css: {
    //                     maxWidth: '65ch',
    //                     color: 'inherit',
    //                     a: {
    //                         'color': 'inherit',
    //                         'opacity': 0.75,
    //                         'fontWeight': '500',
    //                         'textDecoration': 'underline',
    //                         '&:hover': {
    //                             opacity: 1,
    //                             color: colors.teal[600],
    //                         },
    //                     },
    //                     b: {color: 'inherit'},
    //                     strong: {color: 'inherit'},
    //                     em: {color: 'inherit'},
    //                     h1: {color: 'inherit'},
    //                     h2: {color: 'inherit'},
    //                     h3: {color: 'inherit'},
    //                     h4: {color: 'inherit'},
    //                     code: {color: 'inherit'},
    //                 },
    //             },
    //         },
    //     },
    // },
})

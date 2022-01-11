import {defineConfig} from 'windicss/helpers'
// import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'
import lineClamp from 'windicss/plugin/line-clamp'


const markdownWrapperClasses = ['prose prose-sm', 'm-auto', 'text-left']

function range(size: number, startAt = 1) {
	return Array.from(Array(size).keys()).map(i => startAt * i + startAt)
}

// https://windicss.org/integrations/vite.html#safelist
function colorsSafeList(): string[] {
	let colors: string[]        = []
	const prefix                = ['bg-', 'text-']
	const colorsProps: string[] = ['pink', 'rose', 'red', 'orange', 'yellow', 'amber', 'lime', 'green', 'emerald',
	                               'teal', 'cyan', 'sky', 'blue', 'indigo', 'purple', 'violet', 'fuchsia', 'gray',
	                               'blue-gray', 'warm-gray', 'true-gray', 'light', 'dark']
	
	
	prefix.map(prefix => colorsProps.forEach(color => {
		const list = range(9, 100).map(i => `${prefix}${[color]}-${i}`)
		colors     = [...colors, ...list]
	}))
	
	
	return ['bg-white', 'bg-black', 'text-white', 'text-black', ...colors]
}

function marginsSafeList(): string[] {
	let margins: string[] = []
	const prefix          = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']
	
	prefix.map(prefix => range(9, 100).map(i => `${prefix}-{i}`))
	
	return margins
}

function paddingsSafeList(): string[] {
	let paddings: string[] = []
	const prefix           = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py']
	
	
	prefix.map(prefix => range(9, 100).map(i => `${prefix}-{i}`))
	
	return paddings
}

export default defineConfig({
	darkMode: 'class',
	// mode:     'jit',
	content: ['./index.html', 'src/**/*.{html,js,css,tsx}'],
	// https://windicss.org/posts/v30.html#attributify-mode
	attributify: true,
	
	safelist: [...colorsSafeList(), ...paddingsSafeList(), ...marginsSafeList(), ...markdownWrapperClasses],
	
	
	plugins: [
		typography({
			dark: true
		}),
		lineClamp,
		forms
	],
	theme:   {
		screens: {
			'xs':  '0px',
			'sm':  '576px',
			'md':  '768px',
			'lg':  '992px',
			'xl':  '1200px',
			'2xl': '1500px',
			'3xl': '1800px',
		},
	}
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

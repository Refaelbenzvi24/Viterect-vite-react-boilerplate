import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
import forms from 'windicss/plugin/forms'
import lineClamp from 'windicss/plugin/line-clamp'
import { transform } from 'windicss/helpers'


const markdownWrapperClasses = ['prose prose-sm', 'm-auto', 'text-left']

export default defineConfig({
	darkMode: 'class',
	content:  ['./index.html', 'src/**/*.{html,js,css,tsx}'],
	// https://windicss.org/posts/v30.html#attributify-mode
	attributify: true,

	// https://windicss.org/integrations/vite.html#safelist
	safelist: markdownWrapperClasses,


	plugins: [
		typography({
			dark: true
		}),
		lineClamp,
		forms,
		transform('daisyui'),
		transform('tailwindcss-flip')
	],

	daisyui: {
		styled: true,
		themes: true,
		base:   true,
		utils:  true,
		logs:   true,
		rtl:    false,
	},

	theme: {
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
})

module.exports = {
	darkMode: 'class',
	content: ['./index.html', 'src/**/*.{html,js,css,tsx}'],
	important: true,

	colors: {
		extend: {
			animation: {
				bounce200: 'bounce 1s infinite 200ms',
				bounce400: 'bounce 1s infinite 400ms',
			},
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require("daisyui"),
	],

	daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
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
		extend: {
			'background-color': '#ffffff',
		}
	}
}


// const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
	content: ['./index.html', 'src/main.tsx', 'src/styles/index.css', 'src/**/*.{html,js,jsx,ts,tsx,css}'],
	// content: ['./index.html','src/**/*.{html,js,css,tsx,jsx}'],
	important: true,
	// theme:  {
	//     screens: {
	//         'xs': '200px',
	//         'sm': '576px',
	//         'md': '768px',
	//         'lg': '992px',
	//         'xl': '1200px',
	//     },
	// },
	colors: {
		extend: {
			animation: {
				bounce200: 'bounce 1s infinite 200ms',
				bounce400: 'bounce 1s infinite 400ms',
			},
		},
	},
	//
	//     colors:  {
	//         primary:   {
	//             default:  'var(--ion-color-primary)',
	//             contrast: 'var(--ion-color-primary-contrast)',
	//             shade:    'var(--ion-color-primary-shade)',
	//             tint:     'var(--ion-color-primary-tint)',
	//         },
	//         secondary: {
	//             default:  'var(--ion-color-secondary)',
	//             contrast: 'var(--ion-color-secondary-contrast)',
	//             shade:    'var(--ion-color-secondary-shade)',
	//             tint:     'var(--ion-color-secondary-tint)',
	//         },
	//         tertiary:  {
	//             default:  'var(--ion-color-tertiary)',
	//             contrast: 'var(--ion-color-tertiary-contrast)',
	//             shade:    'var(--ion-color-tertiary-shade)',
	//             tint:     'var(--ion-color-tertiary-tint)',
	//         },
	//         light:     {
	//             default:  'var(--ion-color-light)',
	//             contrast: 'var(--ion-color-light-contrast)',
	//             shade:    'var(--ion-color-light-shade)',
	//             tint:     'var(--ion-color-light-tint)',
	//         },
	//         medium:    {
	//             default:  'var(--ion-color-medium)',
	//             contrast: 'var(--ion-color-medium-contrast)',
	//             shade:    'var(--ion-color-medium-shade)',
	//             tint:     'var(--ion-color-medium-tint)',
	//         },
	//         dark:      {
	//             default:  'var(--ion-color-dark)',
	//             contrast: 'var(--ion-color-dark-contrast)',
	//             shade:    'var(--ion-color-dark-shade)',
	//             tint:     'var(--ion-color-dark-tint)',
	//         },
	//         success:   {
	//             default:  'var(--ion-color-success)',
	//             contrast: 'var(--ion-color-success-contrast)',
	//             shade:    'var(--ion-color-success-shade)',
	//             tint:     'var(--ion-color-success-tint)',
	//         },
	//         warning:   {
	//             default:  'var(--ion-color-warning)',
	//             contrast: 'var(--ion-color-warning-contrast)',
	//             shade:    'var(--ion-color-warning-shade)',
	//             tint:     'var(--ion-color-warning-tint)',
	//         },
	//         danger:    {
	//             default:  'var(--ion-color-danger)',
	//             contrast: 'var(--ion-color-danger-contrast)',
	//             shade:    'var(--ion-color-danger-shade)',
	//             tint:     'var(--ion-color-danger-tint)',
	//         },
	//         step:      {
	//             '50':  'var(--ion-color-step-50)',
	//             '100': 'var(--ion-color-step-100)',
	//             '150': 'var(--ion-color-step-150)',
	//             '200': 'var(--ion-color-step-200)',
	//             '250': 'var(--ion-color-step-250)',
	//             '300': 'var(--ion-color-step-300)',
	//             '350': 'var(--ion-color-step-350)',
	//             '400': 'var(--ion-color-step-400)',
	//             '450': 'var(--ion-color-step-450)',
	//             '500': 'var(--ion-color-step-500)',
	//             '550': 'var(--ion-color-step-550)',
	//             '600': 'var(--ion-color-step-600)',
	//             '650': 'var(--ion-color-step-650)',
	//             '700': 'var(--ion-color-step-700)',
	//             '750': 'var(--ion-color-step-750)',
	//             '800': 'var(--ion-color-step-800)',
	//             '850': 'var(--ion-color-step-850)',
	//             '900': 'var(--ion-color-step-900)',
	//             '950': 'var(--ion-color-step-950)',
	//         },
	//     },
	// },
	// theme:        {
	//     extend: {
	//         fontWeight: ['hover', 'focus'],
	//         fontFamily: {
	//             sans: ['Inter var', ...defaultTheme.fontFamily.sans],
	//         },
	//     },
	// },
	// variants:     [],
	// experimental: {optimizeUniversalDefaults: true},
}


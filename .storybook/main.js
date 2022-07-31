const macrosPlugin = require('vite-plugin-babel-macros')
const AutoImport = require("unplugin-auto-import/vite")
const Icons = require('unplugin-icons/vite')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = {
	async viteFinal(config, { configType }) {
		config.plugins = [
			...config.plugins,
			macrosPlugin.default(),
			// https://github.com/antfu/unplugin-auto-import
			AutoImport({
				resolvers: [
					IconsResolver({
						prefix:    'Icon',
						extension: 'jsx'
					})
				],
				include:   [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.md$/, // .md
				],
				imports:   [
					{
						'axios':         [
							['default', 'http']
						],
						'react-i18next': ['useTranslation', 'initReactI18next']
					}
				],
				dts:       'src/auto-imports.d.ts',
			}),

			// https://github.com/antfu/unplugin-icons
			Icons({
				compiler:    'jsx',
				autoInstall: true,
			}),
		];

		return config;
	},
	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-dark-mode"
	],
	"framework": "@storybook/react",
	"core": {
		"builder": "@storybook/builder-vite"
	},
	"features": {
		"storyStoreV7": true
	}
}

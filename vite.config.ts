import * as path from 'path'
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import Markdown from 'vite-plugin-react-md'
import Inspect from 'vite-plugin-inspect'
import TsconfigPaths from 'vite-tsconfig-paths'
import replace from '@rollup/plugin-replace'
import istanbul from 'rollup-plugin-istanbul'
import { extendRoute, onRouteGenerate } from './router.config'
import highlightJs from 'highlight.js'


const ENV = (process.env.NODE_ENV || 'production')?.toString() as 'production' | 'development'

const pwaOptions: Partial<VitePWAOptions> = {
	mode:          ENV,
	base:          '/',
	includeAssets: ['favicon.svg'],
	manifest:      {
		name:        'PWA Router',
		short_name:  'PWA Router',
		theme_color: '#ffffff',
		icons:       [
			{
				src:   'favicon-192x192.png', // <== don't add slash, for testing
				sizes: '192x192',
				type:  'image/png',
			},
			{
				src:   '/favicon-512x512.png', // <== don't remove slash, for testing
				sizes: '512x512',
				type:  'image/png',
			},
			{
				src:     'favicon-512x512.png', // <== don't add slash, for testing
				sizes:   '512x512',
				type:    'image/png',
				purpose: 'any maskable',
			},
		],
	},
}

const replaceOptions = {
	__DATE__:          new Date().toISOString(),
	preventAssignment: true
}
const claims         = process.env.CLAIMS === 'true'

if (process.env.SW === 'true') {
	pwaOptions.strategies                                         = 'injectManifest'
	;(pwaOptions.manifest as Partial<ManifestOptions>).name       = 'PWA Inject Manifest'
	;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject'
}

if (claims) {
	pwaOptions.registerType = 'autoUpdate'
}

export default defineConfig(({ mode }) => ({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		}
	},

	plugins: [
		// https://github.com/vitejs/vite/tree/main/packages/plugin-react#vitejsplugin-react-
		React({
			fastRefresh: process.env.NODE_ENV !== 'test'
		}),

		// https://github.com/hannoeru/vite-plugin-pages
		Pages({
			pagesDir:   [
				{
					dir:       'src/pages',
					baseRoute: ''
				},
			],
			extensions: ['tsx', 'ts', 'js', 'md', 'mdx'],
			onRoutesGenerated(routes) {
				return onRouteGenerate(routes)
			},
			extendRoute(route: any, parent: any) {
				return extendRoute(route, parent)
			}
		}),

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

		// https://github.com/windicss/windicss
		WindiCSS(),

		// https://github.com/Leonewu/vite-plugin-react-md
		Markdown({
			markdownIt: {
				highlight: function (str: string, lang: string) {
					if (lang && highlightJs.getLanguage(lang)) {
						try {
							return '<pre class="language-' + lang + '">' +
								highlightJs.highlight(str, {
									language:       lang,
									ignoreIllegals: true
								}).value +
								'</pre>'
						} catch (__) {
						}
					}
					return ''
				}
			}
		}),


		replace(replaceOptions),

		// https://github.com/antfu/vite-plugin-inspect
		Inspect({ enabled: false, }),

		// https://github.com/nabla/vite-plugin-eslint#readme
		// EslintPlugin(),

		// https://github.com/aleclarson/vite-tsconfig-paths
		TsconfigPaths(),

		// https://github.com/antfu/vite-plugin-pwa
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'favicon.png',
				'robots.txt',
				'apple-touch-icon.png',
				'icons/*.svg',
				'fonts/*.woff2'
			],
			manifest: {
				theme_color: '#BD34FE',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		}),
		mode === 'test' &&
		istanbul({
			include: ['src/**/*.{ts,tsx}']
		})
	],

	build: {
		sourcemap:     process.env.SOURCE_MAP === 'true',
		outDir:        mode === 'test' ? './tests/dist' : './dist',
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("node_modules")) {
						if (id.includes("tsparticles")) {
							return "vendor_tsparticles"
						}
						if (id.includes("recoil")) {
							return "vendor_recoil"
						}
						if (id.includes("i18next")) {
							return "vendor_i18next"
						}
						if (id.includes("react")) {
							return "vendor_react"
						}

						return "vendor" // all other package goes here
					}
				},
			}
		}
	},

	server: {
		open: false, // open in browser on server start
		port: 8080,
		hmr:  {
			protocol: 'ws',
			port:     8080,
		},
		fs:   {
			strict: false,
		},
	},
}))

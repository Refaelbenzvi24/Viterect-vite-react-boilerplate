// noinspection AllyPlainJsInspection

import * as path from 'path'
import {defineConfig} from 'vite'
// import EslintPlugin from '@nabla/vite-plugin-eslint'
import React from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'
import Pages from 'vite-plugin-pages'
// Layouts
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-mdx'
import WindiCSS from 'vite-plugin-windicss'
import {ManifestOptions, VitePWA, VitePWAOptions} from 'vite-plugin-pwa'
// i18n react
import Inspect from 'vite-plugin-inspect'
// import Prism from 'markdown-it-prism'
import TsconfigPaths from 'vite-tsconfig-paths'
// import LinkAttributes from 'markdown-it-link-attributes'
import replace from '@rollup/plugin-replace'
import LinkAttributes from 'markdown-it-link-attributes'
import Prism from 'markdown-it-prism'
import {remarkMdxCodeMeta} from 'remark-mdx-code-meta';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left '


// TODO: generate favicons
const pwaOptions: Partial<VitePWAOptions> = {
	mode:          (process.env.VITE_ENV || 'production')?.toString() as 'production' | 'development',
	base:          '/',
	includeAssets: ['favicon.svg'],
	manifest:      {
		name:        'PWA Router',
		short_name:  'PWA Router',
		theme_color: '#ffffff',
		icons:       [
			{
				src:   'pwa-192x192.png', // <== don't add slash, for testing
				sizes: '192x192',
				type:  'image/png',
			},
			{
				src:   '/pwa-512x512.png', // <== don't remove slash, for testing
				sizes: '512x512',
				type:  'image/png',
			},
			{
				src:     'pwa-512x512.png', // <== don't add slash, for testing
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
const reload         = process.env.RELOAD_SW === 'true'

if (process.env.SW === 'true') {
	pwaOptions.srcDir                                             = 'src'
	pwaOptions.filename                                           = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
	pwaOptions.strategies                                         = 'injectManifest'
	;(pwaOptions.manifest as Partial<ManifestOptions>).name       = 'PWA Inject Manifest'
	;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject'
}

if (claims)
	pwaOptions.registerType = 'autoUpdate'

if (reload) {
	// @ts-ignore
	replaceOptions.__RELOAD_SW__ = 'true'
}

export default defineConfig(({mode}) => ({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		}
	},
	
	plugins: [
		React({
			include: ['src/styles/index.css', 'src/**/*.{html, ts, tsx, css}'],
		}),
		
		Pages({
			pagesDir:   [
				{dir: 'src/pages', baseRoute: ''},
				// { dir: 'src/features/admin/pages', baseRoute: 'admin' },
			],
			extensions: ['tsx', 'ts', 'js', 'md', 'mdx'],
			react:      true,
			extendRoute(route, parent) {
				// Remove this it'll all goes to catch all page
				if (route.routes && route.routes.length > 0) {
					delete route.exact
				}
				
				if (route.path === "/") {
					// Index is unauthenticated.
					return route;
				}
				
				// Augment the route with meta that indicates that the route requires authentication.
				return {
					...route,
					meta: {auth: true},
				}
			},
		}),
		
		// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
		// Layouts(),
		
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
				'react',
				{
					'axios':         [
						['default', 'http']
					],
					'react-i18next': ['useTranslation']
				}
			],
			dts:       'src/auto-imports.d.ts',
		}),
		
		// Components({
		//     // allow auto load markdown components under `./src/components/`
		//     extensions: ['vue', 'md'],
		//
		//     // allow auto import and register components used in markdown
		//     include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
		//
		//     // custom resolvers
		//     resolvers: [
		//         // auto import icons
		//         // https://github.com/antfu/unplugin-icons
		//         IconsResolver({
		//             componentPrefix: '',
		//             // enabledCollections: ['carbon']
		//         }),
		//     ],
		//
		//     dts: 'src/components.d.ts',
		// }),
		
		// https://github.com/antfu/unplugin-icons
		Icons({
			compiler:    'jsx',
			autoInstall: true,
		}),
		
		WindiCSS(),
		
		// https://github.com/antfu/vite-plugin-md
		Markdown({
			wrapperClasses: markdownWrapperClasses,
			headEnabled:    true,
			// TODO:
			jsx:            'true',
			remarkPlugins:  [
				remarkMdxCodeMeta
			],
			markdownItUses: [
				Prism,
			],
			// markdownItSetup(mdx) {
			// 	// https://prismjs.com/
			// 	mdx.use(Prism)
			// 	mdx.use(LinkAttributes, {
			// 		pattern: /^https?:\/\//,
			// 		attrs:   {
			// 			target: '_blank',
			// 			rel:    'noopener',
			// 		},
			// 	})
			// },
		}),
		
		// https://github.com/antfu/vite-plugin-pwa
		VitePWA(pwaOptions
		  // {
		  //     registerType: 'autoUpdate',
		  //     includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
		  //     manifest: {
		  //         name: 'viterect',
		  //         short_name: 'viterect',
		  //         theme_color: '#ffffff',
		  //         icons: [
		  //             {
		  //                 src: '/pwa-192x192.png',
		  //                 sizes: '192x192',
		  //                 type: 'image/png',
		  //             },
		  //             {
		  //                 src: '/pwa-512x512.png',
		  //                 sizes: '512x512',
		  //                 type: 'image/png',
		  //             },
		  //             {
		  //                 src: '/pwa-512x512.png',
		  //                 sizes: '512x512',
		  //                 type: 'image/png',
		  //                 purpose: 'any maskable',
		  //             },
		  //         ],
		  //     },
		  // }
		),
		
		replace(replaceOptions),
		
		// https://github.com/antfu/vite-plugin-inspect
		Inspect({
			enabled: false,
		}),
		
		// https://github.com/nabla/vite-plugin-eslint#readme
		// EslintPlugin(),
		
		TsconfigPaths(),
	],
	
	preview: {
		open: false,
		port: 7000,
		hmr:  {
			protocol: 'ws',
			port:     7000
		},
	},
	
	build: {
		sourcemap: process.env.SOURCE_MAP === 'true',
	},
	
	server: {
		open: false,
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

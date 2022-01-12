import * as path from 'path'
import {defineConfig} from 'vite'
import React from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import {ManifestOptions, VitePWA, VitePWAOptions} from 'vite-plugin-pwa'
import Markdown from 'vite-plugin-react-md'
import Inspect from 'vite-plugin-inspect'
import TsconfigPaths from 'vite-tsconfig-paths'
import replace from '@rollup/plugin-replace'
import {extendRoute, onRouteGenerate} from "./router.config";
import highlightJs from 'highlight.js'


// TODO: generate favicons
const pwaOptions: Partial<VitePWAOptions> = {
		mode: (process.env.VITE_ENV || 'production')?.toString() as 'production' | 'development',
		base: '/',
		includeAssets: ['favicon.svg'],
		manifest: {
				name: 'PWA Router',
				short_name: 'PWA Router',
				theme_color: '#ffffff',
				icons: [
						{
								src: 'pwa-192x192.png', // <== don't add slash, for testing
								sizes: '192x192',
								type: 'image/png',
						},
						{
								src: '/pwa-512x512.png', // <== don't remove slash, for testing
								sizes: '512x512',
								type: 'image/png',
						},
						{
								src: 'pwa-512x512.png', // <== don't add slash, for testing
								sizes: '512x512',
								type: 'image/png',
								purpose: 'any maskable',
						},
				],
		},
}

const replaceOptions = {
		__DATE__: new Date().toISOString(),
		preventAssignment: true
}
const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'

if (process.env.SW === 'true') {
		pwaOptions.srcDir = 'src'
		pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
		pwaOptions.strategies = 'injectManifest'
		;(pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest'
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
				// https://github.com/vitejs/vite/tree/main/packages/plugin-react#vitejsplugin-react-
				React({
						include: ['src/styles/index.css', 'src/**/*.{html, ts, tsx, css}'],
				}),

				// https://github.com/hannoeru/vite-plugin-pages
				Pages({
						pagesDir: [
								{dir: 'src/pages', baseRoute: ''},
						],
						extensions: ['tsx', 'ts', 'js', 'md', 'mdx'],
						onRoutesGenerated(routes) {
								return onRouteGenerate(routes) || routes
						},
						extendRoute(route: any, parent: any) {
								return extendRoute(route, parent) || route
						},
				}),

				// https://github.com/antfu/unplugin-auto-import
				AutoImport({
						resolvers: [
								IconsResolver({
										prefix: 'Icon',
										extension: 'jsx'
								})
						],
						include: [
								/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
								/\.md$/, // .md
						],
						imports: [
								'react',
								{
										'axios': [
												['default', 'http']
										],
										'react-i18next': ['useTranslation']
								}
						],
						dts: 'src/auto-imports.d.ts',
				}),

				// https://github.com/antfu/unplugin-icons
				Icons({
						compiler: 'jsx',
						autoInstall: true,
				}),

				// https://github.com/windicss/windicss
				WindiCSS(),

				// https://github.com/Leonewu/vite-plugin-react-md
				Markdown({
						markdownIt: {
								highlight: function (str: string, lang) {
										if (lang && highlightJs.getLanguage(lang)) {
												try {
														return '<pre class="language-' + lang + '">' +
															highlightJs.highlight(str, {language: lang, ignoreIllegals: true}).value +
															'</pre>'
												} catch (__) {
												}
										}
										return '';
								}
						}
				}),

				// https://github.com/antfu/vite-plugin-pwa
				VitePWA(pwaOptions),

				replace(replaceOptions),

				// https://github.com/antfu/vite-plugin-inspect
				Inspect({enabled: false,}),

				// https://github.com/nabla/vite-plugin-eslint#readme
				// EslintPlugin(),

				// https://github.com/aleclarson/vite-tsconfig-paths
				TsconfigPaths(),
		],

		preview: {
				open: false,
				port: 7000,
				hmr: {
						protocol: 'ws',
						port: 7000
				},
		},

		build: {
				sourcemap: process.env.SOURCE_MAP === 'true',
		},

		server: {
				open: false,
				port: 8080,
				hmr: {
						protocol: 'ws',
						port: 8080,
				},
				fs: {
						strict: false,
				},
		},
}))

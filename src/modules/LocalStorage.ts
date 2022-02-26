import type { ThemeName } from '../components/UI/Theme/types'
import type { Language } from '../plugins/i18n'


export class LocalStorage {
	static theme = 'theme'

	static language = 'i18nextLng'

	static getTheme(): ThemeName | undefined {
		const theme = localStorage.getItem(LocalStorage.theme)
		return theme as ThemeName | undefined
	}

	static setTheme(theme: boolean | string): void {
		localStorage.setItem(LocalStorage.theme, theme.toString())
	}

	static getLanguage(): Language {
		const language = localStorage.getItem(LocalStorage.language)
		return language as Language
	}

	static setLanguage(language: Language): void {
		localStorage.setItem(LocalStorage.language, language)
	}
}

export default {}

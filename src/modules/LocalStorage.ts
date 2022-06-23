import type { ThemeName } from '../components/UI/Theme/types'
import type { Language } from '../plugins/i18n'


export class LocalStorage {
	static THEME = 'theme'

	static LANGUAGE = 'i18nextLng'

	static getTheme(): string | null {
		return localStorage.getItem(LocalStorage.THEME)
	}

	static setTheme(theme: ThemeName): void {
		localStorage.setItem(LocalStorage.THEME, theme.toString())
	}

	static getLanguage(): string | null {
		return localStorage.getItem(LocalStorage.LANGUAGE)
	}

	static setLanguage(language: Language): void {
		localStorage.setItem(LocalStorage.LANGUAGE, language)
	}
}

export default {}

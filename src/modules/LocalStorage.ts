import type {ThemeName} from '../components/UI/Theme/types'
import type {Language} from '../plugins/i18n'


export class LocalStorage {
	static THEME = 'theme'
	static LANGUAGE = 'i18nextLng'

	static getTheme(): ThemeName | undefined {
		const theme = localStorage.getItem(LocalStorage.THEME)
		return theme as ThemeName | undefined
	}

	static setTheme(theme: boolean | string): void {
		localStorage.setItem(LocalStorage.THEME, theme.toString())
	}

	static getLanguage(): Language {
		const language = localStorage.getItem(LocalStorage.LANGUAGE)
		return language as Language
	}

	static setLanguage(language: Language): void {
		localStorage.setItem(LocalStorage.LANGUAGE, language)
	}
}

export default {}

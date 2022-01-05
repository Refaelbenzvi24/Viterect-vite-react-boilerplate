import type {ThemeName} from '../types/theme'
import type {Language} from '../plugins/i18n'

export class LocalStorage {

    static theme = 'theme'
    static language = 'i18nextLng'

    static getTheme(): ThemeName {
        const theme = localStorage.getItem(LocalStorage.theme)
        return theme as ThemeName || "auto"
    }

    static setTheme(theme: boolean | string): void {
        localStorage.setItem(LocalStorage.theme, theme.toString())
    }

    static removeTheme(): void {
        localStorage.removeItem(LocalStorage.theme)
    }

    static getLanguage(): Language {
        const language = localStorage.getItem(LocalStorage.language)
        return language as Language || "en"
    }

    static removeLanguage(): void {
        localStorage.removeItem(LocalStorage.language)
    }
}

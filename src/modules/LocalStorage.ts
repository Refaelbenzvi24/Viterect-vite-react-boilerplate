import type {ThemeName} from '../components/UI/Theme/types';
import type {Language} from '../plugins/i18n';
import {vars} from '../plugins/vars';

export const LocalStorage = {

	theme:    'theme',
	language: 'i18nextLng',

	getTheme(): ThemeName {
		const theme = localStorage.getItem(LocalStorage.theme);
		return theme as ThemeName || vars.theme.defaultTheme;
	},

	setTheme(theme: boolean | string): void {
		localStorage.setItem(LocalStorage.theme, theme.toString());
	},

	getLanguage(): Language {
		const language = localStorage.getItem(LocalStorage.language);
		return language as Language || 'en';
	},
};

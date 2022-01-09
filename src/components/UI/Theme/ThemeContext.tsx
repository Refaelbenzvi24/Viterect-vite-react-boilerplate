import {createContext} from 'react';
import {LocalStorage} from '../../../modules/LocalStorage';
import type {ThemeContextType} from './types';
import {vars} from '../../../plugins/vars'

const defaultTheme = vars.theme.defaultTheme;

export const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedTheme = LocalStorage.getTheme();
		if (storedTheme !== 'auto') {
			return storedTheme;
		}
		
		const userMedia = window.matchMedia('(prefers-color-scheme:dark)');
		if (userMedia.matches) {
			return 'dark';
		}
	}
	
	return defaultTheme;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

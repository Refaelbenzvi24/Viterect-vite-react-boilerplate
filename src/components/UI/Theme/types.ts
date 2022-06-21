import type { ReactElement } from 'react'


export type ThemeName = 'dark' | 'light';

export interface ThemeProviderOptions {
	children: ReactElement;
}

export interface ThemeContextType {
	theme: ThemeName;
	setTheme: (name: 'dark' | 'light') => void;
}

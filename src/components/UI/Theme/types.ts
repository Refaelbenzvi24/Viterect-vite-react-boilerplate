import type {ReactElement} from 'react';

export type ThemeName = 'auto' | 'dark' | 'light';

export interface ThemeProviderOptions {
	initialTheme?: ThemeName;
	children: ReactElement;
}

export interface ThemeContextType {
	theme: ThemeName;
	setTheme: (name: 'dark' | 'light') => void;
}

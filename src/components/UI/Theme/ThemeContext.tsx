import { createContext } from 'react'
import { LocalStorage } from '../../../modules/LocalStorage'
import type { ThemeContextType, ThemeName } from './types'
import { Vars } from '../../../modules/vars'


export const getInitialTheme = (): ThemeName => {
	const { defaultTheme } = Vars.theme

	const storedTheme = LocalStorage.getTheme()
	if (storedTheme && (storedTheme === 'dark' || storedTheme === 'light')) {
		return storedTheme
	}

	const userMedia = window.matchMedia('(prefers-color-scheme:dark)')
	if (userMedia.matches) {
		return 'dark'
	}

	return defaultTheme
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

import {ReactElement} from "react";

export type ThemeName = 'light' | 'dark' | 'auto'

export interface ThemeProviderOpts {
    initialTheme?: ThemeName,
    children: ReactElement
}

export type ThemeContextType = {
    theme: ThemeName
    setTheme: (name: 'light' | 'dark') => void
}

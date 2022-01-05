import React from 'react'
import {ReactElement, useEffect, useState} from "react"
import {LocalStorage} from "../../../modules/LocalStorage"
import {ThemeContext, getInitialTheme} from "./ThemeContext"
import {ThemeName, ThemeProviderOpts} from "../../../types/theme"


export default ({initialTheme, children}: ThemeProviderOpts): ReactElement => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme: ThemeName) => {
        //Updated rawSetTheme to theme above//
        const root = window.document.documentElement
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        LocalStorage.setTheme(theme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}

import type {ReactElement} from 'react';
import React, {useEffect, useState} from 'react';

import {LocalStorage} from '../../../modules/LocalStorage';
import {ThemeContext, getInitialTheme} from './ThemeContext';
import type {ThemeName, ThemeProviderOptions} from './types';

export default function ({initialTheme, children}: ThemeProviderOptions): ReactElement {
    const [theme, setTheme] = useState(getInitialTheme)


    const rawSetTheme = (theme: ThemeName) => {
        // Updated rawSetTheme to theme above//
        const root   = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        LocalStorage.setTheme(theme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        if (theme)
            rawSetTheme(theme)
    }, [theme]);

    return (
            <ThemeContext.Provider value={{theme, setTheme}}>
                {children}
            </ThemeContext.Provider>
    )
}

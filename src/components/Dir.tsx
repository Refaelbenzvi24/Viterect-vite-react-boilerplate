import React, {ReactNode} from 'react'
import {create} from 'jss'
import rtl from 'jss-rtl'

import {ThemeProvider, createTheme} from "@mui/material";
import {StylesProvider, jssPreset} from '@mui/styles'
import i18n from "../plugins/i18n"

type DirProps = { children: ReactNode }

const jss = create({plugins: [...jssPreset().plugins, rtl()]});
//TODO: check if theme controller is also needed for mui

export default ({children}: DirProps) => {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider
                theme={createTheme({direction: i18n.dir()})}>
                {children}
            </ThemeProvider>
        </StylesProvider>
    )
}

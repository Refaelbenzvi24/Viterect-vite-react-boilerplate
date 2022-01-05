import React, {StrictMode, Suspense} from 'react'
import ReactDOM from 'react-dom'

import './styles/cssLibraries'

import {RecoilRoot} from 'recoil'

import App from './App'
import ThemeProvider from "./components/UI/Theme/ThemeProvider";
import ReloadPrompt from "./components/ReloadPrompt";
import Dir from "./components/Dir";
import ReactQuery from "./plugins/reactQuery";
import MainProvider from "./components/UI/Main/MainProvider";
import {CircularProgress} from "@mui/material";

function Main() {
    return (
        <div>
            <Dir>
                <MainProvider>
                    <ReactQuery>
                        <ThemeProvider>
                            <Suspense fallback={<><CircularProgress /></>}>
                                <RecoilRoot>
                                    <App/>
                                    <ReloadPrompt/>
                                </RecoilRoot>
                            </Suspense>
                        </ThemeProvider>
                    </ReactQuery>
                </MainProvider>
            </Dir>
        </div>
    )
}

const Root = document.querySelector('#root')

ReactDOM.render(
    <Main/>,
    Root
)


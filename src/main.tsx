import React, {Suspense} from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './styles/cssLibraries'

import {RecoilRoot} from 'recoil'

import App from './App'
import ThemeProvider from './components/UI/Theme/ThemeProvider'
import ReloadPrompt from './components/ReloadPrompt'
import ReactQuery from './plugins/reactQuery'
import MainProvider from './components/UI/Main/MainProvider'
import ProgressSpinner from './components/UI/Progress/ProgressSpinner'
import Plugins from "./plugins"

function Main() {
    Plugins()

    return (
            <ThemeProvider>
                <MainProvider>
                    <ReactQuery>
                        <RecoilRoot>
                            <App/>
                            <ReloadPrompt/>
                        </RecoilRoot>
                    </ReactQuery>
                </MainProvider>
            </ThemeProvider>
    )
}

const Root = document.querySelector('#root');

ReactDOM.render(
        <Router>
            <Suspense fallback={<ProgressSpinner/>}>
                <Main/>
            </Suspense>
        </Router>,
        Root
)

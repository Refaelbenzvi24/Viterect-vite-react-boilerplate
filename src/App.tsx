import {
	useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'
import ReloadPrompt from './components/ReloadPrompt'
import { RecoilRoot } from 'recoil'
import Plugins from './plugins'
import * as React from 'react'
import ThemeProvider from "./components/UI/Theme/ThemeProvider"


function Pages(): React.ReactElement | null {
	return useRoutes(routes)
}

const App = () => {
	Plugins()

	return (
		<ThemeProvider>
			<RecoilRoot>
				<ReloadPrompt/>
				<Pages/>
			</RecoilRoot>
		</ThemeProvider>
	)
}

export default App

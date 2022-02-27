import {
	useRoutes,
	useNavigate,
} from 'react-router-dom'
import routes from '~react-pages'

import ReloadPrompt from './components/ReloadPrompt'
import { RecoilRoot } from 'recoil'
import MainProvider from './components/UI/Main/MainProvider'
import ThemeProvider from './components/UI/Theme/ThemeProvider'
import Plugins from './plugins'
import { useEffect } from 'react'
import * as React from 'react'


function Pages(): React.ReactElement | null {
	return useRoutes(routes)
}

export default () => {
	Plugins()

	return (
		<ThemeProvider>
			<MainProvider>
				<RecoilRoot>
					<ReloadPrompt/>
					<Pages/>
				</RecoilRoot>
			</MainProvider>
		</ThemeProvider>
	)
}

import {
	useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

import ReloadPrompt from './components/ReloadPrompt'
import { RecoilRoot } from 'recoil'
import Plugins from './plugins'
import * as React from 'react'
import Providers from "./context"


function Pages(): React.ReactElement | null {
	return useRoutes(routes)
}

const App = () => {
	Plugins()

	return (
		<Providers>
			<RecoilRoot>
				<ReloadPrompt/>
				<Pages/>
			</RecoilRoot>
		</Providers>
	)
}

export default App

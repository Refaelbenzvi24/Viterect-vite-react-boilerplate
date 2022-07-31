import { Suspense } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
// @ts-expect-error react types not compatible yet.
import { createRoot } from 'react-dom/client'

import './setup'
import './styles/main.css'

import App from './App'
import ReactQuery from './components/ReactQuery/reactQuery'
import ProgressSpinner from './components/UI/Progress/ProgressSpinner'


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const root = createRoot(document.querySelector('#root') as Element)

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
root.render(
	<ReactQuery>
		<Router>
			<Suspense fallback={<ProgressSpinner/>}>
				<App/>
			</Suspense>
		</Router>
	</ReactQuery>
)

import { Suspense } from 'react'
import {
	BrowserRouter as Router,
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './setup'
import './styles/cssLibraries'

import App from './App'
import ReactQuery from './components/ReactQuery/reactQuery'
import ProgressSpinner from './components/UI/Progress/ProgressSpinner'


ReactDOM.render(
	<ReactQuery>
		<Router>
			<Suspense fallback={<ProgressSpinner/>}>
				<App/>
			</Suspense>
		</Router>
	</ReactQuery>,
	document.querySelector('#root'),
)

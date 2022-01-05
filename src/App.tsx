import React from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import {Suspense} from 'react';
import {renderRoutes} from 'react-router-config'

import routes from 'virtual:generated-pages-react'

const Pages = (): JSX.Element => {
    return renderRoutes(routes)
}

export default () => {
    return (
        <Router>
            <Pages/>
        </Router>
    )
}

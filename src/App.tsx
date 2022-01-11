import React from 'react';
import {
	BrowserRouter as Router,
} from 'react-router-dom';

import {renderRoutes} from 'react-router-config';

import routes from 'virtual:generated-pages-react';

const Pages = (): JSX.Element => renderRoutes(routes);

export default () => {
	return (
	  <Router>
		  <Pages/>
	  </Router>
	)
}

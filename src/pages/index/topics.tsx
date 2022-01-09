import type React from 'react';
import type {RouteConfigComponentProps} from 'react-router-config';
import {Link, useRouteMatch} from 'react-router-dom';
import NestedRoute from '../../components/NestedRoute';

const page: React.FC<RouteConfigComponentProps> = ({route}) => {
	const {url} = useRouteMatch()
	
	return (
	  <div>
		  <h2>Topics</h2>
		  <ul>
			  <li>
				  <Link to={`${url}/rendering`}>Rendering with React</Link>
			  </li>
			  <li>
				  <Link to={`${url}/components`}>Components</Link>
			  </li>
			  <li>
				  <Link to={`${url}/props-v-state`}>Props v. State</Link>
			  </li>
		  </ul>
		  
		  <NestedRoute route={route}/>
	  </div>
	);
};

export default page;

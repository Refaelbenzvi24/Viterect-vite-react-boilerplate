import type React from 'react';
import {Link} from 'react-router-dom';
import NestedRoute from '../../../components/NestedRoute';
import type {RouteConfigComponentProps} from 'react-router-config';

const page: React.FC<RouteConfigComponentProps> = ({route}) => (
  <>
	  <h3>Please select a topic.</h3>
	  <ul>
		  <li>
			  <Link to="topics/rendering/rendering">Rendering with React</Link>
		  </li>
	  </ul>
	  
	  <NestedRoute route={route}/>
  </>
);

export default page;

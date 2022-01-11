import React from 'react';
import Plugins from 'plugins/index';
import type {RouteConfigComponentProps} from '../components/NestedRoute';
import NestedRoute from '../components/NestedRoute';
import SideBar from '../components/SideBar';
import Main from '../components/UI/Main/Main';
import Particles from "react-tsparticles";

export default function ({route}: RouteConfigComponentProps) {
	Plugins()
	
	return (
	  <div className="h-full w-full mx-auto">
		  <SideBar/>
		  <Main>
			  <NestedRoute route={route}/>
		  </Main>
	  </div>
	);
}

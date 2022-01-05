import React from 'react'
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config';
import {Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom'
import NestedRoute from "../../components/NestedRoute";

const page: React.FC<RouteConfigComponentProps> = ({route}) => {
    let {path, url} = useRouteMatch()
    // const Topic = route.children[0].component

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

            {/*<Switch>*/}
            {/*    <Route exact path={path}>*/}
            {/*        <h3>Please select a topic.</h3>*/}
            {/*    </Route>*/}
            {/*    <Route path={`${path}/:id`}>*/}
            {/*        <Topic />*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
        </div>
    );
}

export default page

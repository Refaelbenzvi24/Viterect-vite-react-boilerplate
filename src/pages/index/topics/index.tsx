import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import NestedRoute from "../../../components/NestedRoute";
import {RouteConfigComponentProps} from "react-router-config";

const page: React.FC<RouteConfigComponentProps> = ({route}) => {
    return (
        <>
            <h3>Please select a topic.</h3>
            <ul>
                <li>
                    <Link to={`topics/rendering/rendering`}>Rendering with React</Link>
                </li>
            </ul>

            <NestedRoute route={route}/>
        </>
    )
}

export default page

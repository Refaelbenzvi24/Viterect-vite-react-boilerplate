import React from 'react'
import {useParams} from 'react-router-dom'
import {RouteConfigComponentProps} from "react-router-config";

type Params = { id: string }

const page: React.FC<RouteConfigComponentProps> = ({route}) => {
    let {id}: Params = useParams();

    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
}

export default page;

import React from 'react';
import {
    useRoutes,
} from 'react-router-dom';


// @ts-ignore
import routes from '~react-pages';

function Pages() {
    return useRoutes(routes)
}

export default () => {
    return <Pages/>
}

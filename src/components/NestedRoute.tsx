import React, {Component} from 'react'
import {renderRoutes, RouteConfig} from 'react-router-config'

export type RouteConfigComponentProps = { route: RouteConfig | undefined }

const NestedRoute = ({route}: RouteConfigComponentProps) => {
    let child

    if (route?.routes) {
        child = route?.routes?.map(r => ({
            ...r,

            path: `${route.path === '/' ? '' : route.path}${r.path}`,
            exact: r.path === '/'
        }))
    } else {
        child = route?.children?.map((r: any) => ({
            ...r,

            path: `${route.path === '/' ? '' : route.path}${r.path}`,
            exact: r.path === '/'
        }))
    }

    return (
        <>
            {renderRoutes(child)}
        </>
    )
}


export default NestedRoute

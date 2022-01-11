import React from 'react';
import type { RouteConfig } from 'react-router-config';
import { renderRoutes } from 'react-router-config';

export interface RouteConfigComponentProps { route: RouteConfig | undefined }

function NestedRoute({ route }: RouteConfigComponentProps) {
  let child;

  child = route?.routes ? route.routes.map((r) => ({
    ...r,

    path: `${route.path === '/' ? '' : route.path}${r.path}`,
    exact: r.path === '/',
  })) : route?.children?.map((r: any) => ({
    ...r,

    path: `${route.path === '/' ? '' : route.path}${r.path}`,
    exact: r.path === '/',
  }));

  return (
    <>
      {renderRoutes(child)}
    </>
  );
}

export default NestedRoute;

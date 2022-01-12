export const onRouteGenerate = (routes: any[]) => {
		delete routes[0].index
		routes[0].path = '/'


		return routes
};


export const extendRoute = (route: any, parent: any) => {
		// Remove this it'll all goes to catch all page
		if (route.routes && route.routes.length > 0) {
				delete route.exact
		}

		if (route.index === true) {
				// Index is unauthenticated.
				return route;
		}

		// Augment the route with meta that indicates that the route requires authentication.
		return {
				...route,
				meta: {auth: true},
		}
}

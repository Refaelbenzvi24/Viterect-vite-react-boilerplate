export const onRouteGenerate = (routes: any[]) => {

	return routes
}


export const extendRoute = (route: any, parent: any) => {
	// Remove this it'll all goes to catch all page
	if (route.routes && route.routes.length > 0) {
		delete route.exact
	}

	if (route.index === true) {
		// Index is unauthenticated.
		delete route.index
		route.path = '/'
		return route
	}

	if (route.path === ':404') {
		route.path = '*'
		return route
	}

	// Augment the route with meta that indicates that the route requires authentication - uncomment bellow if you want to include auth meta.
	{
		return {
			...route,
			// meta: {auth: true},
		}
	}
}

import { useEffect } from 'react'
import { useLocation } from 'react-router'
import NProgress from 'nprogress'


export default (): void => {
	const location = useLocation()

	useEffect(() => {
		NProgress.done()

		return () => {
			NProgress.start()
		}
	}, [location])
};

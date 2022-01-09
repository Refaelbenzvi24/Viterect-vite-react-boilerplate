import NProgress from 'nprogress';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

/**
 * A progress bar for pages/route change
 */


export default (): void => {
	const history = useHistory();
	
	useEffect(() => {
		history.listen(() => {
			NProgress.start();
		});
		
		return history.listen(() => {
			NProgress.done();
		});
	}, [history]);
};

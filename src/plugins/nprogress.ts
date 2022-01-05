import NProgress from 'nprogress'
import {useEffect} from "react";
import {useHistory} from 'react-router-dom'

/**
 * A progress bar for pages/route change
 */

//TODO: fix bug when hitting back button only start but don't finish
export default (): void => {
    const history = useHistory()

    useEffect(() => {
        history.listen(() => {
            NProgress.start()
        })

        return history.listen(() => {
            NProgress.done()
        })
    }, [history])
}

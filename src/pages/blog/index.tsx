import {Link} from 'react-router-dom'

export default function () {
    return (
        <>
            <p>blog/index.vue</p>
            <Link to="/blog/1b234bk12b3">
                id: 1b234bk12b3
            </Link> |
            <Link to="/blog/today">
                today
            </Link>
        </>
    )
}

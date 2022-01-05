import {useParams} from 'react-router-dom'

export default function() {
    const {id} = useParams()

    return (
        <p>blog/[id].tsx: {id}</p>
    )
}

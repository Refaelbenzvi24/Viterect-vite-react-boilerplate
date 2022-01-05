import {useEffect, useState} from "react"

export default () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', setWindowData)

        return () => {
            window.removeEventListener('resize', setWindowData)
        }
    }, [])

    const setWindowData = () => {
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }

    return {windowWidth, windowHeight}
}


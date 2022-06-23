import { useEffect, useState } from 'react'


const useWindowsSize = () => {
	const [windowWidth, setWindowWidth]   = useState(window.innerWidth)
	const [windowHeight, setWindowHeight] = useState(window.innerHeight)

	const setWindowData = () => {
		setWindowHeight(window.innerHeight)
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', setWindowData)

		return () => {
			window.removeEventListener('resize', setWindowData)
		}
	}, [])

	return {
		windowWidth,
		windowHeight,
	}
}

export default useWindowsSize

import { useEffect, useState } from "react"
import useWindowsSize from "./useWindowsSize"


const usePointer = () => {
	const { windowWidth, windowHeight } = useWindowsSize()
	const [pointerX, setPointerX]       = useState(windowWidth / 2)
	const [pointerY, setPointerY]       = useState(windowHeight / 2)

	const setMouseData = (evt: MouseEvent) => {
		setPointerX(evt.clientX)
		setPointerY(evt.clientY)
	}

	const setTouchData = (touchHandler: TouchEvent) => {
		if (touchHandler.touches.length > 0) {
			setPointerX(touchHandler.touches[0].clientX)
			setPointerY(touchHandler.touches[0].clientY)
		}

		return () => {
			document.removeEventListener('mousemove', setMouseData)
			document.removeEventListener('touchmove', setTouchData)
		}
	}

	useEffect(() => {
		document.addEventListener('mousemove', setMouseData)
		document.addEventListener('touchmove', setTouchData)
	}, [])

	return {
		pointerX,
		pointerY,
	}
}

export default usePointer

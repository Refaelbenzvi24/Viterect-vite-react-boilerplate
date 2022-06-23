import useWindowsSize from "./useWindowsSize"
import { useEffect, useState } from "react"


const mobileBreakpoint = 800

const useIsMobile = () => {
	const { windowWidth }         = useWindowsSize()
	const [isMobile, setIsMobile] = useState(windowWidth >= mobileBreakpoint)

	useEffect(() => {
		setIsMobile(windowWidth <= mobileBreakpoint)
	}, [windowWidth])


	return isMobile
}

export default useIsMobile

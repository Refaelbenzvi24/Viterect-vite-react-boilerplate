import { useContext } from 'react'
import type { ReactDivProps } from '../../../types'
import { defaultMainData } from '../Main/MainContext'
import windowVariables from '../../../hooks/WindowVars'
import { useMain } from "../../../context"


const { sideBarOpts: defaultSideBarOptions } = defaultMainData
const { shrinkPoint: defaultShrinkPoint }    = defaultSideBarOptions

const SideBarLink = (props: ReactDivProps) => {
	const overlayEl = document.getElementById('portals-root')

	const { children, ...restProps } = props

	const { sideBarState, sideBarOpts, setSideBarState, setOverlayState } = useMain()

	const { windowWidth } = windowVariables()

	const { shrinkPoint } = {
		shrinkPoint: defaultShrinkPoint,
		...sideBarOpts
	}

	const action = () => {
		if (sideBarState && shrinkPoint && shrinkPoint > windowWidth) {
			setSideBarState(false)
			setOverlayState(false)
		}
	}

	return (
		<div {...restProps}
		     role="presentation"
		     onClick={action}>
			{children}
		</div>
	)
}

export default SideBarLink

import { defaultMainData } from '../Main/MainContext'
import windowVariables from '../../../hooks/WindowVars'
import { useMain } from "../../../context"
import { HTMLMotionProps, motion } from "framer-motion"


const { sideBarOpts: defaultSideBarOptions } = defaultMainData
const { shrinkPoint: defaultShrinkPoint }    = defaultSideBarOptions

const SideBarLink = (props: HTMLMotionProps<"div">) => {
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
		<motion.div {...restProps}
		     role="presentation"
		     onClick={action}>
			{children}
		</motion.div>
	)
}

export default SideBarLink

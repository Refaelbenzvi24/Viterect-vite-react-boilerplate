import type { ReactDivProps } from 'types'
import { useEffect } from 'react'
import { defaultMainData } from '../Main/MainContext'
import windowVariables from '../../../hooks/WindowVars'
import clsx from 'clsx'
import { useMain } from "../../../context"
import { css } from "@emotion/css"
import tw from "twin.macro"
import theme from "../Utils/theme"
import { isDark } from "../index"
import { transformTransition } from "../Utils/transitions"
import { conditionalTranslate } from "../Utils/utils"


interface SideBarProps extends ReactDivProps {
	dark?: boolean
	width?: number
	shrinkPoint?: number
	showButton?: boolean
}

const { sideBarOpts: defaultSideBarOptions }                   = defaultMainData
const { width: defaultWidth, shrinkPoint: defaultShrinkPoint } = defaultSideBarOptions


const SideBar = (props: SideBarProps) => {
	const { sideBarState: state, setSideBarState: setState, setSideBarOpts, setOverlayState } = useMain()

	const { dark, children, width, className, shrinkPoint, showButton, ...restProps } = props

	const overlayEl       = document.getElementById('portals-root')
	const { windowWidth } = windowVariables()


	const setOpenState = (state: boolean) => {
		setState(state)

		if (shrinkPoint && windowWidth < shrinkPoint) {
			if (state) {
				return setOverlayState(true)
			}
		}

		setOverlayState(false)
	}

	useEffect(() => {
		setSideBarOpts({
			shrinkPoint,
			width,
		})
	}, [shrinkPoint, width])


	useEffect(() => {
		if (shrinkPoint && windowWidth > shrinkPoint) {
			setOpenState(true)
		} else if (shrinkPoint && windowWidth < shrinkPoint) {
			setOpenState(false)
		}
	}, [windowWidth])

	return (
		<nav id="sideBar"
		     {...restProps}
		     className={css`
			     ${[
				     css`
					     color: ${theme.colors.gray_700};
					     background-color: ${theme.colors.white};
					     width: ${width}px;
				     `,
				     (dark || isDark()) && css`
					     background-color: ${theme.colors.dark_500};
				     `,

				     tw`fixed h-full z-30 shadow-lg`,
				     theme.transitions([transformTransition()]),
				     theme.transforms([conditionalTranslate(!state, `-100%`)])
			     ]}
		     ` + clsx(className)}>
			{children}
		</nav>
	)
}


SideBar.defaultProps = { width: defaultWidth, shrinkPoint: defaultShrinkPoint, showButton: true }

export default SideBar

import styled from "@emotion/styled"
import tw from "twin.macro"
import { css } from "@emotion/css"
import i18n from "i18next"
import { useMain } from "../../../context"
import IconButton from "../Buttons/IconButton"
import theme from "../Utils/theme"
import { isDark } from "../index"
import clsx from "clsx"
import { conditionalRotate, conditionalTranslate } from "../Utils/utils"
import { transformTransition } from "../Utils/transitions"
import { ReactDivProps } from "../../../types"
import windowVariables from "../../../hooks/WindowVars"


interface SideBarButtonProps extends ReactDivProps {
	dir?: "ltr" | "rtl",
	dark?: boolean
}

const SideBarButton = ({ className, dir, dark }: SideBarButtonProps) => {
	dir = dir || i18n.dir()

	const { sideBarState: state, setSideBarState: setState, setOverlayState, sideBarOpts } = useMain()

	const { windowWidth }        = windowVariables()
	const { width, shrinkPoint } = sideBarOpts

	const setOpenState = (state: boolean) => {
		setState(state)

		if (shrinkPoint && windowWidth < shrinkPoint) {
			if (state) return setOverlayState(true)

			setOverlayState(false)
		}
	}

	return (
		<div className={
			css`
				background-color: ${theme.colors.white};
				color: ${theme.colors.gray_700};

				${
					[
						tw`self-center fixed mt-10 z-30 shadow-lg`,
						(dark || isDark()) && css`
							background-color: ${theme.colors.dark_500};
						`,
						theme.transitions([transformTransition()]),
						theme.transforms([
							conditionalRotate(!state, 180),
							conditionalTranslate(state, `${width as number}px`),
						])
					]
				}
			` + clsx(className)
		}>
			<IconButton onClick={() => setOpenState(!state)}>
				{dir === 'ltr' ? <IconCarbonChevronLeft/> : <IconCarbonChevronRight/>}
			</IconButton>
		</div>
	)
}

export default SideBarButton

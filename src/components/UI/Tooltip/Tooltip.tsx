import type { ReactElement } from 'react'
import type { ReactDivProps } from 'types'
import type { TFunctionResult } from 'i18next'
import styled from "@emotion/styled"
import tw from "twin.macro"
import { isDark } from "../index"
import theme from "../Utils/theme"
import Portal from "../Portal"
import { css } from "@emotion/css"
import { useEffect, useRef, useState } from "react"


const defaultProps = {
	placement: 'center-center',
	offsetX:   15,
	offsetY:   15
}

const getCoords = (elem: Element) => {
	const box = elem.getBoundingClientRect()

	const body  = document.body
	const docEl = document.documentElement

	const scrollTop  = docEl.scrollTop || body.scrollTop
	const scrollLeft = docEl.scrollLeft || body.scrollLeft

	const clientTop  = docEl.clientTop || body.clientTop
	const clientLeft = docEl.clientLeft || body.clientLeft

	const top  = box.top + scrollTop - clientTop
	const left = box.left + scrollLeft - clientLeft

	return { top: Math.round(top), left: Math.round(left) }
}

interface CalcPlacementProps {
	placement: Placement
	elementWidth: number
	elementHeight: number
	tooltipWidth: number
	tooltipHeight: number
	offsetX: number
	offsetY: number
}

const calcPlacement = ({
	placement,
	elementWidth,
	elementHeight,
	tooltipWidth,
	tooltipHeight,
	offsetX,
	offsetY
}: CalcPlacementProps): { top: number, left: number } => {
	let top            = 0, left = 0
	const placementArr = placement.split('-')

	switch (placementArr[0]) {
	case 'top':
		top = -(((elementHeight + tooltipHeight) / 2) + (offsetX))
		break
	case 'bottom':
		top = (((elementHeight + tooltipHeight) / 2) + (offsetX))
		break
	}

	switch (placementArr[1]) {
	case 'left':
		left = -(((elementWidth + tooltipWidth) / 2) + (offsetY))
		break
	case 'right':
		left = (((elementWidth + tooltipWidth) / 2) + (offsetY))
		break
	}

	return { left, top }
}

type Placement = `${'top' | 'bottom' | 'center'}-${'left' | 'right' | 'center'}`

type TooltipProps = {
	                    dark?: boolean
	                    children: ReactElement
	                    tooltip: TFunctionResult | number | string
	                    placement?: Placement
	                    offsetX?: number
	                    offsetY?: number
                    } & ReactDivProps & typeof defaultProps

const Tooltip = (props: TooltipProps) => {
	const { children, tooltip, placement, className, offsetY, offsetX, ...rest } = props
	const dark                                                                   = props.dark || isDark()
	const [visible, setVisible]                                                  = useState(false)
	const [top, setTop]                                                          = useState<number>()
	const [left, setLeft]                                                        = useState<number>()
	const elementWrapper                                                         = useRef<HTMLDivElement>(null)
	const tooltipElement                                                         = useRef<HTMLDivElement>(null)


	useEffect(() => {
		if (elementWrapper.current && tooltipElement.current) {
			const { height, width }                              = elementWrapper.current.getBoundingClientRect()
			const { width: tooltipWidth, height: tooltipHeight } = tooltipElement.current.getBoundingClientRect()
			const { top, left }                                  = getCoords(elementWrapper.current)
			const { top: topOffset, left: leftOffset }           = calcPlacement({
				placement,
				elementWidth:  width,
				elementHeight: height,
				tooltipWidth,
				tooltipHeight,
				offsetX,
				offsetY
			})


			setTop(() => top + (height / 2) - (tooltipHeight / 2) + topOffset)
			setLeft(() => left + (width / 2) - (tooltipWidth / 2) + leftOffset)
		}
	}, [visible])

	return (
		<>
			<Portal>
				{
					visible &&
					<div ref={tooltipElement}
					     className={css([
						     tw`inline-block rounded shadow-2xl p-1`,

						     css`
							     background-color: ${theme.colors.gray_100};
							     color: ${theme.colors.blue_500};
						     `,

						     dark && css`
							     color: ${theme.colors.white};
							     background-color: ${theme.colors.dark_200};
						     `,

						     css`
							     position: absolute;
							     z-index: ${theme.zIndex.tooltip};
							     top: ${top}px;
							     left: ${left}px;
						     `
					     ])}>
						{tooltip}
					</div>
				}
			</Portal>
			<div ref={elementWrapper}
			     className="w-fit"
			     onMouseEnter={() => setVisible(true)}
			     onMouseLeave={() => setVisible(false)}>
				{children}
			</div>
		</>
	)
}

Tooltip.defaultProps = defaultProps

export default Tooltip

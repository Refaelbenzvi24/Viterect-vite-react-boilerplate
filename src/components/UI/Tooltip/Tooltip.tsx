import type { ReactElement } from 'react'

import './Tooltip.css'
import type { ReactElementProps } from 'types'
import type { TFunctionResult } from 'i18next'
import clsx from "clsx"


interface TooltipProps extends ReactElementProps {
	children: ReactElement;
	tooltip: TFunctionResult | number | string;
}

export default (props: TooltipProps) => {
	return (
		<div className="flex w-fit">
			<div {...props} className="has-tooltip relative">
				<span className={`transition-opacity duration-300 tooltip invisible inline-block absolute text-center
								rounded shadow-xl text-semibold p-1 bg-gray-100 dark:bg-dark-200 text-blue-500 dark:text-white opacity-100
								${clsx(props.className)}`}>
					{props.tooltip}
				</span>
				{props.children}
			</div>
		</div>
	)
}

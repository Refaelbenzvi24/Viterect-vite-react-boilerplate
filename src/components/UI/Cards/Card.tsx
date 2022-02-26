import type { ReactElementProps } from 'types'
import clsx from "clsx"


export default (props: ReactElementProps) => {
	return (
		<div
			{...props}
			className={`right-0 w-full origin-top-right rounded-md shadow-lg p-2 overflow-hidden
		  bg-white dark:bg-dark-300 rounded-md shadow dark:bg-dark-400 ${clsx(props.className)}`}
		>
			{props.children}
		</div>
	)
}

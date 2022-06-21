import type { ReactElementProps } from '../../../types'
import clsx from 'clsx'


const Subtitle = (props: ReactElementProps) => {
	return (
		<span {...props} className={`text-gray-500 dark:text-true-gray-300 ${clsx(props.className)}`}>
			{props.children}
		</span>
	)
}

export default Subtitle

import type { ReactElementProps } from 'types'
import clsx from "clsx"


const Title = (props: ReactElementProps) => {
	return (
		<span {...props}
		      className={`text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent
									text-blueGray-400 ${clsx(props.className)}`}>
			{props.children}
		</span>
	)
}

export default Title

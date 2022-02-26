import type { ReactElementProps } from '../../../types'
import clsx from "clsx"


export default (props: ReactElementProps) => {
	return (
		<div {...props}
		     className={`h-0 mx-4 my-2 border border-solid border-blueGray-100 ${clsx(props.className)}`}/>
	)
}

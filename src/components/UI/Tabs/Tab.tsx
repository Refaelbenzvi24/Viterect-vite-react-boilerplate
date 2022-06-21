import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import clsx from "clsx"


const Tab = (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
	return (
		<a {...props} className={`tab cursor-pointer z-2 !bg-transparent ${clsx(props.className)}`}>
			{props.children}
		</a>
	)
}

export default Tab

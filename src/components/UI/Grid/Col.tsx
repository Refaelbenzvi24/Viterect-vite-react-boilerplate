import type { ReactElementProps } from 'types'


export default (props: ReactElementProps) => {
	return (
		<div {...props} className={`flex flex-col ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	)
}

import type { ReactElementProps } from 'types'


const Col = (props: ReactElementProps) => {
	return (
		<div {...props} className={`flex flex-col ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	)
}

export default Col

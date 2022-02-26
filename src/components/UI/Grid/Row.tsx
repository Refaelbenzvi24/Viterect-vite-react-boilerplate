import type { ReactElementProps } from '../../../types'


export default (props: ReactElementProps) => {
	return (
		<div {...props} className={`flex flex-row ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	)
}

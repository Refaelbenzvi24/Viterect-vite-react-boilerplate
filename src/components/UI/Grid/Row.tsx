import type { ReactElementProps } from '../../../types'


const Row = (props: ReactElementProps) => {
	return (
		<div {...props} className={`flex flex-row ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	)
}

export default Row

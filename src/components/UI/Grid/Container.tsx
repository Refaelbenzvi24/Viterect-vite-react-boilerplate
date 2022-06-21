import type { ReactElementProps } from 'types'


const Container = (props: ReactElementProps) => {
	return (
		<div {...props} className={`flex mx-auto ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	)
}

export default Container

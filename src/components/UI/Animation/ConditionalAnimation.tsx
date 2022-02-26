import { useState, useEffect, ReactElement } from 'react'
import { ReactElementProps } from '../../../types'


interface ConditionalAnimationProps extends ReactElementProps {
	children: ReactElement
	condition: boolean;
	timeout: number;
}

export default (props: ConditionalAnimationProps): JSX.Element => {
	const [render, setRender] = useState(false)

	const { condition, timeout, children } = props

	useEffect(() => {
		if (condition) {
			setTimeout(() => {
				setRender(true)
			}, timeout)
		} else {
			setTimeout(() => {
				setRender(false)
			}, timeout)
		}
	}, [condition])

	return render ? children : <div/>
}

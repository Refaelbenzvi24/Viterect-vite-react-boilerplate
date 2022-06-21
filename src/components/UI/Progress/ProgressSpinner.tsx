import { ImpulseSpinner } from 'react-spinners-kit'
import type { ReactElementProps } from '../../../types'
import clsx from "clsx"


const ProgressSpinner = (props: ReactElementProps) => {
	return (
		<div className="relative h-full">
			<div {...props} className={`absolute top-[50%] left-[50%] ${clsx(props.className)}`}>
				<ImpulseSpinner size={75} backColor="#626262" frontColor="#536473"/>
			</div>
		</div>
	)
}

export default ProgressSpinner

import { ImpulseSpinner } from 'react-spinners-kit'
import type { ReactDivProps } from '../../../types'
import clsx from "clsx"
import { css } from "@emotion/css"
import tw from "twin.macro"


const ProgressSpinner = (props: ReactDivProps) => {
	return (
		<div className={css`${tw`relative h-full`}`}>
			<div {...props} className={`${css`${tw`absolute top-[50%] left-[50%]`}`} ${clsx(props.className)}`}>
				<ImpulseSpinner size={75} backColor="#626262" frontColor="#536473"/>
			</div>
		</div>
	)
}

export default ProgressSpinner

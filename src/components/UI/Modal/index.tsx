import Portal from "../Portal"
import { css } from "@emotion/css"
import tw from "twin.macro"
import clsx from "clsx"
import Backdrop from "../Backdrop"
import Card from "../Cards/Card"
import styled from "@emotion/styled"
import theme from "../Utils/theme"
import { HTMLMotionProps } from "framer-motion"


interface ModalWrapperProps {
	centered?: boolean
}


const ModalWrapper = styled.div(({ centered }: ModalWrapperProps) => [
	css`
		z-index: ${theme.zIndex.modal};
	`,
	centered && tw`flex justify-center items-center`,
	tw`fixed h-full w-full`
])

interface ModalProps extends HTMLMotionProps<"div"> {
	height?: `${number}px` | `${number}%`
	width?: `${number}px` | `${number}%`
	onBackdropClick?: () => void
	centered?: boolean
	shadow?: boolean
}

const Modal = (props: ModalProps) => {
	const { children, className, centered, shadow, height, width, onBackdropClick, ...restProps } = props

	return (
		<Portal>
			<ModalWrapper  {...{ centered }}>
				<Backdrop onClick={onBackdropClick}
				          active={true}/>
				<Card {...restProps} className={`${css`${tw`relative`}`} ${clsx(className)}`}
				      initial={{
					      opacity: 0,
				      }}
				      transition={{
					      duration: 0.4
				      }}
				      animate={{
					      opacity: 1,
				      }}
				      {...{ height, width }}>
					{children}
				</Card>
			</ModalWrapper>
		</Portal>
	)
}

Modal.defaultProps = {
	height: "200px",
	width:  "200px",
}

export default Modal

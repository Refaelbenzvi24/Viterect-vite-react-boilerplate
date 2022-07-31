import theme from "../Utils/theme"
import { isDark } from "../index"
import { css } from "@emotion/css"
import tw from "twin.macro"
import clsx from "clsx"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"


export interface BackdropProps extends HTMLMotionProps<"div"> {
	dark?: boolean,
	active: boolean
}

const Backdrop = ({ dark, active, className, ...restProps }: BackdropProps) => {
	const style = css([
		css`
			background-color: ${theme.colors.dark_200};

			${(dark || isDark()) && css`
				background-color: ${theme.colors.dark_800};
			`}
		`,
		tw`fixed h-full w-full opacity-0 !cursor-default`,
	])

	return (
		<AnimatePresence>
			{active && <motion.div {...restProps}
			                       initial={{
				                       opacity: 0,
			                       }}
			                       transition={{
				                       duration: 0.4,
			                       }}
			                       animate={{
				                       opacity: 0.3,
			                       }}
			                       exit={{
				                       opacity: 0,
			                       }}
			                       className={`${style} ${clsx(className)}`}/>}
		</AnimatePresence>
	)
}

Backdrop.defaultProps = {
	animationTime: 0.4,
}

export default Backdrop

import styled from "@emotion/styled"
import tw from "twin.macro"
import { css } from "@emotion/react"
import { isDark } from "../index"
import theme from "../Utils/theme"
import { HTMLMotionProps, motion } from "framer-motion"


export interface CardProps extends HTMLMotionProps<"div"> {
	dark?: boolean,
	height?: `${number}px` | `${number}%`,
	width?: `${number}px` | `${number}%`
}

const Card = styled(motion.div)(({ dark, height, width }: CardProps) => [
	tw`right-0 origin-top-right rounded-md shadow-lg p-2 overflow-hidden bg-white rounded-md shadow`,
	css`
		background-color: ${theme.colors.white};
		height: ${height};
		width: ${width};
	`,
	(dark || isDark()) && css`
		background-color: ${theme.colors.dark_400};
	`,
	({ className }) => className
])

Card.defaultProps = {
	dark: false,
	height: "300px",
	width: "200px"
}

export default Card

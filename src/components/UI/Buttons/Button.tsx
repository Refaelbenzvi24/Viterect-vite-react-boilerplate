import tw from 'twin.macro'
import styled from "@emotion/styled"
import theme from "../Utils/theme"
import { css } from "@emotion/react"
import { isDark } from "../index"
import { ButtonHTMLAttributes } from "react"
import { motion } from "framer-motion"


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	dark?: boolean
}

const Button = styled(motion.button)(({ dark }: ButtonProps) => [
	tw`rounded-lg block px-4 py-2 mt-2 text-sm font-semibold cursor-pointer border-none bg-transparent`,
	css`
		color: ${theme.colors.gray_900};
		background-color: ${theme.colors.gray_200};

		&:hover {
			background-color: ${theme.colors.light_700};
		}

		&:active {
			background-color: ${theme.colors.light_600};
		}

		&:disabled {
			${tw`opacity-50 cursor-default`}
			&:hover {
				background-color: ${theme.colors.gray_200};
			}
		}
	`,

	(dark || isDark()) && css`
		background-color: ${theme.colors.dark_400};
		color: ${theme.colors.gray_200};

		&:hover {
			color: ${theme.colors.white};
			background-color: ${theme.colors.dark_200};
		}

		&:active {
			background-color: ${theme.colors.dark_100}
		}

		&:disabled {
			color: ${theme.colors.gray_200};

			&:hover {
				background-color: ${theme.colors.dark_400};
			}
		}
	`
])


export default Button



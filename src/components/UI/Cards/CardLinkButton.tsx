import { Link, LinkProps } from 'react-router-dom'
import styled from "@emotion/styled"
import tw from "twin.macro"
import clsx from "clsx"
import { motion } from "framer-motion"
import i18n from "i18next"
import { isDark } from "../index"
import { css } from "@emotion/react"
import theme from "../Utils/theme"


const CardLinkWrapper = styled(motion.div)(({ dir, dark }: { dir?: "ltr" | "rtl", dark?: boolean }) => [
	tw`flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:block`,

	(dir || i18n.dir()) === "rtl" && tw`text-right`,
	(dir || i18n.dir()) === "ltr" && tw`text-left`,

	css`
		background-color: transparent;

		&:hover {
			background-color: ${theme.colors.gray_200};
			color: ${theme.colors.gray_900};
		}

		&:focus {
			${tw`outline-none`}

			background-color: ${theme.colors.gray_200};
			color: ${theme.colors.gray_900};
		}
	`,
	(dark || isDark()) && css`
		&:focus {
			background-color: ${theme.colors.gray_600};
			color: ${theme.colors.white};
		}

		&:hover {
			background-color: ${theme.colors.gray_600};
			color: ${theme.colors.white};
		}
	`
])

interface CardLinkProps extends LinkProps {
	dark?: boolean
	dir?: "ltr" | "rtl"
}


const CardLinkButton = ({ children, className, to, dir, dark, ...restProps }: CardLinkProps) => {
	return (
		<CardLinkWrapper {...{ dir, dark }} className={clsx(className)}>
			<Link to={to} {...restProps}>
				{children}
			</Link>
		</CardLinkWrapper>
	)
}

export default CardLinkButton

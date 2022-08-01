import styled from "@emotion/styled"
import { motion } from "framer-motion"
import tw from "twin.macro"
import { css } from "@emotion/react"
import theme from "../Utils/theme"
import { isDark } from "../index"


const Label = styled(motion.span)(({ dark }: { dark?: boolean }) => [
	css`
		color: ${theme.colors.gray_500};
	`,

	(dark || isDark()) && css`
		color: ${theme.colors.gray_300};
	`,

	tw`text-sm !w-fit px-[2px]`,
])

export default Label

import styled from "@emotion/styled"
import { motion } from "framer-motion"
import tw from "twin.macro"
import { css } from "@emotion/react"
import theme from "../Utils/theme"
import { isDark } from "../index"


const Label = styled(motion.label)(({ dark }: { dark?: boolean }) => [
	css`
		color: ${theme.colors.gray_500};
	`,

	(dark || isDark()) && css`
		color: ${theme.colors.gray_300};
	`,

	tw`px-2 text-sm`,
])

export default Label

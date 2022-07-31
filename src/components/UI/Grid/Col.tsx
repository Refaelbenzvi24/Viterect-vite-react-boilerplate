import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { css } from "@emotion/react"

interface ColProps {
	grid?: boolean
}

const Col = styled(motion.div)(({ grid }: ColProps) => [
	css`
		display: flex;
		flex-direction: column;
	`,

	grid && css`
		display: grid;
	`
])

export default Col

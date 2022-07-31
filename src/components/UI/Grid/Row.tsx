import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { css } from "@emotion/react"


interface RowProps {
	grid?: boolean
}

const Row = styled(motion.div)(({ grid }: RowProps) => [
	!grid && css`
		display: flex;
		flex-direction: row;
	`,

	grid && css`
		display: grid;
	`
])



export default Row

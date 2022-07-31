import type { ReactDivProps } from '../../../types'
import clsx from "clsx"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { motion } from "framer-motion"


const Divider = styled(motion.hr)`
	${tw`h-0 mx-4 my-2 border border-solid border-blueGray-100`}
`

export default Divider

import styled from "@emotion/styled"
import tw from "twin.macro"
import { motion } from "framer-motion"


const LongDivider = styled(motion.hr)`
	${tw`flex-row border-t border-gray-700`}
`

export default LongDivider

import tw from "twin.macro"
import styled from "@emotion/styled"
import { motion } from "framer-motion"


const Tab = styled(motion.a)(() => [
	tw`tab cursor-pointer z-[11] !bg-transparent`
])

export default Tab

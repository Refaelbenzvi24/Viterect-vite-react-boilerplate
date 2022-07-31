import styled from "@emotion/styled"
import { HTMLMotionProps, motion } from "framer-motion"
import tw from "twin.macro"
import { css } from "@emotion/react"
import theme from "../Utils/theme"
import { isDark } from "../index"
import HelperText from "./HelperText"
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from "react"
import Label from "./Label"
import ConditionalLabel from "./ConditionalLabel"


export const TextFieldInput = styled(motion.input)(({ dark, centered }: { dark?: boolean, centered?: boolean }) => [
	tw`w-full p-2 border border-2 rounded-md shadow-sm resize-none place-self-center`,
	centered && tw`text-center`,

	css`
		background-color: ${theme.colors.gray_50};
		border-color: ${theme.colors.gray_200};

		&:focus {
			border-color: ${theme.colors.gray_300};

			${tw`outline-none ring-transparent`}
		}
	`,

	(dark || isDark()) && css`
		background-color: ${theme.colors.dark_800};
		border-color: ${theme.colors.dark_400};

		&:focus {
			border-color: ${theme.colors.dark_200};
		}
	`
])



interface TextFieldProps extends HTMLMotionProps<"input"> {
	placeholder?: string
	persistentLabel?: boolean
	centered?: boolean
	height?: number | `${number}px`
	value?: string | ReadonlyArray<string> | number | undefined
	error?: boolean
	helperText?: string
	label?: string
}

const TextField = (props: TextFieldProps) => {
	const { height, className, label, persistentLabel, placeholder, centered, onChange, value, error, helperText, ...restProps } = props

	const sectionRef = useRef(null)

	useEffect(() => {
		sectionRef.current && autoAnimate(sectionRef.current)
	}, [sectionRef])


	return (
		<section ref={sectionRef}>
			<ConditionalLabel {...{ label, persistentLabel, value }}/>

			<TextFieldInput {...restProps}
			                placeholder={placeholder || persistentLabel === false ? label : ''}
			                {...{ height, centered, onChange, value }}/>

			{helperText && <HelperText {...{ error }}>{helperText}</HelperText>}
		</section>
	)
}

export default TextField

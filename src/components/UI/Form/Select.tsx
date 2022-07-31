import { useEffect, useRef, useState } from "react"
import autoAnimate from "@formkit/auto-animate"
import HelperText from "./HelperText"
import theme from "../Utils/theme"
import { isDark } from "../index"
import Select, {
	defaultTheme, ControlProps, components, DropdownIndicatorProps, SingleValueProps, ContainerProps, MenuProps, Props
} from "react-select"
import { css, cx } from "@emotion/css"
import { conditionalRotate } from "../Utils/utils"
import { transformTransition } from "../Utils/transitions"
import produce from "immer"
import Label from "./Label"


const DropdownIndicator = (props: DropdownIndicatorProps<any>) => {
	const { isFocused } = props

	return (
		<components.DropdownIndicator {...props}>
			<div className={css`
				${[
					theme.transitions([transformTransition('300ms')]),
					theme.transforms([
						conditionalRotate(isFocused, 180),
					])
				]}
			`}>
				<IconIonChevronDown/>
			</div>
		</components.DropdownIndicator>
	)
}

const SingleValue = (props: SingleValueProps<any>) => {
	const { children, ...restProps } = props

	return (
		<components.SingleValue {...restProps}
		                        className={css`
			                        ${isDark() && css`
				                        color: ${theme.colors.gray_300} !important;
			                        `
			                        }
		                        `}>
			{children}
		</components.SingleValue>
	)
}

const Control = (props: ControlProps<any>) => {
	const { children, isFocused, ...restProps } = props

	return (
		<components.Control {...{ ...restProps, isFocused }}
		                    className={css`
			                    background-color: ${theme.colors.white};

			                    ${isDark() && css`
				                    background-color: ${theme.colors.dark_800} !important;
			                    `}
		                    `}
		                    theme={produce(props.theme, draft => {
			                    draft.borderRadius     = 8
			                    draft.colors.primary   = theme.colors.gray_300
			                    draft.colors.neutral20 = theme.colors.gray_200

			                    if (isDark()) {
				                    draft.colors.primary   = theme.colors.dark_200
				                    draft.colors.neutral20 = theme.colors.dark_400
			                    }
		                    })}>
			{children}
		</components.Control>
	)
}

const SelectContainer = (props: ContainerProps) => {
	const { children, ...restProps } = props

	return (
		<components.SelectContainer {...restProps}
		                            theme={produce(props.theme, draft => {
			                            draft.colors.primary = theme.colors.gray_300
		                            })}
		                            className={css`
			                            background-color: ${theme.colors.white} !important;

			                            ${isDark() && css`
				                            background-color: ${theme.colors.dark_800} !important;
			                            `}
		                            `}>
			{children}
		</components.SelectContainer>
	)
}

const Menu = (props: MenuProps) => {
	const { children, ...restProps } = props

	return (
		<components.Menu {...restProps}
		                 theme={produce(props.theme, draft => {
			                 draft.colors.primary25 = theme.colors.gray_200
		                 })}
		                 className={css`
			                 background-color: ${theme.colors.white} !important;

			                 ${isDark() && css`
				                 background-color: ${theme.colors.dark_800} !important;
			                 `}
		                 `}>
			{children}
		</components.Menu>
	)
}

interface SelectProps extends Omit<Props, 'isRtl'> {
	label?: string
	persistentLabel?: boolean
	dir?: "rtl" | "ltr"
	options: { label: string, value: string }[]
	error?: boolean
	helperText?: string
}

const SelectWithLabel = (props: SelectProps) => {
	const { label, dir, placeholder, persistentLabel, onFocus, onBlur, error, value, helperText, ...restProps } = props

	const [isFocused, setIsFocused] = useState(false)
	const sectionRef                = useRef(null)

	useEffect(() => {
		sectionRef.current && autoAnimate(sectionRef.current)
	}, [sectionRef])

	return (
		<section ref={sectionRef}>
			{label && ((isFocused || value) || persistentLabel) && <Label>{label}</Label>}
			<Select blurInputOnSelect
			        {...restProps}
			        isSearchable={false}
			        placeholder={placeholder || !isFocused && (label)}
			        onFocus={(event) => {
				        setIsFocused(true)
				        onFocus && onFocus(event)
			        }}
			        onBlur={(event) => {
				        setIsFocused(false)
				        onBlur && onBlur(event)
			        }}
			        isRtl={dir && dir === "rtl"}
			        theme={produce(defaultTheme, draft => {
				        if (isDark()) {
					        draft.colors.primary   = theme.colors.dark_400
					        draft.colors.primary50 = theme.colors.dark_300
					        draft.colors.primary25 = theme.colors.dark_100
				        }
			        })}
			        components={{
				        DropdownIndicator,
				        Control,
				        SingleValue,
				        SelectContainer,
				        Menu,
			        }}/>
			{helperText && <HelperText {...{ error }}>{helperText}</HelperText>}
		</section>
	)
}

export default SelectWithLabel

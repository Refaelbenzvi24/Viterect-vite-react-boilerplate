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
import tw from "twin.macro"
import clsx from "clsx"
import { FormikErrors, FormikTouched } from "formik"


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
			                    ${tw`!cursor-pointer`}
			                    background-color: ${theme.colors.gray_50} !important;
			                    transition-property: none !important;

			                    ${isDark() && css`
				                    background-color: ${theme.colors.dark_800} !important;
			                    `}
		                    `}
		                    theme={produce(props.theme, draft => {
			                    draft.borderRadius     = 8
			                    draft.colors.primary   = theme.colors.gray_300
			                    draft.colors.neutral20 = theme.colors.gray_200
			                    draft.colors.neutral30 = theme.colors.gray_200

			                    if (isDark()) {
				                    draft.colors.primary   = theme.colors.dark_200
				                    draft.colors.neutral20 = theme.colors.dark_400
				                    draft.colors.neutral30 = theme.colors.dark_400
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

interface SelectProps extends Omit<Props, 'isRtl' | 'onChange'> {
	label?: string
	touched?: FormikTouched<any> | boolean
	persistentLabel?: boolean
	dir?: "rtl" | "ltr"
	options: { label: string, value: string }[]
	error?: boolean
	onBlur?: () => void
	onChange?: (value: { label: string, value: string }) => void
	helperText?: string | FormikErrors<any>
}

const SelectWithLabel = (props: SelectProps) => {
	const { label, dir, className, placeholder, persistentLabel, onFocus, onBlur, onChange, touched, error, value, helperText, ...restProps } = props

	const [isFocused, setIsFocused] = useState(false)
	const wasFocused                = useRef(false)
	const firstUpdate               = useRef(true)
	const sectionRef                = useRef(null)

	const blurController = () => {
		if (!firstUpdate.current && wasFocused.current && !isFocused) {
			onBlur && onBlur()
		}

		if (!firstUpdate.current) {
			wasFocused.current = true
		}
		firstUpdate.current = false
	}

	useEffect(() => {
		blurController()
	}, [isFocused])


	return (
		<section ref={sectionRef}>
			{label && ((isFocused || !!value) || persistentLabel) && <Label
				initial={{
					opacity: 0,
				}}
				transition={{
					duration: 0.2
				}}
				animate={{
					opacity: 1,
				}}
				exit={{
					opacity: 0,
				}}>
				{label}
			</Label>}
			<div className={`${css`
				${(label && ((isFocused || !!value) || persistentLabel)) ? tw`mt-0` : tw`mt-6`}
				${helperText ? tw`mb-0` : tw`mb-6`}
			`} ${clsx(className)}`}>
				<Select blurInputOnSelect
				        {...restProps}
				        isSearchable={false}
				        placeholder={placeholder || !isFocused && (label)}
				        onFocus={(event) => {
					        setIsFocused(true)
					        onFocus && onFocus(event)
				        }}
				        onBlur={() => {
					        setIsFocused(false)
				        }}
				        onChange={(value) => !!onChange && onChange(value as { label: string, value: string })}
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
			</div>
			{helperText && <HelperText
				initial={{
					opacity: 0,
				}}
				transition={{
					duration: 0.2
				}}
				animate={{
					opacity: 1,
				}}
				exit={{
					opacity: 0,
				}}
				{...{ error }}>
				{helperText}
			</HelperText>}
		</section>
	)
}

export default SelectWithLabel

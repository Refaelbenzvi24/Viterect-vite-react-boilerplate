import { ButtonHTMLAttributes, DetailedHTMLProps, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Tooltip from '../Tooltip/Tooltip'
import IconButton from '../Buttons/IconButton'
import type { ReactDivProps } from 'types'
import clsx from "clsx"




const ThemeToggle = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const { className }       = props
	const { theme, setTheme } = useContext(ThemeContext)

	const themeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
			<IconButton {...props} id="theme-toggle-button" onClick={themeToggle}>
				{theme === 'light' ? <IconCarbonLight/> : <IconCarbonMoon/>}
			</IconButton>
	)
}

export default ThemeToggle

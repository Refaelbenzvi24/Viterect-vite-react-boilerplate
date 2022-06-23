import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ReactElementProps } from 'types'
import { IconButton, Tooltip } from "@mui/material"


const ThemeToggle = (props: { iconSize: string } & ReactElementProps) => {
	const { iconSize }        = props
	const { theme, setTheme } = useContext(ThemeContext)
	const { t }               = useTranslation()

	const themeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	const tooltipTitle = t('Theme')

	return (
		<Tooltip title={tooltipTitle} placement="top">
			<IconButton id="theme-toggle-button" style={{ fontSize: iconSize }} onClick={themeToggle}>
				{theme === 'light' ? <IconCarbonLight/> : <IconCarbonMoon/>}
			</IconButton>
		</Tooltip>
	)
}

export default ThemeToggle

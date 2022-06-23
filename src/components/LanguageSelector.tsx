import type { Language } from 'plugins/i18n'
import type { ReactElementProps } from 'types'
import { LocalStorage } from "../modules/LocalStorage"
import { IconButton, Tooltip } from "@mui/material"


const LanguageSelector = (props: { iconSize: string } & ReactElementProps) => {
	const { iconSize } = props
	const { t, i18n }  = useTranslation()

	const changeLanguage = async (language: Language): Promise<void> => {
		await i18n.changeLanguage(language)
		LocalStorage.setLanguage(language)
		document.dir = i18n.dir()
	}

	const languageToggle = async (): Promise<void> => {
		await changeLanguage(i18n.language === 'en' ? 'he' : 'en')
	}

	const tooltipTitle = t('Language')

	return (
		<Tooltip title={tooltipTitle} placement="top">
			<IconButton id="language-toggle-button" style={{ fontSize: iconSize }} onClick={languageToggle}>
				<IconCarbonLanguage/>
			</IconButton>
		</Tooltip>
	)
}

export default LanguageSelector

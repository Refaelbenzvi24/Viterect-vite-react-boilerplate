import type { Language } from 'plugins/i18n'
import IconButton from './UI/Buttons/IconButton'
import Tooltip from './UI/Tooltip/Tooltip'
import type { ReactDivProps } from 'types'
import { LocalStorage } from "../modules/LocalStorage"
import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect } from "react"
import { useMain } from "../context"


const LanguageSelector = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const { i18n }                 = useTranslation()
	const { setDisableAnimations } = useMain()

	const changeLanguage = async (language: Language): Promise<void> => {
		setDisableAnimations(true)
		await i18n.changeLanguage(language)
		LocalStorage.setLanguage(language)
		document.dir = i18n.dir()
	}

	useEffect(() => {
		setDisableAnimations(false)
	})

	const languageToggle = async (): Promise<void> => {
		await changeLanguage(i18n.language === 'en' ? 'he' : 'en')
	}

	return (
		<IconButton {...props} className="block" id="language-toggle-button" onClick={languageToggle}>
			<IconCarbonLanguage/>
		</IconButton>
	)
}

export default LanguageSelector

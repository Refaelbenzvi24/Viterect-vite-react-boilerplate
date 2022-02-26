import type { Language } from 'plugins/i18n'
import IconButton from './UI/Buttons/IconButton'
import Tooltip from './UI/Tooltip/Tooltip'
import type { ReactElementProps } from 'types'


export default (props: ReactElementProps) => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (language: Language): void => {
		i18n.changeLanguage(language)
			.then(() => {
				document.dir = i18n.dir()
			})
			.catch((error) => {
				throw error
			})
	}

	const languageToggle = () => {
		changeLanguage(i18n.language === 'en' ? 'he' : 'en')
	}

	return (
		<div {...props}>
			<Tooltip className="bottom-[200%] left-[-80%]" tooltip={t('Language')}>
				<IconButton className="block" id="language-toggle-button" onClick={() => languageToggle()}>
					<IconCarbonLanguage/>
				</IconButton>
			</Tooltip>
		</div>
	)
}

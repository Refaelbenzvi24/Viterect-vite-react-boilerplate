import React from 'react'
import type {Language} from '../plugins/i18n'
import i18n from '../plugins/i18n'
import {useTranslation} from 'react-i18next'
import {LocalStorage} from '../modules/LocalStorage'
import IconButton from './UI/Buttons/IconButton'
import Tooltip from './UI/Tooltip'
import type {ReactElementProps as ReactElementProperties} from '../types'

export default function (properties: ReactElementProperties) {
	const {t}                     = useTranslation();
	const [language, setLanguage] = useState(LocalStorage.getLanguage())
	
	const languageToggle = () => {
		if (language === 'en') {
			changeLanguage('he')
		} else changeLanguage('en')
	};
	
	const changeLanguage = (language: Language): void => {
		setLanguage(language)
		i18n.changeLanguage(language).then()
		document.dir = i18n.dir()
	};
	
	return (
	  <div {...properties}>
		  <Tooltip className="bottom-[200%] left-[-80%]" tooltip={t('Language')}>
			  <IconButton className="block" onClick={() => languageToggle()}>
				  <IconCarbonLanguage/>
			  </IconButton>
		  </Tooltip>
	  </div>
	);
}

import i18n from 'i18next'
import { useEffect } from 'react'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import moment from 'moment'
import { LocalStorage } from 'modules/LocalStorage'


export type Language = 'en' | 'he';

const language = (navigator.language).toString().includes('-') ? (navigator.language).toString().split('-')[0] as Language : (navigator.language).toString() as Language

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng:               language,
		fallbackLng:       'en',
		returnEmptyString: false,
		keySeparator:      '.',
		interpolation:     {
			escapeValue: false,
			format:      (value, format): string => {
				if (value instanceof Date) {
					return moment(value)
						.format(format)
				}
				return value as string
			},
		},
		react:             {
			useSuspense: true,
		},
		backend:           {
			loadPath:       '/locales/{{lng}}/{{ns}}.yaml',
			requestOptions: {
				mode:        'cors',
				credentials: 'same-origin',
				cache:       'default',
			},
		},
	})
	.then()
	.catch((error) => {
		throw error
	})

export const i18nInstall = () => {
	const { i18n } = useTranslation()

	useEffect(() => {
		const language = LocalStorage.getLanguage()

		if (language.includes('-')) {
			LocalStorage.setLanguage('en')
			i18n.changeLanguage('en')
				.then(() => {
					document.dir = i18n.dir('en')
				})
				.catch((error) => {
					throw error
				})
		}

		window.document.dir = i18n.dir(language)
	}, [])
}

//  when having mixed directions in text
//
//   {
//     "CC_LAST_DIGITS": "מס׳ כרטיס:\u200E **** **** **** 1234"
//   }
//
// left-to-right mark: ‎ or ‎ (U+200E)
//
// right-to-left mark: ‏ or ‏ (U+200F)

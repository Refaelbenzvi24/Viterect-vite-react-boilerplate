import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useEffect} from "react";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import moment from 'moment';
import {LocalStorage} from "modules/LocalStorage";

export type Language = 'en' | 'he';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
	  fallbackLng:       'en',
	  returnEmptyString: false,
	  keySeparator:      '.',
	  interpolation:     {
		  escapeValue: false,
		  format:      (value, format) => {
			  if (value instanceof Date) {
				  return moment(value).format(format);
			  }
			  return value;
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
			  cache:       'default'
		  }
	  },
  })
  .then()

export const i18nInstall = () => {
	const {i18n} = useTranslation()
	
	useEffect(() => {
		window.document.dir = i18n.dir(LocalStorage.getLanguage())
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

export {default} from 'i18next';

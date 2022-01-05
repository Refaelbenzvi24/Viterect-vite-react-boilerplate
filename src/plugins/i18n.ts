import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import moment from "moment";

export type Language = 'en' | 'he'
export type LanguageDir = 'ltr' | 'rtl'

// i19n config
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        returnEmptyString: false,
        keySeparator: '.',
        interpolation: {
            format: (value, format) => {
                if (value instanceof Date)
                    return moment(value).format(format);
                return value;
            }
        },
        react: {
            useSuspense: true
        },
        backend: {
            loadPath: '/translations/{{lng}}/{{ns}}.yaml',
        },
    }).then()

export const i18nInstall = () => {
    useEffect(() => {
        window.document.dir = i18n.dir()
    }, [i18n.dir()])
}

export default i18n


//  when having mixed directions in text
//
//   {
//     "CC_LAST_DIGITS": "מס׳ כרטיס:\u200E **** **** **** 1234"
//   }
//
// left-to-right mark: ‎ or ‎ (U+200E)
//
// right-to-left mark: ‏ or ‏ (U+200F)

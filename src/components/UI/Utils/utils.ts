import { css } from "@emotion/css"
import i18n from "i18next"


type CssUnit = number | `${'-' | ''}${number}px` | `${'-' | ''}${number}%` | `${'-' | ''}${number}rem`

type conditionalMargins = (condition: boolean, margin: CssUnit, dir?: "ltr" | "rtl") => string


export const reverseCssUnit = (cssUnit: CssUnit) => {
	if (typeof cssUnit !== "number") {
		const units = cssUnit.match(/[a-zA-Z|%]+|[-0-9]+/g) as [string, string]

		return (-1 * Number(units[0])) + units[1]
	}
}

export const conditionalMargins: conditionalMargins = (condition, margin, dir) => css`
	margin-right: ${((dir || i18n.dir()) === 'rtl' ? (condition ? `${margin}` : 0) : 0) || 0};
	margin-left: ${((dir || i18n.dir()) === 'ltr' ? (condition ? `${margin}` : 0) : 0) || 0};
`

export const conditionalTranslate = (condition: boolean, translate: CssUnit, dir?: "ltr" | "rtl") => `${condition ? ((dir || i18n.dir()) === 'ltr' ? `translateX(${translate})` : `translateX(${reverseCssUnit(translate)})`) : `translateX(0)`}`

export const conditionalRotate = (condition: boolean, rotate: number) => condition ? `rotate(${rotate}deg)` : ''

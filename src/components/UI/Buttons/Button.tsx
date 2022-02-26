import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import clsx from 'clsx'


const style = 'rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 '
	+ 'block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent '
	+ 'dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900'
	+ 'focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'


export default (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const { children, className } = props

	return <button {...props} className={style + clsx(className)} type="button">{children}</button>
}


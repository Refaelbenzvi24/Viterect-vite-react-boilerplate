import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'


interface CardLinkButtonProps {
	children: ReactElement | string;
	to: string
}

export default ({ children, to }: CardLinkButtonProps) => {
	return (
		<Link
			to={to}
			className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left
              bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white
              dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:blockhover:text-gray-900 focus:text-gray-900
              hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
		>
			{children}
		</Link>
	)
}

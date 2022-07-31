import { Link, LinkProps } from 'react-router-dom'
import type { ReactElement } from 'react'
import styled from "@emotion/styled"
import tw from "twin.macro"
import clsx from "clsx"



const CardLinkWrapper = styled.div`
	${tw`flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left
              bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white
              dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900
              hover:bg-gray-200 focus:bg-gray-200 focus:outline-none `}
`

const CardLinkButton = ({ children, className, to, ...restProps }: LinkProps) => {
	return (
		<CardLinkWrapper className={clsx(className)}>
			<Link to={to} {...restProps}>
				{children}
			</Link>
		</CardLinkWrapper>
	)
}

export default CardLinkButton

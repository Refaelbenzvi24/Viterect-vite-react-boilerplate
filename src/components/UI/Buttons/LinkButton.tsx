import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import i18n from 'i18next'
import clsx from 'clsx'
import styled from "@emotion/styled"
import tw, { css } from "twin.macro"


const Clickable = styled.div`
`

const LinkWrapper = styled.div(({ dir }: { dir?: string }) => [
	tw`px-6 cursor-pointer block text-sm font-semibold dark:text-white
	dark:hover:(bg-gray-100/[0.1]) dark:focus:bg-gray-600 dark:focus:text-gray-100 dark:hover:text-gray-200
	hover:text-gray-500 focus:text-gray-400 hover:(bg-gray-100/[0.1]) focus:bg-gray-200 focus:outline-none`,

	css`
		.link-element {
			${((dir || i18n.dir()) === 'ltr') && tw`hover:translate-x-2`}
			${((dir || i18n.dir()) === 'rtl') && tw`hover:(-translate-x-2)`}
			${tw`block px-4 py-2 mt-2 transform transition-transform ease-in duration-200 opacity-100`}
		}
	`
])

const LinkButton = (props: LinkProps) => {
	const { to, children, className, dir, ...rest } = props
	const linkWrapperProps                          = { dir }

	return (
		<LinkWrapper className={clsx(className)} {...linkWrapperProps}>
			<Link className="link-element" {...rest} to={to}>
				{children}
			</Link>
		</LinkWrapper>
	)
}

export default LinkButton

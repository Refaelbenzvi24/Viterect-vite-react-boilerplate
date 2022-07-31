import type {
	CSSProperties, ReactNode, HTMLAttributes, DetailedHTMLProps,
} from 'react'


export interface ReactComponentProps {
	children: ReactNode
	dir?: 'ltr' | 'rtl'
}

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type StyleObject = { [key: string]: CSSProperties }

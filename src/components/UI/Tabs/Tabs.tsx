import {
	CSSProperties, useEffect, useState, useRef,
} from 'react'
import { css } from "@emotion/css"
import tw from "twin.macro"
import { HTMLMotionProps, motion } from "framer-motion"


const Tabs = (props: HTMLMotionProps<"div">) => {
	const {className, children, ...restProps} = props
	const [tabsIndex, setTabsIndex] = useState<number | null>(1)
	const [style, setStyle]         = useState<CSSProperties>({})
	const tabsRef                   = useRef<HTMLDivElement>(null)
	let tabs: NodeListOf<HTMLElement>
	const { i18n }                  = useTranslation()
	const dir                       = props.dir ?? i18n.dir()

	useEffect(() => {
		if (tabsIndex && props.children && tabsRef.current) {
			tabs = tabsRef.current.querySelectorAll('a')

			tabs.forEach((tab, index) => {
				tab.addEventListener('click', () => {
					setTabsIndex(index + 1)
				})
			})
		}
	}, [])

	const controlActiveTab = () => {
		if (tabsIndex && props.children && tabsRef.current) {
			tabs         = tabsRef.current.querySelectorAll('a')
			let distance = 0

			tabs.forEach((tab, index) => {
				if (dir === 'ltr' && index < tabsIndex - 1) {
					distance += tab.offsetWidth
				}

				if (dir === 'rtl' && index < tabsIndex - 1) {
					distance -= tab.offsetWidth
				}

				tab.classList.remove('tab-active')
			})

			tabs[tabsIndex - 1].classList.add('tab-active')

			const style = {
				width:     tabs[tabsIndex - 1].clientWidth,
				transform: `translate(${distance}px)`,
			}

			setStyle(style)
		}
	}

	useEffect(() => {
		controlActiveTab()
	}, [tabsIndex])

	return (
		<motion.div {...restProps} className={`${css`${tw`tabs-boxed inline-block`}`} ${className}`}>
			<span
				className={css`${tw`absolute bg-sky-800 h-8 transform transition-all ease-in-out duration-500 transform rounded`}`}
				style={style}/>

			<div ref={tabsRef}>
				{props.children}
			</div>
		</motion.div>
	)
}

export default Tabs

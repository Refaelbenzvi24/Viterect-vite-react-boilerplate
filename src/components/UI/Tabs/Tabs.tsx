import {
	CSSProperties, useEffect, useState, useRef,
} from 'react'
import { ReactComponentProps } from '../../../types'


export default (props: ReactComponentProps) => {
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

	useEffect(() => {
		if (tabsIndex && props.children && tabsRef.current) {
			tabs         = tabsRef.current.querySelectorAll('a')
			let distance = 0

			tabs.forEach((tab, index) => {
				if (dir === 'ltr') {
					if (index < tabsIndex - 1) {
						distance += tab.offsetWidth
					}
				} else if (index < tabsIndex - 1) {
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
	}, [tabsIndex])

	return (
		<div className="tabs tabs-boxed inline-block z-1">
			<span
				className="absolute bg-sky-800 h-8 transform transition-all ease-in-out duration-400 transform rounded"
				style={style}/>

			<div ref={tabsRef}>
				{props.children}
			</div>
		</div>
	)
}

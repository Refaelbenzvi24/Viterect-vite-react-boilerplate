import { useState } from 'react'
import Tab from '../components/UI/Tabs/Tab'
import Tabs from '../components/UI/Tabs/Tabs'
import Error404 from '../components/UI/ErrorPages/404'
import Error403 from '../components/UI/ErrorPages/403'
import Error404ServerSide from '../components/UI/ErrorPages/404ServerSide'
import ConditionalAnimation from '../components/UI/Animation/ConditionalAnimation'
import clsx from 'clsx'
import Subtitle from '../components/UI/Typograpy/Subtitle'


const creditItems: Record<string, { creditName: string; creditLink: string }> = {
	404:             {
		creditName: 'helloChad',
		creditLink: 'https://codepen.io/hellochad',
	},
	403:             {
		creditName: 'marianab',
		creditLink: 'https://codepen.io/marianab',
	},
	'404ServerSide': {
		creditName: 'eroxburgh',
		creditLink: 'https://codepen.io/eroxburgh',
	},
}

export default () => {
	const [tab, setTab]       = useState('404')
	const [credit, setCredit] = useState(creditItems['404'])
	const {
		      creditName,
		      creditLink,
	      }                   = credit

	const changeTab = (tab: string) => {
		setTab(tab)
		setCredit(creditItems[tab])
	}

	return (
		<div dir="ltr">
			<div className="flex justify-center pt-5 fade-in z-3">
				<Tabs dir="ltr">
					<Tab onClick={() => changeTab('404')}>
						404
					</Tab>
					<Tab onClick={() => changeTab('403')}>
						403
					</Tab>
					<Tab onClick={() => changeTab('404ServerSide')}>
						404 Server Side
					</Tab>
				</Tabs>
			</div>

			<div className="absolute flex w-full h-full bottom-0 justify-center items-end">
				<Subtitle className="justify-self-center z-3 mb-5">
					Credit to
					{' '}
					{' '}
					<a className="font-bold" href={creditLink}>
						@
						{creditName}
					</a>
				</Subtitle>
			</div>

			<div className="absolute w-full h-full top-0">
				<ConditionalAnimation condition={(tab === '404')} timeout={400}>
					<Error404 className={clsx(
						(tab !== '404') && '!opacity-0 ease-in-out',
						'transition-all duration-400 fade-in',
					)}
					/>
				</ConditionalAnimation>

				<ConditionalAnimation condition={(tab === '403')} timeout={400}>
					<Error403
						className={clsx(
							(tab !== '403') && '!opacity-0',
							'transition-all duration-400 fade-in',
						)}
					/>
				</ConditionalAnimation>

				<ConditionalAnimation condition={(tab === '404ServerSide')} timeout={400}>
					<Error404ServerSide className={clsx(
						(tab !== '404ServerSide') && '!opacity-0 ease-in-out',
						'transition-all duration-800 fade-in',
					)}
					/>
				</ConditionalAnimation>
			</div>

		</div>
	)
}

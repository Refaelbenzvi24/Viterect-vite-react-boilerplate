import { useState } from 'react'
import Tab from '../components/UI/Tabs/Tab'
import Tabs from '../components/UI/Tabs/Tabs'
import Error404 from '../components/UI/ErrorPages/404'
import Error403 from '../components/UI/ErrorPages/403'
import Error404ServerSide from '../components/UI/ErrorPages/404ServerSide'
import Subtitle from '../components/UI/Typograpy/Subtitle'
import Error500Page from "../components/UI/ErrorPages/500"
import SpaceParticles from "../components/UI/ErrorPages/SpaceParticles"
import { motion } from "framer-motion"
import { css } from "@emotion/css"
import tw from "twin.macro"


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
	500:             {
		creditName: 'quinlo',
		creditLink: 'https://codepen.io/quinlo',
	}
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
			{tab !== '500' && <SpaceParticles/>}

			<motion.div className={css`${tw`flex justify-center w-full pt-5 absolute z-[50]`}`}
			            initial={{
				            opacity: 0,
				            y:       -40
			            }}
			            transition={{
				            duration: 1.2,
			            }}
			            animate={{
				            opacity: 1,
				            y:       0
			            }}>
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
					<Tab onClick={() => changeTab('500')}>
						500
					</Tab>
				</Tabs>
			</motion.div>

			<div className="absolute flex w-full h-full bottom-0 justify-center items-end">
				<Subtitle className="justify-self-center mb-5 z-[4]">
					Credit to&nbsp;

					<a className="font-bold" href={creditLink}>{`@${creditName}`}</a>
				</Subtitle>
			</div>


			<div className="absolute w-full h-full top-0">
				{tab === '404' && <Error404/>}

				{tab === '403' && <Error403/>}

				{tab === '404ServerSide' && <Error404ServerSide/>}

				{tab === '500' && <Error500Page/>}
			</div>
		</div>
	)
}

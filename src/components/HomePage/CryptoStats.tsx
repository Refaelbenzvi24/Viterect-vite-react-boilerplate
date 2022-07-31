import { Col, Row } from '../UI/Grid'
import Subtitle from '../UI/Typograpy/Subtitle'
import type { CoinStats } from 'services/CoinRanking/types'
import NumberTooltip from "../UI/Tooltip/NumberTooltip"
import { css } from "@emotion/css"
import tw from "twin.macro"


interface CryptoStatsProps {
	stats: CoinStats | undefined;
}

const CryptoStats = ({ stats }: CryptoStatsProps) => {
	const { t, i18n } = useTranslation()

	const dictionary: { [key: string]: string } = {
		total:          t('Total Cryptocurrencies'),
		totalExchanges: t('Total Exchanges'),
		totalMarketCap: t('Total Market Cap'),
		total24hVolume: t('Total 24h Volume'),
		totalMarkets:   t('Total Markets'),
	}

	return (
		<Row className={`${css`${tw`pt-5 px-2 justify-between grid-flow-row  grid-cols-2 w-full`}`}`}
		     grid
		     initial={{
			     x: `${i18n.dir() === 'ltr' ? '-50' : '50'}`,
		     }}
		     transition={{
			     duration: 0.6,
		     }}
		     animate={{
			     x: 0,
		     }}>
			{
				Object.keys(dictionary)
					.map((key) => (
						<Col className="pt-4" key={`${key}-title`}>
							<Subtitle id={`${key}-title`}>
								{dictionary[key]}
							</Subtitle>
							<NumberTooltip id={key} number={stats ? stats[key as keyof CoinStats] : 0}/>
						</Col>
					))
			}
		</Row>
	)
}

export default CryptoStats

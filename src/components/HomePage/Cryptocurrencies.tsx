import Row from '../UI/Grid/Row'
import Col from '../UI/Grid/Col'
import Card from '../UI/Cards/Card'
import Subtitle from '../UI/Typograpy/Subtitle'
import millify from 'millify'
import type { Coin } from 'services/CoinRanking/types'
import clsx from "clsx"


const Cryptocurrencies = ({ coins }: { coins: Coin[] | undefined }) => {
	const { t } = useTranslation()

	return (
		<Row grid className="pt-5 px-1
						justify-between
						grid
					  grid-flow-row w-full
						2xl:grid-cols-5
						xl:grid-cols-4
						md:grid-cols-3
						sm:grid-cols-2
						xs:grid-cols-1"
		     initial={{
			     y: 40,
		     }}
		     transition={{
			     duration: 0.6,
		     }}
		     animate={{
			     y: 0,
		     }}>
			{coins && coins.length > 0
				&& (coins.map((coin, index) => (
					<Col className="p-2" key={coin.name}>
						<a href={coin.coinrankingUrl}>
							<Card className="h-60 p-4" width="100%">

								<Row className="w-full justify-between mt-1">
									<div className="w-fit mt-1">
										<h3 className="text-lg">
											{`${index + 1}. ${coin.name}`}
										</h3>
									</div>

									<img className={`w-10 top-[5px]`}
									     src={coin.iconUrl}
									     alt="coinImage"/>
								</Row>

								<Col className="pt-[3.7rem]">
									<Row>
										<Subtitle>
											{`${t('Price')}: ${millify(coin.price)}`}
										</Subtitle>
									</Row>

									<Row className="pt-1">
										<Subtitle>
											{`${t('Market Cap')}: ${millify(coin.marketCap)}`}
										</Subtitle>
									</Row>

									<Row className="pt-1">
										<Subtitle>
											{`${t('Daily Change')}:`}
										</Subtitle>
										&nbsp;
										<Subtitle className={`flex flex-row ${clsx(coin.change > 0 ? 'text-green-500' : 'text-red-500')}`}>
											{`${coin.change}%`}
										</Subtitle>
									</Row>
								</Col>
							</Card>
						</a>
					</Col>
				)))}
		</Row>
	)
}

export default Cryptocurrencies

import { Row, Col } from '../../components/UI/Grid'
import QueryHandler from '../../components/ReactQuery/QueryHandler'
import CryptoStats from '../../components/HomePage/CryptoStats'
import Cryptocurrencies from '../../components/HomePage/Cryptocurrencies'
import coinRankingApi from '../../services/CoinRanking'
import { Link } from 'react-router-dom'
import { Coin } from '../../services/CoinRanking/types'
import { motion } from "framer-motion"
import Select from "../../components/UI/Form/Select"
import { useState } from "react"
import TextField from "../../components/UI/Form/TextField"


export default () => {
	const { t, i18n }                   = useTranslation()
	const [selectValue, setSelectValue] = useState()
	const [textFieldValue, setTextFieldValue] = useState("")

	const {
		      data,
		      status,
	      } = coinRankingApi.coins()
		.list(10)

	const coins: Coin[] | undefined = data?.data.data.coins?.slice(0, 10)

	return (
		<QueryHandler status={status}>
			<Row className="w-full px-4 pt-3"
			     initial={{
				     opacity: 0,
			     }}
			     transition={{
				     duration: 1,
			     }}
			     animate={{
				     opacity: 1,
			     }}>
				<Col className="w-full">
					<Row className="w-full">
						<Col className="w-full px-4">
							<motion.h1 className="text-5xl"
							           initial={{
								           y: -40,
							           }}
							           transition={{
								           duration: 1.2,
							           }}
							           animate={{
								           y: 0,
							           }}>
								{t('Global Crypto Stats')}
							</motion.h1>

							<CryptoStats stats={data?.data.data.stats}/>
						</Col>
					</Row>

					<Row className="w-full">
						<Col className="w-full px-4">
							<Row className="justify-between"
							     initial={{
								     x: `${i18n.dir() === 'ltr' ? '50' : '-50'}`,
							     }}
							     transition={{
								     duration: 1,
							     }}
							     animate={{
								     x: 0,
							     }}>
								<Col>
									<h1 className="mt-5 text-5xl"
									>
										{t('Top 10 Cryptocurrencies in the world')}
									</h1>
								</Col>

								<Col className="mx-6 text-2xl text-center self-end">
									<Link to="/Cryptocurrencies"
									      className="cursor-pointer text-blue-500">
										{t('Show More')}
									</Link>
								</Col>
							</Row>

							<Cryptocurrencies coins={coins}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</QueryHandler>
	)
}

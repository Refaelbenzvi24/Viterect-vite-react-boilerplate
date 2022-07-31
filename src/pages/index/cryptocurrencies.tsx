import QueryHandler from '../../components/ReactQuery/QueryHandler'
import Row from '../../components/UI/Grid/Row'
import Col from '../../components/UI/Grid/Col'
import coinRankingApi from '../../services/CoinRanking'
import Cryptocurrencies from '../../components/HomePage/Cryptocurrencies'


export default () => {
	const {
		      data,
		      status,
	      }      = coinRankingApi.coins()
		.list(50)
	const result = data?.data.data

	return (
		<QueryHandler status={status}>
			<Row className="w-full px-4 pt-3"
			     initial={{
				     opacity: 0.3,
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
							<Cryptocurrencies coins={result?.coins}/>
						</Col>

					</Row>

				</Col>

			</Row>
		</QueryHandler>
	)
}

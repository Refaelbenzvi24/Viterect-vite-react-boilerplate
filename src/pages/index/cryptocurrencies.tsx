import QueryHandler from '../../components/ReactQuery/QueryHandler'
import coinRankingApi from '../../services/CoinRanking'
import Cryptocurrencies from '../../components/HomePage/Cryptocurrencies'


export default () => {
	const { data, status } = coinRankingApi.coins().list(50)
	const result            = data?.data.data

	return (
		<QueryHandler status={status}>
			<Cryptocurrencies coins={result?.coins}/>
		</QueryHandler>
	)
}

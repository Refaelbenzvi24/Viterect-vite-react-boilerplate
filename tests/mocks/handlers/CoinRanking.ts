import {rest} from 'msw'
import {coinRankingApi} from "../../../src/services/CoinRanking";
import coinRankingData from "../data/coinRanking.json"

const coinRanking = [
	rest.get(
		coinRankingApi.coins().endpoint,
		(_, response, context) => response(context.json(coinRankingData))
	),
]

export default coinRanking

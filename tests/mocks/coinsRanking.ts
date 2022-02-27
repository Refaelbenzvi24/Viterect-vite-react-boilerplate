import { rest } from 'msw'
import coins from './data/coinsRanking.json'

const coinsRanking = [
	rest.get(
		'https://614c99f03c438c00179faa84.mockapi.io/coins',
		(_, response, context) => response(context.json(coins))
	)

]

export default coinsRanking

import { rest } from 'msw'
import news from './data/bingNews.json'


const bingNews = [
	rest.get(
		'https://614c99f03c438c00179faa84.mockapi.io/news',
		(_, response, context) => response(context.json(news))
	)

]

export default bingNews

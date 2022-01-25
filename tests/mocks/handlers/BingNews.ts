import {rest} from 'msw'
import {bingNewsApi} from "../../../src/services/BingNews";
import bingNewsData from "../data/bingNews.json"


const bingNews = [
		rest.get(
			bingNewsApi.news().endpoint,
			(_, response, context) => response(context.json(bingNewsData))
		),
]

export default bingNews

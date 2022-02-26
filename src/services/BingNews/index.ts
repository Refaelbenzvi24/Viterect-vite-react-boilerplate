import BingNewsApi from './BingNews'
import { Vars } from '../../modules/vars'


const BING_NEWS_RAPIAPI_URL: string  = Vars.rapidApi.bingNews.url
const BING_NEWS_RAPIAPI_HOST: string = Vars.rapidApi.bingNews.host
const RAPIAPI_KEY: string            = Vars.rapidApi.apiKey

const bingNewsApiData = {
	apiRootUrl:        BING_NEWS_RAPIAPI_URL,
	apiCurrentVersion: '',
	config:            {
		headers: {
			'x-bingapis-sdk':  'true',
			'x-rapidapi-host': BING_NEWS_RAPIAPI_HOST,
			'x-rapidapi-key':  RAPIAPI_KEY,
		},
	},
}

export default new BingNewsApi(bingNewsApiData)

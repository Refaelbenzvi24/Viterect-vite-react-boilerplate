import BingNewsApi from './BingNews';
import { vars as variables } from '../../plugins/vars';

const BING_NEWS_RAPIAPI_URL: string = variables.rapidApi.bingNewsApi.url;
const BING_NEWS_RAPIAPI_HOST: string = variables.rapidApi.bingNewsApi.host;
const RAPIAPI_KEY: string = variables.rapidApi.apiKey;

const bingNewsApiData = {
  apiRootUrl: BING_NEWS_RAPIAPI_URL,
  apiCurrentVersion: '',
  config: {
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': BING_NEWS_RAPIAPI_HOST,
      'x-rapidapi-key': RAPIAPI_KEY,
    },
  },
};

export const bingNewsApi = new BingNewsApi(bingNewsApiData);

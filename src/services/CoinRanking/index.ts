import CoinRankingApi from './CoinRanking';
import { vars as variables } from '../../plugins/vars';

const COINRANKING_RAPIAPI_URL: string = variables.rapidApi.coinsRankingApi.url;
const COINRANKING_RAPIAPI_HOST: string = variables.rapidApi.coinsRankingApi.host;
const RAPIAPI_KEY: string = variables.rapidApi.apiKey;

const coinRankingApiData = {
  apiRootUrl: COINRANKING_RAPIAPI_URL,
  apiCurrentVersion: '',
  config: {
    headers: {
      'x-rapidapi-host': COINRANKING_RAPIAPI_HOST,
      'x-rapidapi-key': RAPIAPI_KEY,
    },
  },
};

export const coinRankingApi = new CoinRankingApi(coinRankingApiData);

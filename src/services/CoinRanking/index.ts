import CoinRanking from "./CoinRanking";
import {useQuery} from "react-query";

const coinRankingApi = {
    apiRootUrl: 'https://coinranking1.p.rapidapi.com',
    apiCurrentVersion: '',
    config: {
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '3ba4937634msh328e7a06929f135p1ada5ajsnf1a28fd0fb50'
        }
    }
}


export const CoinRankingApi = new CoinRanking(coinRankingApi)

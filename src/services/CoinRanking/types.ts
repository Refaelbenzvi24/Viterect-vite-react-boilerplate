import type { UseQueryResult } from 'react-query'
import type { UseQueryOptions } from 'react-query/types/react/types'
import { ApiUrlServiceProps } from '../../modules/ApiUrlService'
import { AxiosRequestConfig } from 'axios'


export interface CoinRankingProps extends ApiUrlServiceProps {
	config: AxiosRequestConfig;
}

export interface CoinsEndpointType {
	endpoint: string;
	list: (limit: number, queryConfig?: UseQueryOptions) => UseQueryResult<ApiResult<CoinsListResult>>;
}

export interface CoinEndpointType {
	endpoint: string;
	get: (id: string, queryConfig?: UseQueryOptions) => UseQueryResult<ApiResult<CoinGetResult>>;
}

export interface ApiResult<ResultData> {
	data: {
		data: ResultData;
	};
}

export interface CoinsListResult {
	coins: [Coin] | undefined;
	stats: CoinStats | undefined;
}

export interface CoinGetResult {
	coin: CoinDetails | undefined;
}

export interface Coin {
	uuid: string;
	name: string;
	stats: CoinStats;
	iconUrl: string;
	price: number;
	marketCap: number;
	change: number;
	coinrankingUrl: string;
}

export interface CoinStats {
	total: number;
	totalExchanges: number;
	totalMarketCap: number;
	total24hVolume: number;
	totalMarkets: number;
}

export interface CoinDetails {
	name: string;
	symbol: string;
	price: number;
	marketCap: number;
	volume: number;
	numberOfMarkets: number;
	numberOfExchanges: number;
	rank: number;
	allTimeHigh: {
		price: number;
		marketCap: number;
		volume: number;
		date: string;
	};
	supply: {
		total: number;
		circulating: number;
		maxSupply: number;
		confirmed: number;
	};
}

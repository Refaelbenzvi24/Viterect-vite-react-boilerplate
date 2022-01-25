import type {ApiUrlServiceProps} from '../../modules/ApiUrlService';
import ApiUrlService from '../../modules/ApiUrlService';
import {useQuery} from 'react-query';
import type {AxiosRequestConfig} from 'axios';
import type {UseQueryOptions} from 'react-query/types/react/types';
import type {CoinEndpointType, CoinsEndpointType} from './types';

interface CoinRankingProps extends ApiUrlServiceProps {
	config: AxiosRequestConfig;
}

const defaultQueryConfig: UseQueryOptions = {};

export default class CoinRankingApi extends ApiUrlService {
	config: object;

	constructor(coinRankingApi: CoinRankingProps) {
		super(coinRankingApi);

		this.config = coinRankingApi.config;
	}

	coins(): CoinsEndpointType {
		return {
			endpoint: `${this.apiFullRootUrl}/coins`,
			list:     (limit = 20, queryConfig: UseQueryOptions = defaultQueryConfig) => {
				return useQuery('coins', () => {
					return http.get(`${this.coins().endpoint}?limit=${limit}`, this.config)
				}, queryConfig as {})
			}
		};
	}

	coin(): CoinEndpointType {
		return {
			endpoint: `${this.apiFullRootUrl}/coin`,
			get:      (id: string, queryConfig: UseQueryOptions = defaultQueryConfig) => {
				return useQuery(`coin-${id}`, () => {
					return http.get(`${this.coin().endpoint}/${id}`, this.config)
				}, queryConfig as {})
			}
		};
	}
}

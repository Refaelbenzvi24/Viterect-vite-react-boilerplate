import ApiUrlService from '../../modules/ApiUrlService'
import { useQuery } from 'react-query'
import type { UseQueryOptions } from 'react-query/types/react/types'
import type { CoinEndpointType, CoinRankingProps, CoinsEndpointType } from './types'
import { AxiosRequestConfig } from 'axios'


const defaultQueryConfig: UseQueryOptions = {}

export default class CoinRankingApi extends ApiUrlService {
	config: AxiosRequestConfig

	constructor(coinRankingApi: CoinRankingProps) {
		super(coinRankingApi)

		this.config = coinRankingApi.config
	}

	coins(): CoinsEndpointType {
		return {
			endpoint: `${this.apiFullRootUrl}/coins`,
			list:     (limit = 20, queryConfig: UseQueryOptions = defaultQueryConfig) => {
				return useQuery('coins', async () => {
					return http.get(`${this.coins().endpoint}?limit=${limit}`, this.config)
				}, queryConfig as object)
			},
		}
	}

	coin(): CoinEndpointType {
		return {
			endpoint: `${this.apiFullRootUrl}/coin`,
			get:      (id: string, queryConfig: UseQueryOptions = defaultQueryConfig) => {
				return useQuery(`coin-${id}`, async () => {
					return http.get(`${this.coin().endpoint}/${id}`, this.config)
				}, queryConfig as object)
			},
		}
	}
}

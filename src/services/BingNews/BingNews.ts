import ApiUrlService, { QueryDataProps } from '../../modules/ApiUrlService'
import { useQuery } from 'react-query'
import type { UseQueryOptions } from 'react-query/types/react/types'
import type { BingNewsProps, NewsEndpointType, NewsGetProps } from './types'
import { AxiosRequestConfig } from 'axios'


const defaultQueryConfig: UseQueryOptions = {}

export default class BingNewsApi extends ApiUrlService {
	config: AxiosRequestConfig

	constructor(bingNewsApi: BingNewsProps) {
		super(bingNewsApi)

		this.config = bingNewsApi.config
	}

	news(): NewsEndpointType {
		return {
			urlParams: this.buildUrlParams({
				safeSearch: 'off',
				textFormat: 'Raw',
			}),
			endpoint:  '/news',
			get:       (params: NewsGetProps = { count: 20 }, queryConfig = defaultQueryConfig) => {
				const url        = this.apiFullRootUrl + this.news().endpoint + this.buildUrlParams(params as QueryDataProps, this.news().urlParams)
				const { config } = this

				return useQuery('news', async () => http.get(url, config), queryConfig as object)
			},
		}
	}
}

import type { UseQueryResult } from 'react-query'
import type { UseQueryOptions } from 'react-query/types/react/types'
import { ApiUrlServiceProps } from '../../modules/ApiUrlService'
import { AxiosRequestConfig } from 'axios'


export interface BingNewsProps extends ApiUrlServiceProps {
	config: AxiosRequestConfig;
}

export interface NewsEndpointType {
	endpoint: string
	urlParams: string
	get: (params?: NewsGetProps, queryConfig?: UseQueryOptions) => UseQueryResult<ApiResult<NewsGetResult>>
}

export interface NewsGetProps {
	count?: number
	search?: string
}

interface ApiResult<ResultData> {
	data: ResultData
}

export interface NewsGetResult {
	value: NewsArticleType[] | undefined
}

interface NewsArticleType {
	datePublished: string
	description: string
	image: {
		thumbnail: {
			contentUrl: string
		}
	}
	name: string;
	provider: Provider[]
	url: string;
}

interface Provider {
	name: string
	image: {
		thumbnail: {
			contentUrl: string
		};
	};
}

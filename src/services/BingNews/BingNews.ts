import type {ApiUrlServiceProps, QueryDataProps} from '../../modules/ApiUrlService';
import ApiUrlService from '../../modules/ApiUrlService';
import {useQuery} from 'react-query';
import type {AxiosRequestConfig} from 'axios';
import type {UseQueryOptions} from 'react-query/types/react/types';
import type {NewsEndpointType, NewsGetProps} from './types';

interface BingNewsInterface extends ApiUrlServiceProps {
	config: AxiosRequestConfig;
}

const defaultQueryConfig: UseQueryOptions = {
	staleTime: 20_000_000,
};

export default class BingNewsApi extends ApiUrlService {
	config: AxiosRequestConfig;
	
	constructor(bingNewsApi: BingNewsInterface) {
		super(bingNewsApi);
		
		this.config = bingNewsApi.config;
	}
	
	news(): NewsEndpointType {
		return {
			urlParams: this.buildUrlParams({safeSearch: 'off', textFormat: 'Raw'}),
			endpoint:  '/news',
			get:       (parameters: NewsGetProps = {count: 20}, queryConfig = defaultQueryConfig) => {
				const url      = this.apiFullRootUrl + this.news().endpoint + this.buildUrlParams(parameters, this.news().urlParams);
				const {config} = this;
				
				return useQuery('news', () => {
					return http.get(url, config)
				}, queryConfig as {})
			},
			
			// post: async () => {
			//
			// }
		};
	}
}

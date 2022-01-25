import type {ApiUrlServiceProps, QueryDataProps} from '../../modules/ApiUrlService';
import ApiUrlService from '../../modules/ApiUrlService';
import {useQuery} from 'react-query';
import type {AxiosRequestConfig} from 'axios';
import type {UseQueryOptions} from 'react-query/types/react/types';
import type {NewsEndpointType, NewsGetProps} from './types';
import newsData from '../../../tests/mocks/data/bingNews.json'

interface BingNewsInterface extends ApiUrlServiceProps {
		config: AxiosRequestConfig;
}

const defaultQueryConfig: UseQueryOptions = {}

export default class BingNewsApi extends ApiUrlService {
		config: { [key: string]: any };

		constructor(bingNewsApi: BingNewsInterface) {
				super(bingNewsApi);

				this.config = bingNewsApi.config;
		}

		news(): NewsEndpointType {
				return <NewsEndpointType>{
						urlParams: this.buildUrlParams({safeSearch: 'off', textFormat: 'Raw'}),
						endpoint: '/news',
						get: (parameters: NewsGetProps = {count: 20}, queryConfig = defaultQueryConfig) => {
								const url = this.apiFullRootUrl + this.news().endpoint + this.buildUrlParams(parameters, this.news().urlParams)
								const {config} = this

								return useQuery('news', () => {
										const x = async () => {
												if (config.headers['x-rapidapi-key']) {
														return {
																data: newsData,
														}
												} else return await http.get(url, config)
										}
										return x()
								}, queryConfig as {})
						},
				};
		}
}

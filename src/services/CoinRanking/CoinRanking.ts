import type { ApiUrlServiceProps as ApiUrlServiceProperties } from '../../modules/ApiUrlService';
import ApiUrlService from '../../modules/ApiUrlService';
import { useQuery } from 'react-query';
import type { AxiosRequestConfig } from 'axios';
import type { UseQueryOptions } from 'react-query/types/react/types';
import type { CoinEndpointType, CoinsEndpointType } from './types';

interface CoinRankingProperties extends ApiUrlServiceProperties {
  config: AxiosRequestConfig;
}

const defaultQueryConfig: UseQueryOptions = {};

export default class CoinRankingApi extends ApiUrlService {
  config: object;

  constructor(coinRankingApi: CoinRankingProperties) {
    super(coinRankingApi);

    this.config = coinRankingApi.config;
  }

  coins(): CoinsEndpointType {
    return {
      endpoint: `${this.apiFullRootUrl}/coins`,

      list: (limit = 20, queryConfig: UseQueryOptions = defaultQueryConfig) => useQuery('coins', async () => http.get(`${this.coins().endpoint}?limit=${limit}`, this.config), queryConfig as {}),
    };
  }

  coin(): CoinEndpointType {
    return {
      endpoint: `${this.apiFullRootUrl}/coin`,
      get: (id: string, queryConfig: UseQueryOptions = defaultQueryConfig) => useQuery(`coin-${id}`, async () => http.get(`${this.coin().endpoint}/${id}`, this.config), queryConfig as {}),
    };
  }
}

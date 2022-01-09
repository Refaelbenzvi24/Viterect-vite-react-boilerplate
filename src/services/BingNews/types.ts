import type { UseQueryResult } from 'react-query';
import type { UseQueryOptions } from 'react-query/types/react/types';

export interface NewsEndpointType {
  endpoint: string;
  urlParams: string;
  get: (parameters?: NewsGetProperties, queryConfig?: UseQueryOptions) => UseQueryResult<ApiResult<NewsGetResult>>;
}

export interface NewsGetProperties {
  count?: number;
  search?: string;
}

interface ApiResult<resultData> {
  data: resultData;
}

export interface NewsGetResult {
  value: [NewsArticleType] | undefined;
}

interface NewsArticleType {
  datePublished: string;
  description: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  name: string;
  provider: Provider[];
  url: string;
}

interface Provider {
  name: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
}

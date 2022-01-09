export interface ApiUrlServiceProperties {
  apiRootUrl: string;
  apiCurrentVersion?: string;
  apiFullUrlRootUrl?: string;
}

export type QueryDataProps = Record<string, number | string>;

export default class ApiUrlService {
  apiRootUrl: string;

  apiCurrentVersion: string;

  apiFullRootUrl: string;

  constructor(api: ApiUrlServiceProperties) {
    this.apiRootUrl = api.apiRootUrl;
    this.apiCurrentVersion = api.apiCurrentVersion || '';
    this.apiFullRootUrl = this.apiRootUrl + this.apiCurrentVersion;
  }

  buildUrlParams(parameters: QueryDataProps, encodedUrlParameters?: string) {
    if (encodedUrlParameters) { return `${encodedUrlParameters}&${ApiUrlService.encodeQueryData(parameters)}`; }
    return `?${ApiUrlService.encodeQueryData(parameters)}`;
  }

  private static encodeQueryData(data: QueryDataProps) {
    const returnValue = [];
    for (const d in data) {
      if (data[d]) { returnValue.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`); }
    }
    return returnValue.join('&');
  }
}

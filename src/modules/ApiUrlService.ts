export interface ApiUrlServiceProps {
	apiRootUrl: string;
	apiCurrentVersion?: string;
	apiFullUrlRootUrl?: string;
}

export type QueryDataProps = Record<string, number | string>;

export default class ApiUrlService {
	apiRootUrl: string;
	
	apiCurrentVersion: string;
	
	apiFullRootUrl: string;
	
	constructor(api: ApiUrlServiceProps) {
		this.apiRootUrl        = api.apiRootUrl;
		this.apiCurrentVersion = api.apiCurrentVersion || '';
		this.apiFullRootUrl    = this.apiRootUrl + this.apiCurrentVersion;
	}
	
	buildUrlParams(parameters: { [key: string]: string | number } | {}, encodedUrlParameters?: string) {
		if (parameters[0 as keyof typeof parameters]) {
			if (encodedUrlParameters) {
				return `${encodedUrlParameters}&${ApiUrlService.encodeQueryData(parameters)}`
			}
			return `?${ApiUrlService.encodeQueryData(parameters)}`;
		} else if (encodedUrlParameters) {
			return encodedUrlParameters
		} else return ''
	}
	
	private static encodeQueryData(data: { [key: string]: string | number }) {
		const returnValue = [];
		for (const d in data) {
			if (data[d]) {
				returnValue.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
			}
		}
		return returnValue.join('&');
	}
}

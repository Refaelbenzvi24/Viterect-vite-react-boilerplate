export interface ApiUrlServiceProps {
	apiRootUrl: string;
	apiCurrentVersion?: string;
	apiFullUrlRootUrl?: string;
}

export type QueryDataProps = Record<string, string | number | boolean>

export default class ApiUrlService {
	apiRootUrl: string

	apiCurrentVersion: string

	apiFullRootUrl: string

	constructor(api: ApiUrlServiceProps) {
		this.apiRootUrl        = api.apiRootUrl
		this.apiCurrentVersion = api.apiCurrentVersion ?? ''
		this.apiFullRootUrl    = this.apiRootUrl + this.apiCurrentVersion
	}

	/**
	 * build url params by object, can also join to an existing url params string
	 * @param params
	 * @param encodedUrlParameters
	 */
	buildUrlParams(params: QueryDataProps, encodedUrlParameters?: string) {
		if (Object.keys(params).length > 0) {
			if (encodedUrlParameters) {
				return `${encodedUrlParameters}&${ApiUrlService.encodeQueryData(params)}`
			}
			return `?${ApiUrlService.encodeQueryData(params)}`
		}
		if (encodedUrlParameters) {
			return encodedUrlParameters
		}
		return ''
	}

	private static encodeQueryData(data: QueryDataProps) {
		const returnValue: string[] = []
		Object.keys(data)
			.forEach((key) => {
				if (data[key]) {
					returnValue.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
				}
			})
		return returnValue.join('&')
	}
}

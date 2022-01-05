export interface ApiUrlServiceProps {
    apiRootUrl: string,
    apiCurrentVersion: string
    apiFullUrlRootUrl?: string
}

export default class ApiUrlService {
    apiRootUrl: string
    apiCurrentVersion: string
    apiFullRootUrl: string

    constructor(api: ApiUrlServiceProps) {
        this.apiRootUrl = api.apiRootUrl
        this.apiCurrentVersion = api.apiCurrentVersion
        this.apiFullRootUrl = this.apiRootUrl + this.apiCurrentVersion
    }
}

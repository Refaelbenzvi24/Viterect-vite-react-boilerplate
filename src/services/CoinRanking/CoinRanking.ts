import ApiUrlService, {ApiUrlServiceProps} from "../../modules/ApiUrlService"
import {QueryOptions, useQuery} from "react-query"
import {AxiosRequestConfig} from "axios"
import {UseQueryOptions} from "react-query/types/react/types";

interface CoinRankingProps extends ApiUrlServiceProps {
    config: AxiosRequestConfig
}

const defaultQueryConfig: UseQueryOptions = {}


export default class CoinRanking extends ApiUrlService {
    config: object

    constructor(coinRankingApi: CoinRankingProps) {
        super(coinRankingApi)

        this.config = coinRankingApi.config
    }

    coins() {
        return {
            endpoint: this.apiFullRootUrl + '/coins',
            get: (limit = 20, queryConfig: UseQueryOptions = defaultQueryConfig) => {
                return useQuery('coins', () => {
                    return http.get(this.coins().endpoint + `?limit=${limit}`, this.config)
                }, queryConfig as {})
            },
            post: async () => {
                // return await http.post(this.coins.endpoint)
            }
        }
    }
}

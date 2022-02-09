import {ThemeName} from "../../components/UI/Theme/types"
import {} from "./index";

export interface EnvFileProps {
	VITE_APP_NAME: string
	VITE_ENV: string
	VITE_DEFAULT_THEME: string
	VITE_X_RAPIDAPI_KEY: string
	VITE_BING_NEWS_RAPIDAPI_URL: string
	VITE_COINRANKING_RAPIDAPI_URL: string
	VITE_COINRANKING_RAPIDAPI_HOST: string
	VITE_BING_NEWS_RAPIDAPI_HOST: string
}

export class Vars {
	static appName: string
	static env: string
	static defaultTheme: ThemeName
	static rapidApiKey: string

	static rapidApiBingNewsUrl: string
	static rapidApiBingNewsHost: string
	static rapidApiCoinsRankingUrl: string
	static rapidApiCoinsRankingHost: string

	constructor(vars: EnvFileProps) {
		Vars.appName                 = vars.VITE_APP_NAME as string
		Vars.env                     = vars.VITE_ENV as string
		Vars.defaultTheme            = vars.VITE_DEFAULT_THEME as ThemeName
		Vars.rapidApiKey             = vars.VITE_X_RAPIDAPI_KEY as string
		Vars.rapidApiBingNewsUrl     = vars.VITE_BING_NEWS_RAPIDAPI_URL as string
		Vars.rapidApiBingNewsHost    = vars.VITE_BING_NEWS_RAPIDAPI_HOST as string
		Vars.rapidApiCoinsRankingUrl = vars.VITE_COINRANKING_RAPIDAPI_URL as string
		Vars.rapidApiBingNewsHost    = vars.VITE_COINRANKING_RAPIDAPI_HOST as string
	}

	static theme = {
		defaultTheme: Vars.defaultTheme
	}

	static rapidApi = {
		apiKey:       Vars.rapidApiKey,
		bingNews:     {
			url:  Vars.rapidApiBingNewsUrl,
			host: Vars.rapidApiBingNewsHost
		},
		coinsRanking: {
			url:  Vars.rapidApiCoinsRankingUrl,
			host: Vars.rapidApiCoinsRankingHost
		}
	}

	static setupVars(envVars: EnvFileProps) {
		Vars.appName                 = envVars.VITE_APP_NAME as string
		Vars.env                     = envVars.VITE_ENV as string
		Vars.defaultTheme            = envVars.VITE_DEFAULT_THEME as ThemeName
		Vars.rapidApiKey             = envVars.VITE_X_RAPIDAPI_KEY as string
		Vars.rapidApiBingNewsUrl     = envVars.VITE_BING_NEWS_RAPIDAPI_URL as string
		Vars.rapidApiBingNewsHost    = envVars.VITE_BING_NEWS_RAPIDAPI_HOST as string
		Vars.rapidApiCoinsRankingUrl = envVars.VITE_COINRANKING_RAPIDAPI_URL as string
		Vars.rapidApiBingNewsHost    = envVars.VITE_COINRANKING_RAPIDAPI_HOST as string
	}
}

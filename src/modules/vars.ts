import { ThemeName } from '../components/UI/Theme/types'


export interface EnvFileProps {
	VITE_APP_NAME: string;
	VITE_ENV: string;
	VITE_DEFAULT_THEME: string;
	VITE_X_RAPIDAPI_KEY: string;
	VITE_BING_NEWS_RAPIDAPI_URL: string;
	VITE_COINRANKING_RAPIDAPI_URL: string;
	VITE_COINRANKING_RAPIDAPI_HOST: string;
	VITE_BING_NEWS_RAPIDAPI_HOST: string;
}

export class Vars {
	static appName: string

	static env: string

	static theme: {
		defaultTheme: ThemeName;
	}

	static rapidApi: {
		apiKey: string;
		bingNews: {
			url: string;
			host: string;
		};
		coinsRanking: {
			url: string;
			host: string;
		};
	}

	static setupVars(envVars: EnvFileProps) {
		Vars.appName  = envVars.VITE_APP_NAME
		Vars.env      = envVars.VITE_ENV
		Vars.theme    = { defaultTheme: envVars.VITE_DEFAULT_THEME as ThemeName }
		Vars.rapidApi = {
			apiKey:       envVars.VITE_X_RAPIDAPI_KEY,
			bingNews:     {
				url:  envVars.VITE_BING_NEWS_RAPIDAPI_URL,
				host: envVars.VITE_BING_NEWS_RAPIDAPI_HOST,
			},
			coinsRanking: {
				url:  envVars.VITE_COINRANKING_RAPIDAPI_URL,
				host: envVars.VITE_COINRANKING_RAPIDAPI_HOST,
			},
		}
	}
}

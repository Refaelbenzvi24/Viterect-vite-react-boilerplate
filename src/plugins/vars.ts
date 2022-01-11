import {ThemeName} from "../components/UI/Theme/types";

const environmentFile = import.meta.env;

export const vars = {
	appName:  environmentFile.VITE_APP_NAME,
	env:      environmentFile.VITE_ENV,
	theme:    {
		defaultTheme: environmentFile.VITE_DEFAULT_THEME as ThemeName,
	},
	rapidApi: {
		apiKey:          environmentFile.VITE_X_RAPIDAPI_KEY as string,
		bingNewsApi:     {
			url:  environmentFile.VITE_BING_NEWS_RAPIDAPI_URL as string,
			host: environmentFile.VITE_BING_NEWS_RAPIDAPI_HOST as string,
		},
		coinsRankingApi: {
			url:  environmentFile.VITE_COINRANKING_RAPIDAPI_URL as string,
			host: environmentFile.VITE_COINRANKING_RAPIDAPI_HOST as string,
		},
	},
};

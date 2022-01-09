const environmentFile = import.meta.env;

export const vars = {
	theme:    {
		defaultTheme: environmentFile.DEFAULT_THEME,
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

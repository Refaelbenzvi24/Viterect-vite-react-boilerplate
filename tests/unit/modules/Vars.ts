import { Vars } from "../../../src/modules/vars"


describe("Vars", () => {
	const ENV = {
		VITE_APP_NAME:                  "Viterect",
		VITE_DEFAULT_THEME:             "light",
		VITE_X_RAPIDAPI_KEY:            "some-rapidapi-key",
		VITE_BING_NEWS_RAPIDAPI_URL:    "bingnewsurl.com",
		VITE_BING_NEWS_RAPIDAPI_HOST:   "bingnewshist",
		VITE_COINRANKING_RAPIDAPI_URL:  "coinrankingurl.com",
		VITE_COINRANKING_RAPIDAPI_HOST: "coinrankinghost",
	}

	beforeEach(() => {
		Vars.setupVars(ENV)
	})

	it("should be defined", () => {
		expect(Vars).toBeDefined()
	})

	it("should contain all the variables", () => {
		expect(Vars.appName).toBe(ENV.VITE_APP_NAME)
		expect(Vars.theme.defaultTheme).toBe(ENV.VITE_DEFAULT_THEME)
		expect(Vars.rapidApi.apiKey).toBe(ENV.VITE_X_RAPIDAPI_KEY)
		expect(Vars.rapidApi.bingNews.url).toBe(ENV.VITE_BING_NEWS_RAPIDAPI_URL)
		expect(Vars.rapidApi.bingNews.host).toBe(ENV.VITE_BING_NEWS_RAPIDAPI_HOST)
		expect(Vars.rapidApi.coinsRanking.url).toBe(ENV.VITE_COINRANKING_RAPIDAPI_URL)
		expect(Vars.rapidApi.coinsRanking.host).toBe(ENV.VITE_COINRANKING_RAPIDAPI_HOST)
	})
})

import ApiUrlService, { ApiUrlServiceProps } from '../../../src/modules/ApiUrlService'


describe('ApiUrlService', () => {
	let stub: ApiUrlService
	let urlParamsObject
	let urlParamsString

	const stubData: ApiUrlServiceProps = {
		apiRootUrl:        'https://bing-news-search1.p.rapidapi.com',
		apiCurrentVersion: '/v1'
	}

	it('should be defined', () => {
		expect(ApiUrlService)
			.toBeDefined()
	})

	it('should have a apiFullRootUrl property', () => {
		stub = new ApiUrlService(stubData)

		expect(stub.apiFullRootUrl)
			.toBe('https://bing-news-search1.p.rapidapi.com/v1')
	})

	it('should add version to apiFullRootUrl', () => {
		stub = new ApiUrlService({
			apiRootUrl: 'https://bing-news-search1.p.rapidapi.com'
		})
		expect(stub.apiFullRootUrl)
			.toBe('https://bing-news-search1.p.rapidapi.com')

		stub = new ApiUrlService({
			apiRootUrl:        'https://bing-news-search1.p.rapidapi.com',
			apiCurrentVersion: '/v1'
		})
		expect(stub.apiFullRootUrl)
			.toBe('https://bing-news-search1.p.rapidapi.com/v1')
	})

	beforeEach(() => {
		stub            = new ApiUrlService(stubData)
		urlParamsObject = { count: 20, search: 'someSearchString' }
		urlParamsString = stub.buildUrlParams(urlParamsObject)
	})

	describe('apiFullUrlPath', () => {
		it('should return apiRootUrl and apiCurrentVersion joined for apiFullUrlPath', () => {
			expect(stub.apiFullRootUrl).toBe(stubData.apiRootUrl + stubData.apiCurrentVersion)
		})
	})

	describe('buildUrlParams', () => {
		it('should return url params string', () => {
			const expectedResult = '?count=20&search=someSearchString'

			expect(stub.buildUrlParams(urlParamsObject)).toBe(expectedResult)
		})

		it('should return url parameter when sending string in addition to object', () => {
			const expectedResult = '?count=20&search=someSearchString&count=20&search=someSearchString'

			expect(stub.buildUrlParams(urlParamsObject, urlParamsString)).toBe(expectedResult)
		})

		it("should ignore empty params", () => {
			const expectedResult = '?count=20'
			urlParamsObject      = { count: 20, search: "" }

			expect(stub.buildUrlParams(urlParamsObject)).toBe(expectedResult)
		})

		it('should ignore when sending empty params and a string', () => {
			const expectedResult = '?count=20&count=20'
			urlParamsObject      = { count: 20, search: "" }
			urlParamsString      = stub.buildUrlParams(urlParamsObject)

			expect(stub.buildUrlParams(urlParamsObject, urlParamsString)).toBe(expectedResult)
		})

		it('should return encodedUrlParams when empty obj sent', () => {
			const expectedResult = '?count=20&search=someSearchString'
			urlParamsObject      = {}

			expect(stub.buildUrlParams(urlParamsObject, urlParamsString)).toBe(expectedResult)
		})

		it('should return empty string when sending empty params', () => {
			const expectedResult = ''

			expect(stub.buildUrlParams({})).toBe(expectedResult)
		})
	})
})

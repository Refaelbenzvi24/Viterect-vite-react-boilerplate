import { convertToElId } from '../../../src/modules/Util'


describe('Util', () => {
	describe('convertToElId', () => {
		it('should convert a string to an element id', () => {
			expect(convertToElId('test'))
				.toBe('test')
			expect(convertToElId('test-test'))
				.toBe('test-test')
			expect(convertToElId('test test'))
				.toBe('test-test')
			expect(convertToElId('Test test'))
				.toBe('test-test')
			expect(convertToElId('test Test'))
				.toBe('test-test')
			expect(convertToElId('Test Test'))
				.toBe('test-test')
			expect(convertToElId('TesT TeSt'))
				.toBe('test-test')
		})
	})
})

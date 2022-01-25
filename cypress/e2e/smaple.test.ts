import Chance from 'chance'

// const chance = new Chance()

describe('ViterectStarter', function () {

		beforeEach(() => {
				cy.visit('http://localhost:8080')
		})

		it('should have a title', function () {
			cy.contains('VITERECT')
		})
});

import Chance from 'chance'

// const chance = new Chance()

describe('ViterectStarter', function () {

	beforeEach(() => {
		cy.viewport('macbook-13')
		cy.visit('/')
	})

	it('should have a title', function () {
		cy.contains('Viterect')
	})
})

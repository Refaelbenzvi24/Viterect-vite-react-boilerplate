describe('ViterectStarter', () => {
	beforeEach(() => {
		cy.viewport('macbook-16')
		cy.visit('/')
	})

	it('should have a title', () => {
		cy.contains('Viterect')
	})

	it('should change language', () => {
		cy.contains('Global Crypto Stats')
		cy.get('#language-toggle-button')
			.click()
		cy.contains('סטטיסטיקה')
	})

	it('should change theme', () => {
		cy.get('body')
			.should('have.css', 'background-color')
			.and('eq', 'rgb(255, 255, 255)')
		cy.get('#theme-toggle-button')
			.click()
		cy.get('body')
			.should('have.css', 'background-color')
			.and('eq', 'rgb(24, 24, 24)')
	})

	it('should navigate to the crypto page', () => {
		cy.get('#crypto-button')
			.click()
		cy.location('pathname')
			.should('eq', `/cryptocurrencies`)
	})

	it('should navigate to the news page', () => {
		cy.get('#news-button')
			.click()
		cy.location('pathname')
			.should('eq', `/news`)
	})

	it('should navigate to the about page', () => {
		cy.get('#about-button')
			.click()
		cy.contains('About')
	})

	it('should navigate to the 404 page', () => {
		cy.get('#404-button')
			.click()
		cy.contains('404')
		cy.visit('/someNonExistingPage')
		cy.contains('404')
		cy.visit('/404')
		cy.contains('404')
		cy.visit('/someOtherNonExistingPage')
		cy.contains('404')
	})

	it('should navigate to the home page', () => {
		cy.get('#home-button')
			.click()
		cy.contains('Global Crypto Stats')
	})
})

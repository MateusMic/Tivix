const now = new Date()

describe('TC1', () => {
  it('passes', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
    cy.get('[id="country"]').select('Poland')
    cy.get('[id="city"]').select('Cracow')
    cy.get('[id="pickup"]').type('2023-02-11')
    cy.get('[id="dropoff"]').type('2023-02-12')
    cy.get('[type="submit"]').click()
    cy.get('[id="search-results"]').should('be.visible')
  })
})
describe('TC2', () => {
  it('passes', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
    cy.get('[id="country"]').select('France')
    cy.get('[id="city"]').select('Paris')
    cy.get('[id="pickup"]').type('2023-02-11')
    cy.get('[id="dropoff"]').type('2023-02-22')
    cy.get('[type="submit"]').click()
    cy.get('[id="search-results"]').should('be.visible')
  })
})
describe('TC3', () => {
  it('passes', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
    cy.get('[id="country"]').select('Germainy')
    cy.get('[id="city"]').select('Berlin')
    cy.get('[id="model"]').type('Skoda Octavia')
    cy.get('[id="pickup"]').type('2023-12-01')
    cy.get('[id="dropoff"]').type('2023-12-22')
    cy.get('[type="submit"]').click()
    cy.get('[id="search-results"]').should('be.visible')
  })
})
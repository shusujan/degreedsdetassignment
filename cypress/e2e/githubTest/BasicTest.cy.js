/// <reference types="cypress" />

describe('Basic Test Cases', () => {
    beforeEach(() => {
      cy.visit('https://github.com/')
    })
  
    it('Validate if the logo is present in the page', () => {
        cy.get('.mr-lg-3').should('exist')
        cy.get('.mr-lg-3').should('be.visible')
    })
    it('Validate Sign in button is functional',() =>{
        cy.get('.text-right > .HeaderMenu-link').should('exist')
        cy.get('.text-right > .HeaderMenu-link').click()
    })
    it('Validate Navigation links (e.g., "Explore", "Pricing") redirect to the correct pages',() =>{
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get(':nth-child(6) > .HeaderMenu-link').click()
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get('.h1').should('exist')
    })
})

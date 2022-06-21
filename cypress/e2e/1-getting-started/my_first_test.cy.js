/// <reference types="cypress" />

it('googl test', function() {

    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('martialcoder{enter}')
    cy.contains('Videos').click()
})
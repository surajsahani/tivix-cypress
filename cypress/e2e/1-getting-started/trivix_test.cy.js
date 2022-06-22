/// <reference types="cypress" />

// Welcome to Trivix !
//
// This spec file contains a variety of sample tests
// for a trivix test.

// URL END-POINT http://qalab.pl.tivixlabs.com
describe('trivix app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://qalab.pl.tivixlabs.com')
  })
  
  it('it displays trivix page', function() {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    cy.get('#pickup')
    .type('2009-12-12')
    cy.get('#dropoff')
    .type('2010-12-12')
    cy.get('.btn').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
    cy.get('.btn').click()
    cy.get('#name')
      .type('sahani')
    cy.get('#last_name')
    .type('sahani')
    cy.get('#card_number')
    .type('364859294923')
    cy.get('#email')
    .type('surajkumarsahani1997@gmail.com')
   
})
})
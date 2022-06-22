/// <reference types="cypress" />



// Welcome to Trivix !
//
// This spec file contains a variety of sample tests
// for a trivix test.

// URL END-POINT http://qalab.pl.tivixlabs.com
it('checking endpoint url trivix', function() {
    cy.visit('http://qalab.pl.tivixlabs.com')
})
  it('select a country', () => {
    // country function
    cy.get('#country').select('France')
    // select country search
  })
    it('select a city', () => {
    // city function
    cy.get('#city').select('Berlin')
    // input a city
  })
      it('select a model', () => {
    // selecting am model 
        it('select a city', () => {
    // slecting a city function
    it('select a model', () => {
      // model function
      cy.get('#model').should('have.value', '')
      // can slect a model name
    })
    it('choose pickup date', () => {
      // pickup function
      // cy.get('#pickup').click()
      cy.get('[#pickup').click().get('[data-date='+myDate+']', { force: true }).click()
      // selecting a pickup time
    })
    it('choose dropoff  date', () => {
      // dropoff dunction
      cy.get('#dropoff').click()
      // select a drop off time

    })
    it('seach date validation', () => {

    })
  })
  })
  it('first name validate', () => {
    // const uuid = () => Cypress._.random('^[A-Za-z]+$')
    // const id = uuid()
    // const firstname = `${id}`

    // cy.get('#name').type(firstname)
    // cy.get('.firstname').type(firstname)
  })
  
describe('trivix app auto validate', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit('http://qalab.pl.tivixlabs.com')
  })
  
  it('auto validating all text', function() {
    cy.get('#pickup')
    .type('2009-12-12')
    cy.get('#dropoff')
    .type('2010-12-12')
    cy.get('.btn').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
    cy.get('.btn').click()

    //  const uuid = () => Cypress._.random('^[A-Za-z]+$')
    // const id = uuid()
    // const firstname = `${id}`
    // cy.get('#name').type(firstname)
    // cy.get('.firstname').type(firstname)

    cy.get('#name')
      .type('suraj')
    cy.get('#last_name')
    .type('sahani')
    cy.get('#card_number')
    .type('364859294923')
    cy.get('#email')
    .type('surajkumarsahani1997@gmail.com')
   
})
})
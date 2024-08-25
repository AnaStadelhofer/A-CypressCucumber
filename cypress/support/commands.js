// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username, password) => { 
    
    cy.get('[data-test="username"]')
        .type(username)

    cy.get('[data-test="password"]')
        .type(password)

    cy.get('#login-button')
        .click()
 })

 Cypress.Commands.add('ErrorMessage', (error) => {
    cy.get('[data-test="error"]')
        .should('exist')
        .contains(error)
 })

 Cypress.Commands.add('AllItems', () => {
    for (let i = 1; i <= 6; i++) {
        cy.get(`:nth-child(${i}) > .pricebar > .btn_primary`).click();
    }
 })

 Cypress.Commands.add('AcessCart', () => {
    cy.get('.fa-layers-counter').click()
 })
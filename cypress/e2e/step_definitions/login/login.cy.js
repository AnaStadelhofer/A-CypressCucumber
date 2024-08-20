import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const password = 'secret_sauce'

Given("que o site seja acessado", () => {

    cy.visit("https://www.saucedemo.com/v1/index.html");

    cy.title()
        .should('eq', 'Swag Labs')
});

// Cenário 1

When("preenchido as credenciais de acesso {string}", (username) => {

    cy.get('[data-test="username"]')
        .type(username)

    cy.get('[data-test="password"]')
        .type(password)

    cy.get('#login-button')
        .click()

});

Then("o usuário deve logar", () => {

    cy.get('.product_label')
        .should('exist')
        .contains('Products')

});

// Cenário 2

When("preenchido as credenciais invalídas", () => {

    cy.get('[data-test="username"]')
        .type('Usuário inexistente')

    cy.get('[data-test="password"]')
        .type(password)

    cy.get('#login-button')
        .click()

});

Then("deve retornar o erro {string}", (error) => {

    cy.get('[data-test="error"]')
        .should('exist')
        .contains(error)

});

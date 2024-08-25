import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'; 

Given("que o usuário esteja logado", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")

    cy.fixture('user').then((user) => {
        cy.Login(user.username, user.password)
    })
})

// Cenário 1
When("que seja alterado a ordenção", () => {
    cy.get('.product_sort_container')
        .select('za')
})

Then("os itens devem ser reordenados", () => {
    cy.get('.product_sort_container')
        .should('have.value', 'za')
})
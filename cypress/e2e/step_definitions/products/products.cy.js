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

// Cenário 2
When("clicado no nome do produto", () => {
    cy.get('#item_4_title_link > .inventory_item_name')
        .click()
})

Then("deve ser exibido o produto completo", () => {
    cy.get('.inventory_details_name')
        .should('exist')
        .should("contain", "Sauce Labs Backpack")

    cy.get('.inventory_details_price')
        .should('exist')
        .should("contain", "$29.99")

    cy.get('.btn_primary')
        .should('exist')

    cy.get('.inventory_details_back_button')
        .should('exist')
})

// Cenário 4
When("adicionado no carrinho", () => {
    cy.get('.fa-layers-counter')
        .should('not.exist')

    cy.get('.btn_primary')
        .should("contain", ("ADD TO CART"))
        .click()
        .should('contain', 'REMOVE')
})

Then("deve ser exibido o produto no carrinho", () => {
    cy.get('.fa-layers-counter')
        .should("exist")
        .should('contain', 1)
})
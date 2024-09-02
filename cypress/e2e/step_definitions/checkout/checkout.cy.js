import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'; 

Given("que o usuário esteja na tela de preenhcer dados", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")

    cy.fixture('user').then((user) => {
        cy.Login(user.username, user.password)
    })

    cy.AllItems()
    cy.AcessCart()
    cy.AccessCheckout()
})

// Cenário 1
When("enviado sem preencher os campos", () => {
    cy.NextStageCheckout()
})

Then("deve retornar o erro {string}", (error) => {
    cy.ErrorMessage(error)
})

// Cenário 2
When("enviado com os campos preenchidos", () => {
    cy.fixture("checkout").then((ckUser) => {
        cy.insertInformationCheckout(ckUser.name, ckUser.lastname, ckUser.zipCode)
    })
})

Then("deve avançar para a próxima etapa", () => {
    cy.NextStageCheckout()

    cy.get('.subheader')
        .should('contain', 'Checkout: Overview')

    cy.get('.btn_action')
        .should('contain', 'FINISH')
})

// Cenário 3
When("clicado para cancelar a compra", () => {
    cy.get('.cart_cancel_link').click()

    cy.get('.subheader')
        .should('contain', 'Your Cart')

    cy.get('.cart_footer > .btn_secondary')
        .click()
})

Then("deve retornar para a listagem de produto", () => {
    cy.ValidateProductsPage()
})

// Cenário 4
Given("que o usuário esteja na tela de Overview do pedido", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")

    cy.fixture('user').then((user) => {
        cy.Login(user.username, user.password)
    })

    cy.AllItems()
    cy.AcessCart()
    cy.AccessCheckout()
    cy.fixture("checkout").then((ckUser) => {
        cy.insertInformationCheckout(ckUser.name, ckUser.lastname, ckUser.zipCode)
    })
    cy.NextStageCheckout()

})

When("confirmado a compra", () =>{
    cy.get('.btn_action').click()
})

Then("deve exibir uma agradecimento ao pedido", () => {
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')

    cy.get('.pony_express').should('exist')
})
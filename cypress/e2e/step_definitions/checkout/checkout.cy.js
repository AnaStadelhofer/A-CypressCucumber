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


//ValidateProductsPage()

// Cenário 1
When("enviado sem preencher os campos", () => {
    cy.NextStageCheckout()
})

Then("deve retornar o erro {string}", (error) => {
    cy.ErrorMessage(error)
})

// Cenário 2
When("enviado com os campos preenchidos", () => {
    cy.get('[data-test="firstName"]')
    cy.get('[data-test="lastName"]')
    cy.get('[data-test="postalCode"]')
})

Then("deve avançar para a próxima etapa", () => {
    cy.NextStageCheckout()
})
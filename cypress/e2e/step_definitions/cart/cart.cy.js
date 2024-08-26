import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'; 

Given("que o usuário esteja logado", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")

    cy.fixture('user').then((user) => {
        cy.Login(user.username, user.password)
    })
})

// Cenário 1
When("adicionado todos itens ao carrinho", () => {
    cy.AllItems()
})

Then("o carrinho deve constar o item", () => {
    cy.get('.fa-layers-counter')
        .should('contain', 6)
})

// Cenário 2
When("removido todos os itens", () => {
    cy.AcessCart()

    cy.get('.cart_item')
        .should('exist')

    for (let i = 3; i <= 8; i++) {
        cy.get(`:nth-child(${i}) > .cart_item_label > .item_pricebar > .btn_secondary`).click()
    }
})

Then("o carrinho deve estar vazio", () => {
    cy.get('.cart_item')
        .should('not.exist')
})

// Cenário 3
Then("o usuário deve retornar para a listagem", () => {
    cy.AcessCart()

    cy.get('.cart_footer > .btn_secondary')
        .click()

    cy.ValidateProductsPage()
})

// Cenário 4
When("acessado o carrinho e efetuado o checkout", () => {
    cy.AcessCart()

    cy.get('.btn_action')
        .click()
})

Then("deve aparecer a tela para preencher os dados", () => {
    cy.get('.subheader')
        .should('contain', 'Checkout: Your Information')
})

// Cenário 5

When('adicionado o {string} no carrinho', (item) => {
    console.log('Passo executado com item:', item);
});

Then('o carrinho deve constar o item', () => {
    console.log('Chegou no passo Then');
});
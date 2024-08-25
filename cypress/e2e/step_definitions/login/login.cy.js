import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'; 

Given("que o site seja acessado", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")
    cy.title()
        .should('eq', 'Swag Labs')
});

// Cenário 1
When("preenchido as credenciais de acesso {string}", (username) => {
    cy.fixture('user').then((user) => {
        cy.Login(username, user.password)
    })
});

Then("o usuário deve logar", () => {
    cy.get('.product_label')
        .should('exist')
        .contains('Products')
});

// Cenário 2
When("preenchido as credenciais invalídas", () => {
    cy.fixture('user').then((user) => {
        cy.Login('Usuário inexistente', user.password)
    })
});

Then("deve retornar o erro {string}", (error) => {
    cy.ErrorMessage(error)
});

// Cenário 3
Then("deve mostrar que a imagem não carregou", () => {
    cy.get('#item_0_img_link > .inventory_item_img').should("exist").then(($img) => {
        expect($img[0].naturalWidth).to.equal(0);
        //to.be.greaterThan(0); ele verifica se a imagem é maior que 0, se for quer dizer que carregou
    })
})

// Cenário 4
Then("o usuário deve visualizar a listagem de produto", () => {
    cy.get('.peek')
        .should('exist')
        .should('be.visible')
})




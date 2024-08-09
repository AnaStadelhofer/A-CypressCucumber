import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que o site seja acessado", () => {
    cy.visit("https://vinothqaacademy.com/demo-site/");
    cy.title().should('eq', 'Demo Site – Registration Form – Vinoth Q.A Academy');
});

When("preencher o formulario", () => {
    cy.get('#vfb-5').type('Yuri');
    cy.get('#vfb-7').type('Lima');
    cy.get('#vfb-31-1').click();
    cy.get('#vfb-14').type('teste@teste.com');
    cy.get('#vfb-3').type('99');
    cy.get('#vfb-4').click();
});

Then("Valido acesso", () => {
    cy.title().should('eq', 'Demo Site – Dynamic Transaction – Vinoth Q.A Academy');
});
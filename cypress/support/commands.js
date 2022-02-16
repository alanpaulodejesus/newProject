/// <reference types="cypress" />

Cypress.Commands.add('inputText' , (locator, dado)=>{
  cy.get(locator).type(dado);
})

Cypress.Commands.add('btnClick' , (locator)=>{
  cy.get(locator).click();
})

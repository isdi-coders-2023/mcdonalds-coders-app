/// <reference types="cypress" />

describe('Buy product', () => {
  it('Follows the path ultil the order confirmation page', () => {
    cy.visit('https://202305-mcdonalds-coders.netlify.app/')
    cy.get('.nav-container li').eq(1).click()
    cy.get('.marker').eq(0).click({ force: true })
    cy.get('.price').eq(0).click({ force: true });
    cy.get('.McButton').click()
    cy.get('.view-order-link').click()
    cy.contains('Pagar con la app').click()
    cy.get('#input-name').type('John Doe', { force: true });
    cy.get('#input-email').type('doe@gmail.com');
    cy.get('#input-dni').type('234987293847');
    cy.get('#input-phone').type('1234567891');
    cy.contains('Aceptar').click()
    cy.contains('Enviar pedido').click()
    cy.contains('Pedido en curso').click()
  })

})

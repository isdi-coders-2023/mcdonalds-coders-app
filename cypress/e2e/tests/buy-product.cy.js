/// <reference types="cypress" />

describe('Buy product', () => {
  it('Follows the path ultil the order confirmation page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Pedidos').click()
    cy.get('.marker').eq(7).click()
    cy.get('.price').eq(1).click({ force: true });
    cy.contains('Agregar al pedido').click()
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
